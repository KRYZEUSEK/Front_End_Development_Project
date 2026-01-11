/* ------------------------------
   GLOBAL MODE SWITCHER
------------------------------ */

// Load mode on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);
});

// Mode switcher
function setMode(mode) {
  const root = document.documentElement;

  // Remove all mode classes
  root.classList.remove("light-mode", "dark-mode", "colorblind-mode");

  if (mode === "dark") {
    root.classList.add("dark-mode");
  } else if (mode === "colorblind") {
    root.classList.add("colorblind-mode");
  } else {
    root.classList.add("light-mode");
  }

  localStorage.setItem("uiMode", mode);
}

/* ------------------------------
   GLOBAL LANGUAGE SWITCHER
------------------------------ */

// This function is called by buttons
function setLanguage(lang) {
  // Save selection
  localStorage.setItem("lang", lang);

  // Call translation function from lan.js
  if (typeof setLang === "function") {
    setLang(lang);
  }
}/* ------------------------------
   MODE + LANGUAGE (UNCHANGED)
------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);

  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);

  loadFromLocal();
  updatePreview();
});

function setMode(mode) {
  const root = document.documentElement;
  root.classList.remove("light-mode", "dark-mode", "colorblind-mode");

  if (mode === "dark") root.classList.add("dark-mode");
  else if (mode === "colorblind") root.classList.add("colorblind-mode");
  else root.classList.add("light-mode");

  localStorage.setItem("uiMode", mode);
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  if (typeof setLang === "function") setLang(lang);
}

/* ------------------------------
   CHARACTER DATA HANDLING
------------------------------ */

const form = document.getElementById("chara-form");
const preview = document.getElementById("preview");

/* Collect all data */
function getCharacterData() {
  return {
    firstName: firstName.value,
    lastName: lastName.value,
    race: raceSelect.value === "Custom" ? customRace.value : raceSelect.value,
    alignment: alignment.value,
    stats: {
      str: +str.value,
      dex: +dex.value,
      con: +con.value,
      int: +int.value,
      wis: +wis.value,
      cha: +cha.value
    },
    age: age.value,
    height: height.value,
    weight: weight.value,
    notes: notes.value
  };
}

/* Apply data to form */
function setCharacterData(data) {
  firstName.value = data.firstName || "";
  lastName.value = data.lastName || "";
  raceSelect.value = data.race || "Human";
  customRace.value = data.race || "";
  alignment.value = data.alignment || "";

  if (data.stats) {
    str.value = data.stats.str;
    dex.value = data.stats.dex;
    con.value = data.stats.con;
    int.value = data.stats.int;
    wis.value = data.stats.wis;
    cha.value = data.stats.cha;
  }

  age.value = data.age || "";
  height.value = data.height || "";
  weight.value = data.weight || "";
  notes.value = data.notes || "";

  updatePreview();
}

/* ------------------------------
   SAVE / LOAD LOCALSTORAGE
------------------------------ */

document.getElementById("saveLocal").onclick = () => {
  localStorage.setItem("characterData", JSON.stringify(getCharacterData()));
  alert("Character saved!");
};

function loadFromLocal() {
  const data = localStorage.getItem("characterData");
  if (data) setCharacterData(JSON.parse(data));
}

/* ------------------------------
   EXPORT JSON
------------------------------ */

document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob(
    [JSON.stringify(getCharacterData(), null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "character.json";
  a.click();
};

/* ------------------------------
   IMPORT JSON
------------------------------ */

document.getElementById("importBtn").onclick = () =>
  document.getElementById("importFile").click();

document.getElementById("importFile").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => setCharacterData(JSON.parse(reader.result));
  reader.readAsText(file);
});

/* ------------------------------
   RESET
------------------------------ */

document.getElementById("resetBtn").onclick = () => {
  if (!confirm("Reset character?")) return;
  form.reset();
  localStorage.removeItem("characterData");
  updatePreview();
};

/* ------------------------------
   PREVIEW
------------------------------ */

function updatePreview() {
  preview.textContent = JSON.stringify(getCharacterData(), null, 2);
}

form.addEventListener("input", updatePreview);

/* ------------------------------
   STAT VALIDATION
------------------------------ */

document.querySelectorAll("input[type=number]").forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
  });
});
