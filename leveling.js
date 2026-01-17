const SPELL_LEVEL_BY_CLASS_LEVEL = {
  full:  [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  half:  [0,0,0,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5],
  third: [0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,4],
  pact:  [0,1,1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5]
};

let levelingState = (() => {
  const raw = JSON.parse(localStorage.getItem("levelingData"));

  return {
    levels: Array.isArray(raw?.levels) ? raw.levels : [],
    pendingLevel: raw?.pendingLevel ?? null
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  normalizeLevels();
  populateClassSelect();
  updateSummary();
  renderHistory();
});

/* ------------------------------
   HELPERS
------------------------------ */

function getClassLevel(cls) {
  return levelingState.levels.filter(l => l.class === cls).length;
}

function getPreviousSpellcasting(cls, classLevel) {
  return getSpellcasting(cls, classLevel - 1);
}

function getDelta(current, previous, key) {
  return Math.max((current?.[key] || 0) - (previous?.[key] || 0), 0);
}

function save() {
  localStorage.setItem("levelingData", JSON.stringify(levelingState));
}
function calculateHP(cls, level) {
  const die = CLASSES[cls].hitDie;
  return level === 1 ? die : Math.ceil(die / 2) + 1;
}

function getMaxSpellLevel(cls, classLevel) {
  const casterType = CLASSES[cls].casterType;
  if (!casterType) return 0;
  return SPELL_LEVEL_BY_CLASS_LEVEL[casterType][classLevel] || 0;
}
function normalizeLevels() {
  levelingState.levels = levelingState.levels
    .map(l => {
      if (!l.class) return null;

      // Already valid
      if (CLASSES[l.class]) return l;

      // Try to map display name → key
      const match = Object.entries(CLASSES).find(
        ([_, c]) => c.name.toLowerCase() === String(l.class).toLowerCase()
      );

      if (!match) {
        console.warn("Unknown class removed:", l);
        return null;
      }

      return {
        ...l,
        class: match[0] // convert to key (e.g. "bard")
      };
    })
    .filter(Boolean);
}
function renderSubclassFeatureImmediate(container) {
  const { class: cls, classLevel, choices } = levelingState.pendingLevel;
  const subclass = choices.subclass;
  if (!subclass) return;

  const featureData = SUBCLASSES?.[cls]?.[subclass]?.features?.[classLevel];
  if (!featureData || !featureData.length) return;

  // Create a wrapper to append features below subclass select
  let wrapper = container.querySelector(".subclass-features");
  if (!wrapper) {
    wrapper = document.createElement("div");
    wrapper.className = "subclass-features";
    container.appendChild(wrapper);
  }
  wrapper.innerHTML = ""; // clear previous features

  featureData.forEach(feature => {
    const label = document.createElement("label");
    label.textContent = feature.name;

    if (!feature.choice) {
      // Auto-grant
      choices.subclassFeature = { name: feature.name };
      wrapper.append(label, document.createElement("br"));
      return;
    }

    const select = document.createElement("select");
    select.appendChild(new Option("— choose —", ""));
    feature.choice.forEach(opt => select.appendChild(new Option(opt, opt)));

    if (
      choices.subclassFeature &&
      choices.subclassFeature.name === feature.name &&
      choices.subclassFeature.choice
    ) {
      select.value = choices.subclassFeature.choice;
    }

    select.onchange = () => {
      choices.subclassFeature = { name: feature.name, choice: select.value || null };
      validate();
    };

    wrapper.append(label, select, document.createElement("br"));
  });
}


/* ------------------------------
   CLASS SELECT
------------------------------ */

function populateClassSelect() {
  const select = document.getElementById("levelClassSelect");
  select.innerHTML = "";

  Object.entries(CLASSES).forEach(([key, cls]) => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = cls.name;
    select.appendChild(opt);
  });
}

/* ------------------------------
   START LEVEL UP
------------------------------ */

document.getElementById("startLevelBtn").onclick = () => {
  const cls = document.getElementById("levelClassSelect").value;
  const nextLevel = getClassLevel(cls) + 1;

  const classProg = CLASS_PROGRESSION[cls];
  if (!classProg || !classProg[nextLevel]) {
    alert(`No progression data for ${cls} level ${nextLevel}`);
    return;
  }

  levelingState.pendingLevel = {
    class: cls,
    classLevel: nextLevel,
    required: classProg[nextLevel],
    choices: {}
  };

  document.getElementById("levelChoicesFieldset").style.display = "block";
  renderLevelChoices();
};

/* ------------------------------
   RENDER CHOICES
------------------------------ */

function renderLevelChoices() {
  const div = document.getElementById("level-choices");
  div.innerHTML = "";

  const confirmBtn = document.getElementById("confirmLevelBtn");
  confirmBtn.disabled = true;

  const { required } = levelingState.pendingLevel;
  let hasChoices = false;

  const lvl = levelingState.pendingLevel;

  // 🔹 Always render subclass select if needed for features
  const needsSubclassSelect =
    required.choices?.includes("Subclass") ||
    (required.choices?.includes("SubclassFeature") && !lvl.choices.subclass);

  if (needsSubclassSelect) {
    renderSubclass(div);
    hasChoices = true;
  }

  // 🔹 Render subclass features if subclass is known
  if (required.choices?.includes("SubclassFeature") && lvl.choices.subclass) {
    renderSubclassFeaturesInline(div);
    hasChoices = true;
  }

  if (required.asi) {
    renderASI(div);
    hasChoices = true;
  }

  if (required.spells) {
    renderSpells(div);
    hasChoices = true;
  }

  if (!hasChoices) {
    div.textContent = "No choices required at this level.";
    confirmBtn.disabled = false;
  }

  validate();
}


/* ------------------------------
   SUBCLASS
------------------------------ */
function renderSubclass(container) {
  const lvl = levelingState.pendingLevel;
  const cls = lvl.class;
  const chosen = lvl.choices.subclass || "";

  const label = document.createElement("label");
  label.textContent = "Subclass";

  const select = document.createElement("select");
  select.appendChild(new Option("— choose —", ""));
  CLASSES[cls].subclasses.forEach(s => select.appendChild(new Option(s, s)));

  select.value = chosen;

  // Create a wrapper for features below the select
  let featureWrapper = document.createElement("div");
  featureWrapper.className = "subclass-features";

  select.onchange = () => {
    lvl.choices.subclass = select.value || null;

    // Clear old features
    lvl.choices.subclassFeature = undefined;
    featureWrapper.innerHTML = "";

    if (lvl.choices.subclass) {
      renderSubclassFeaturesInline(featureWrapper);
      renderAdditionalSpells(featureWrapper); // <-- NEW
    }

    validate();
  };

  container.append(label, select, document.createElement("br"), featureWrapper);

  // If already chosen, render features immediately
  if (chosen) {
	  renderSubclassFeaturesInline(featureWrapper);
	  renderAdditionalSpells(featureWrapper); // <-- NEW
	}
}
function renderSubclassFeaturesInline(container) {
  const lvl = levelingState.pendingLevel;
  const { class: cls, classLevel, choices } = lvl;
  const subclass = choices.subclass;
  if (!subclass) return;

  const features = SUBCLASSES?.[cls]?.[subclass]?.features?.[classLevel] || [];
  if (!features.length) return;

  features.forEach(feature => {
    const label = document.createElement("label");
    label.textContent = feature.name;

    if (!feature.choice) {
      // Auto-grant feature
      choices.subclassFeature = { name: feature.name };
      container.append(label, document.createElement("br"));
      return;
    }

    // Feature requires choice
    const select = document.createElement("select");
    select.appendChild(new Option("— choose —", ""));
    feature.choice.forEach(opt => select.appendChild(new Option(opt, opt)));

    // Restore previous choice
    if (choices.subclassFeature?.name === feature.name && choices.subclassFeature.choice) {
      select.value = choices.subclassFeature.choice;
    }

    select.onchange = () => {
      choices.subclassFeature = { name: feature.name, choice: select.value || null };
      validate();
    };

    container.append(label, select, document.createElement("br"));
  });
}

/* ------------------------------
   SUBCLASS ADDITIONAL SPELLS
------------------------------ */
function renderAdditionalSpells(container) {
  const lvl = levelingState.pendingLevel;
  const { class: cls, classLevel, choices } = lvl;
  const subclass = choices.subclass;
  if (!subclass) return;

  // Get the extra spellcasting data for this subclass at this level
  const subSpellData =
    SUBCLASS_SPELLCASTING?.[cls]?.[subclass]?.progression?.[classLevel];
  const availableSpells = SUBCLASS_SPELLS?.[subclass]?.[classLevel] || [];

  if (!subSpellData || !availableSpells?.length) return;

  // Prepare target array to store chosen subclass spells
  if (!choices.subclassSpells) choices.subclassSpells = [];
  const target = choices.subclassSpells;

  // Determine how many spells can be chosen (use spellsKnown or spellsPrepared)
  const limit = subSpellData.spellsKnown ?? subSpellData.spellsPrepared ?? availableSpells.length;

  // Render using the same spell grid function
  renderSpellGroup({
    container,
    title: `Additional ${subclass} Spells (choose ${limit})`,
    spells: availableSpells,
    limit,
    target
  });
}



/* ------------------------------
   ASI / FEAT
------------------------------ */

function renderASI(container) {
  const wrap = document.createElement("div");

  const stats = ["STR","DEX","CON","INT","WIS","CHA"];
  const selects = stats.map(stat => {
    const s = document.createElement("select");
    s.appendChild(new Option(stat, ""));
    s.appendChild(new Option("+1", 1));
    s.appendChild(new Option("+2", 2));
    return { stat, select: s };
  });

  selects.forEach(o => {
    o.select.onchange = () => {
      levelingState.pendingLevel.choices.asi = {
        stat: o.stat,
        value: Number(o.select.value)
      };
      levelingState.pendingLevel.choices.feat = null;
      validate();
    };
    wrap.append(o.stat, o.select, " ");
  });

  const featSelect = document.createElement("select");
  featSelect.appendChild(new Option("Choose Feat", ""));
  FEATS.forEach(f => featSelect.appendChild(new Option(f, f)));

  featSelect.onchange = () => {
    levelingState.pendingLevel.choices.feat = featSelect.value;
    levelingState.pendingLevel.choices.asi = null;
    validate();
  };

  container.append("ASI or Feat:", wrap, featSelect, document.createElement("br"));
}

/* ------------------------------
   SPELLS
------------------------------ */
/* ------------------------------
function getMaxSpellLevel(cls, classLevel) {
  const casterType = CLASSES[cls].casterType;
  if (!casterType) return 0;
  return SPELL_LEVEL_BY_CLASS_LEVEL[casterType][classLevel];
}
------------------------------ */
function getSpellcasting(cls, classLevel) {
  const data = SPELLCASTING[cls];
  if (!data) return null;

  return data.progression[classLevel] || null;
}

function getClassSpellState(cls) {
  if (!levelingState.spells) levelingState.spells = {};

  if (!levelingState.spells[cls]) {
    levelingState.spells[cls] = {
      cantrips: [],
      spells: []
    };
  }

  return levelingState.spells[cls];
}
function renderSpells(container) {
  const { class: cls, classLevel } = levelingState.pendingLevel;

  const current = getSpellcasting(cls, classLevel);
  const previous = getPreviousSpellcasting(cls, classLevel);
  if (!current) return;

  const classState = getClassSpellState(cls);
  
levelingState.pendingLevel.choices.spells = {
  cantrips: [],
  spells: [],
  replace: null,
  requiredCantrips: 0,
  requiredSpells: 0
};


  /* ---------- CANTRIPS ---------- */

  const newCantrips = getDelta(current, previous, "cantrips");
  levelingState.pendingLevel.choices.spells.requiredCantrips = newCantrips;


  if (newCantrips > 0) {
    const availableCantrips =
      (SPELLS[cls]?.[0] || []).filter(
        s => !classState.cantrips.includes(s)
      );

    renderSpellGroup({
      container,
      title: `Choose ${newCantrips} new cantrip(s)`,
      spells: availableCantrips,
      limit: newCantrips,
      target: levelingState.pendingLevel.choices.spells.cantrips
    });
  }

  /* ---------- SPELLS ---------- */

  const currentCount =
    current.spellsKnown ?? current.spellsPrepared ?? 0;
  const previousCount =
    previous?.spellsKnown ?? previous?.spellsPrepared ?? 0;

  const newSpells = Math.max(currentCount - previousCount, 0);
  levelingState.pendingLevel.choices.spells.requiredSpells = newSpells;

  if (newSpells > 0) {
    const availableSpells = [];

    for (let lvl = 1; lvl <= current.maxSpellLevel; lvl++) {
      availableSpells.push(
        ...(SPELLS[cls]?.[lvl] || [])
      );
    }

    const filtered = availableSpells.filter(
      s => !classState.spells.includes(s)
    );

    renderSpellGroup({
      container,
      title: `Choose ${newSpells} new spell(s)`,
      spells: filtered,
      limit: newSpells,
      target: levelingState.pendingLevel.choices.spells.spells
    });
  }

  /* ---------- OPTIONAL REPLACEMENT ---------- */

  if (current.spellsKnown && classState.spells.length) {
    renderSpellReplacement(container, cls, classState);
  }
}
const DamageTypeColors = {
  acid: "#CDF2AA",
  bludgeoning: "#B5996D",
  cold: "lightblue",
  fire: "orangered",
  force: "red",
  lightning: "#80D0FF",
  necrotic: "#C2FFCF",
  piercing: "#DED7CE",
  poison: "#9EE550",
  psychic: "pink",
  radiant: "#FCB149",
  slashing: "#C98761",
  thunder: "#DCB5FF",
  "fire & bludgeoning": "orangered",
  "radiant or necrotic": "violet",
  instant: "violet",
  heal: "#C6F5DA",
  null: "#D1D1D1" // default
};

function getSpellImg(spellData) {
  return new Promise((resolve) => {
    const img = new Image();
    // Try main img first
    img.src = spellData.img || "";
    img.onload = () => resolve(img.src);
    img.onerror = () => {
      // Try by school
      const schoolImg = spellData.school ? `data/${spellData.school.toLowerCase()}.png` : null;
      if (!schoolImg) return resolve("data/placeholder.png");

      const img2 = new Image();
      img2.src = schoolImg;
      img2.onload = () => resolve(img2.src);
      img2.onerror = () => resolve("data/placeholder.png");
    };
  });
}

function renderSpellGroup({ container, title, spells, limit, target }) {
  const wrap = document.createElement("div");

  // Title
  const header = document.createElement("strong");
  header.textContent = title;
  wrap.appendChild(header);

  // Counter
  const counter = document.createElement("div");
  counter.textContent = `${limit} remaining`;
  wrap.appendChild(counter);

  // Grid container
  const grid = document.createElement("div");
  grid.className = "spell-grid";

  spells.forEach(async (spell) => {
    const spellData = SPELLS_DETAILS[spell] || {};

    const card = document.createElement("div");
    card.className = "spell-card";
    if (target.includes(spell)) card.classList.add("selected");

    // Checkbox (hidden visually)
    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = target.includes(spell);
    cb.style.display = "none";

    // Click on card toggles selection
    card.onclick = () => {
      if (!cb.checked && target.length >= limit) return;

      cb.checked = !cb.checked;

      if (cb.checked) {
        target.push(spell);
        card.classList.add("selected");
      } else {
        const index = target.indexOf(spell);
        if (index !== -1) target.splice(index, 1);
        card.classList.remove("selected");
      }

      counter.textContent = `${limit - target.length} remaining`;
      validate();
    };

    // Spell image
    const img = document.createElement("img");
    img.alt = spell;

    // Use flexible image loading
    img.src = await getSpellImg(spellData);

    // Spell info
    const info = document.createElement("div");
    info.className = "spell-meta";

    // Color Dice and DamageType
    const damageColor = DamageTypeColors[spellData.damageType] || "grey";

    info.innerHTML = `
      <strong>${spell}</strong><br>
      Level: ${spellData.level ?? "-"}<br>
      Type: ${spellData.type ?? "-"}<br>
      Dice: <span style="color:${damageColor}">${spellData.dice ?? "-"}</span><br>
      Damage Type: <span style="color:${damageColor}">${spellData.damageType ?? "-"}</span>
    `;

    card.append(cb, img, info);
    grid.appendChild(card);
  });

  wrap.appendChild(grid);
  container.appendChild(wrap);
  container.appendChild(document.createElement("hr"));
}




function renderSpellReplacement(container, cls, classState) {
  const wrap = document.createElement("div");
  const title = document.createElement("strong");

  title.textContent = "Replace one known spell (optional)";
  wrap.append(title, document.createElement("br"));

  const removeSelect = document.createElement("select");
  removeSelect.appendChild(new Option("— choose spell to replace —", ""));

  classState.spells.forEach(s =>
    removeSelect.appendChild(new Option(s, s))
  );

  const addSelect = document.createElement("select");
  addSelect.appendChild(new Option("— choose new spell —", ""));

  const maxSpellLevel = getSpellcasting(
    cls,
    levelingState.pendingLevel.classLevel
  ).maxSpellLevel;

  for (let lvl = 1; lvl <= maxSpellLevel; lvl++) {
    (SPELLS[cls]?.[lvl] || []).forEach(spell => {
      if (!classState.spells.includes(spell)) {
        addSelect.appendChild(new Option(spell, spell));
      }
    });
  }

  function update() {
    if (removeSelect.value && addSelect.value) {
      levelingState.pendingLevel.choices.spells.replace = {
        remove: removeSelect.value,
        add: addSelect.value
      };
    } else {
      levelingState.pendingLevel.choices.spells.replace = null;
    }
    validate();
  }

  removeSelect.onchange = update;
  addSelect.onchange = update;

  wrap.append(removeSelect, addSelect);
  container.append(wrap, document.createElement("hr"));
}


/* ------------------------------
   VALIDATION
------------------------------ */

function validate() {
  const { required, choices } = levelingState.pendingLevel;
  let ok = true;

  if (required.choices?.includes("Subclass") && !choices.subclass) ok = false;

if (required.choices?.includes("SubclassFeature")) {
  const { class: cls, classLevel, choices } = levelingState.pendingLevel;
  const subclass = choices.subclass;

  const featureData =
    SUBCLASSES?.[cls]?.[subclass]?.features?.[classLevel] || [];

  // Only require if a feature actually has a choice
  const requiresChoice = featureData.some(f => f.choice);
  if (requiresChoice) {
    if (!choices.subclassFeature || !choices.subclassFeature.choice) ok = false;
  }
}


  if (required.asi && !choices.asi && !choices.feat) ok = false;

  if (required.spells) {
    const s = choices.spells;
    if (!s) ok = false;

    if (s.requiredCantrips > 0 && s.cantrips.length !== s.requiredCantrips) {
      ok = false;
    }

    if (s.requiredSpells > 0 && s.spells.length !== s.requiredSpells) {
      ok = false;
    }
  }

  document.getElementById("confirmLevelBtn").disabled = !ok;
}


/* ------------------------------
   CONFIRM LEVEL
------------------------------ */

document.getElementById("confirmLevelBtn").onclick = () => {
  const lvl = levelingState.pendingLevel;
  const classState = getClassSpellState(lvl.class);
  const chosen = lvl.choices?.spells;

  if (chosen) {
    classState.cantrips.push(...chosen.cantrips);
    classState.spells.push(...chosen.spells);

    if (chosen.replace) {
      const i = classState.spells.indexOf(chosen.replace.remove);
      if (i !== -1) classState.spells.splice(i, 1);
      classState.spells.push(chosen.replace.add);
    }
  }
  
  // ---------- SUBCLASS SPELLS ----------
	if (lvl.choices?.subclassSpells?.length) {
	  classState.spells.push(...lvl.choices.subclassSpells);
	}


  levelingState.levels.push({
    ...lvl,
    hp: calculateHP(lvl.class, lvl.classLevel)
  });

  levelingState.pendingLevel = null;
  document.getElementById("levelChoicesFieldset").style.display = "none";

  save();
  normalizeLevels();
  updateSummary();
  renderHistory();
};
/* ------------------------------
   UI
------------------------------ */

function updateSummary() {
  document.getElementById("char-summary").textContent =
    `Total Level: ${levelingState.levels.length}`;
}

function renderHistory() {
  const out = document.getElementById("levelPreview");

  if (!levelingState.levels.length) {
    out.textContent = "No levels yet.";
    return;
  }

  const counts = {};
  const lines = [];

  levelingState.levels.forEach(l => {
    counts[l.class] = (counts[l.class] || 0) + 1;
    const lvlLabel = `${CLASSES[l.class].name} ${counts[l.class]}`;
    lines.push(lvlLabel);

    /* ---------- SUBCLASS ---------- */
    if (l.choices?.subclass) {
      lines.push(`  Subclass: ${l.choices.subclass}`);
    }

/* ---------- FEATURES ---------- */
const features = [...(l.required?.features || [])];

if (l.choices?.subclassFeature) {
  const sf = l.choices.subclassFeature;
  features.push(
    sf.choice ? `${sf.name} (${sf.choice})` : sf.name
  );
}

if (features.length) {
  lines.push(`  Features: ${features.join(", ")}`);
}


    /* ---------- ASI / FEAT ---------- */
    if (l.choices?.asi) {
      lines.push(`  ASI: +${l.choices.asi.value} ${l.choices.asi.stat}`);
    } else if (l.choices?.feat) {
      lines.push(`  Feat: ${l.choices.feat}`);
    }

    /* ---------- SPELLS ---------- */
    if (l.choices?.spells) {
      const { cantrips = [], spells = [], replace } = l.choices.spells;

      if (cantrips.length) {
        lines.push(`  Cantrips: ${cantrips.join(", ")}`);
      }

      if (spells.length) {
        lines.push(`  Spells: ${spells.join(", ")}`);
      }

      if (replace) {
        lines.push(`  Replaced: ${replace.remove} → ${replace.add}`);
      }

    }
	
	if (l.choices?.subclassSpells?.length) {
	  lines.push(`  Subclass Spells: ${l.choices.subclassSpells.join(", ")}`);
	}
  });

  out.textContent = lines.join("\n");
}



/* ------------------------------
   EXPORT / IMPORT / RESET
------------------------------ */

document.getElementById("exportLeveling").onclick = () => {
  const blob = new Blob([JSON.stringify(levelingState, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "leveling.json";
  a.click();
};

document.getElementById("importLeveling").onclick = () =>
  document.getElementById("importLevelingFile").click();

document.getElementById("importLevelingFile").onchange = e => {
  const reader = new FileReader();
  reader.onload = () => {
    levelingState = JSON.parse(reader.result);
    save();
    normalizeLevels();
    updateSummary();
    renderHistory();
  };
  reader.readAsText(e.target.files[0]);
};

document.getElementById("resetLeveling").onclick = () => {
  levelingState = { levels: [], pendingLevel: null };
  save();
  updateSummary();
  renderHistory();
};