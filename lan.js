let lang = "en";
const translations = {
  en: {
    home: "Home",
    Chara: "Character Creator",
    NameGen: "Name Generator",
    NameGenFantasy: "Fantasy Name Generator",
    PowerScaling: "Power Scaling",
    deleteBtn: "Delete",
    indextitle: "D&D Character Forge",
    subtitle: "Create heroes, legends, and wanderers of the wilds.",
    dnddesc: "D&D 5e–accurate character creator",
    saveloaddesc: "Save & load characters locally",
    namegendesc: "Fantasy name generator",
    powerscalingdesc: "Power scaling & point-buy",
    ambientdesc: "Ambient forest visuals",
    PowerScalingDescriptionLong: "This page uses your saved character to calculate overall strength.",
    PowerScalingButton: "Calculate Power",
    NameGenFantasyButton: "Generate Name"
  },
  pl: {
    home: "HomeTESTEST",
    Chara: "Character CTreator",
    NameGen: "Name GeneFrator",
    NameGenFantasy: "FanFtasy Name Generator",
    PowerScaling: "Power Scaling",
    deleteBtn: "Delete",
    indextitle: "D&D Character Forge",
    subtitle: "Create heroes, legends, and wanderers of the wilds.",
    dnddesc: "D&D 5e–accurate character creator",
    saveloaddesc: "Save & load characters locally",
    namegendesc: "Fantasy name generator",
    powerscalingdesc: "Power scaling & point-buy",
    ambientdesc: "Ambient forest visuals",
    PowerScalingDescriptionLong: "This page uses your saved character to calculate overall strength.",
    PowerScalingButton: "Calculate Power",
    NameGenFantasyButton: "Generate Name"
  }
};

function setLang(lang) {
  localStorage.setItem("lang", lang);
  const t = translations[lang];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
}

// Load saved language on page load
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  setLang(saved);
});