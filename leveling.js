let levelingState = (() => {
  const raw = JSON.parse(localStorage.getItem("levelingData"));

  return {
    levels: Array.isArray(raw?.levels) ? raw.levels : [],
    pendingLevel: raw?.pendingLevel ?? null
  };
})();

document.addEventListener("DOMContentLoaded", () => {
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

  if (!hasChoices) {
    div.textContent = t("noChoices");
    confirmBtn.disabled = false;
  }
}

/* ------------------------------
   SUBCLASS
------------------------------ */

function renderSubclass(container) {
  const cls = levelingState.pendingLevel.class;

  const label = document.createElement("label");
  label.textContent = t("subclass");

  const select = document.createElement("select");
  select.appendChild(new Option(`— ${t("choose")} —`, ""));

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
  wrap.textContent = t("asiFeat") + ": ";

  const asiBtn = document.createElement("button");
  asiBtn.type = "button";
  asiBtn.textContent = t("ASI");
  asiBtn.onclick = () => {
    levelingState.pendingLevel.choices.asi = true;
    levelingState.pendingLevel.choices.feat = null;
    validate();
  };

  const featBtn = document.createElement("button");
  featBtn.type = "button";
  featBtn.textContent = t("Feat");
  featBtn.onclick = () => {
    levelingState.pendingLevel.choices.feat = t("selectedFeat");
    levelingState.pendingLevel.choices.asi = null;
    validate();
  };

  wrap.append(asiBtn, featBtn);
  container.append(wrap, document.createElement("br"));
}

/* ------------------------------
   SPELLS
------------------------------ */

function renderSpells(container) {
  const cls = levelingState.pendingLevel.class;
  const lvl = levelingState.pendingLevel.classLevel;
  const spells = SPELLS[cls]?.[lvl] || [];

  const wrap = document.createElement("div");
  wrap.textContent = t("spells") + ":";

  spells.forEach(spell => {
    const label = document.createElement("label");
    const cb = document.createElement("input");

    cb.type = "checkbox";
    cb.value = spell;

    cb.onchange = () => {
      const arr = levelingState.pendingLevel.choices.spells ||= [];
      if (cb.checked) arr.push(spell);
      else arr.splice(arr.indexOf(spell), 1);
      validate();
    };

    label.append(cb, spell);
    wrap.append(label, document.createElement("br"));
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
  levelingState.levels.push(levelingState.pendingLevel);
  levelingState.pendingLevel = null;

  document.getElementById("levelChoicesFieldset").style.display = "none";

  save();
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
  document.getElementById("levelPreview").textContent =
    JSON.stringify(levelingState.levels, null, 2);
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
