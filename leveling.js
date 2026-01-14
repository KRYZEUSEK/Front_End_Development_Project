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
function getMaxSpellLevel(cls, classLevel) {
  const casterType = CLASSES[cls].casterType;
  if (!casterType) return 0;
  return SPELL_LEVEL_BY_CLASS_LEVEL[casterType][classLevel];
}

function renderSpells(container) {
  const cls = levelingState.pendingLevel.class;
  const classLevel = levelingState.pendingLevel.classLevel;

  const maxSpellLevel = getMaxSpellLevel(cls, classLevel);
  const spellChoices = [];

  for (let i = 1; i <= maxSpellLevel; i++) {
    spellChoices.push(...(SPELLS[cls]?.[i] || []));
  }

  const maxKnown = CLASS_PROGRESSION[cls][classLevel].spells;

  const wrap = document.createElement("div");
  const counter = document.createElement("div");

  counter.textContent = `Choose ${maxKnown} spells`;
  wrap.append(counter);

  levelingState.pendingLevel.choices.spells = [];

  spellChoices.forEach(spell => {
    const cb = document.createElement("input");
    cb.type = "checkbox";

    cb.onchange = () => {
      const arr = levelingState.pendingLevel.choices.spells;

      if (cb.checked) {
        if (arr.length >= maxKnown) {
          cb.checked = false;
          return;
        }
        arr.push(spell);
      } else {
        arr.splice(arr.indexOf(spell), 1);
      }

      counter.textContent = `Choose ${maxKnown - arr.length} spells`;
      validate();
    };

    wrap.append(cb, spell, document.createElement("br"));
  });

  container.append(wrap);
}

/* ------------------------------
   VALIDATION
------------------------------ */

function validate() {
  const { required, choices } = levelingState.pendingLevel;
  let ok = true;

  if (required.choices?.includes("Subclass") && !choices.subclass) ok = false;
  if (required.asi && !choices.asi && !choices.feat) ok = false;
  if (required.spells && (!choices.spells || choices.spells.length === 0)) ok = false;

  document.getElementById("confirmLevelBtn").disabled = !ok;
}

/* ------------------------------
   CONFIRM LEVEL
------------------------------ */

document.getElementById("confirmLevelBtn").onclick = () => {
  levelingState.levels.push({
    ...levelingState.pendingLevel,
    hp: calculateHP(
      levelingState.pendingLevel.class,
      levelingState.pendingLevel.classLevel
    )
  });

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

  const lines = levelingState.levels.map(l => {
    counts[l.class] = (counts[l.class] || 0) + 1;
    return `${CLASSES[l.class].name} ${counts[l.class]}`;
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

// ------------------------------
// LOAD LEVELING FROM SAVE
// ------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const loadBtn = document.getElementById("loadLeveling");
  if (!loadBtn) return;

  loadBtn.addEventListener("click", () => {
    const saved = localStorage.getItem("saveLeveling");
    if (!saved) {
      alert("No saved leveling data found.");
      return;
    }

    try {
      levelingState = JSON.parse(saved); // load saved state
      save();           // update localStorage/current state
      normalizeLevels(); // fix any inconsistencies
      updateSummary();   // refresh summary UI
      renderHistory();   // refresh history UI
      alert("Leveling data loaded successfully!");
    } catch (err) {
      console.error("Failed to load leveling data:", err);
      alert("Failed to load leveling data. See console for details.");
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("saveLeveling");
  if (!saveBtn) return;

  saveBtn.addEventListener("click", () => {
    try {
      localStorage.setItem("saveLeveling", JSON.stringify(levelingState));
      alert("Leveling data saved successfully!");
    } catch (err) {
      console.error("Failed to save leveling data:", err);
      alert("Failed to save leveling data. See console for details.");
    }
  });
});
