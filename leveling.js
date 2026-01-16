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

  if (required.choices?.includes("Subclass")) {
    renderSubclass(div);
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

  /* ✅ NO CHOICES THIS LEVEL */
  if (!hasChoices) {
    div.textContent = "No choices required at this level.";
    confirmBtn.disabled = false;
  }
}

/* ------------------------------
   SUBCLASS
------------------------------ */

function renderSubclass(container) {
  const cls = levelingState.pendingLevel.class;

  const label = document.createElement("label");
  label.textContent = "Subclass";

  const select = document.createElement("select");

  select.appendChild(new Option("— choose —", ""));

  CLASSES[cls].subclasses.forEach(s => {
    select.appendChild(new Option(s, s));
  });

  select.onchange = () => {
    levelingState.pendingLevel.choices.subclass = select.value || null;
    validate();
  };

  container.append(label, select, document.createElement("br"));
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

function renderSpellGroup({ container, title, spells, limit, target }) {
  const wrap = document.createElement("div");
  const counter = document.createElement("div");

  counter.textContent = `${limit} remaining`;
  wrap.append(document.createElement("strong"), counter);

  wrap.firstChild.textContent = title;

  spells.forEach(spell => {
    const label = document.createElement("label");
    const cb = document.createElement("input");

    cb.type = "checkbox";

    cb.onchange = () => {
      if (cb.checked) {
        if (target.length >= limit) {
          cb.checked = false;
          return;
        }
        target.push(spell);
      } else {
        target.splice(target.indexOf(spell), 1);
      }

      counter.textContent = `${limit - target.length} remaining`;
      validate();
    };

    label.append(cb, spell);
    wrap.append(label, document.createElement("br"));
  });

  container.append(wrap, document.createElement("hr"));
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


  levelingState.pendingLevel = null;
  document.getElementById("levelChoicesFieldset").style.display = "none";

  save();
  normalizeLevels();   // ← ensures consistency
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

    lines.push(`${CLASSES[l.class].name} ${counts[l.class]}`);

    if (l.choices?.spells) {
      const { cantrips = [], spells = [] } = l.choices.spells;

      if (cantrips.length) {
        lines.push(`  Cantrips: ${cantrips.join(", ")}`);
      }

      if (spells.length) {
        lines.push(`  Spells: ${spells.join(", ")}`);
      }
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