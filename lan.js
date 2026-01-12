const translations = {
  en: {
    // Navbar / general
    home: "Home",
    Chara: "Character Creator",
    NameGen: "Name Generator",
    NameGenFantasy: "Fantasy Name Generator",
    PowerScaling: "Power Scaling",

    // Index page
    indextitle: "D&D Character Forge",
    subtitle: "Create heroes, legends, and wanderers of the wilds.",
    dnddesc: "D&D 5e–accurate character creator",
    saveloaddesc: "Save & load characters locally",
    namegendesc: "Fantasy name generator",
    powerscalingdesc: "Power scaling & point-buy",
    ambientdesc: "Ambient forest visuals",

    // Power Scaling page
    PowerScalingDescriptionLong: "This page uses your saved character to calculate overall strength.",
    PowerScalingButton: "Calculate Power",

    // Name Generator page
    NameGenFantasyButton: "Generate Name",

    // Character Creator page labels (from before)
    legendBasic: "Basic",
    legendStats: "Statistics",
    legendExtra: "Extra",
    firstNameLabel: "First Name",
    lastNameLabel: "Last Name",
    raceHuman: "Human",
    raceElf: "Elf",
    raceDwarf: "Dwarf",
    raceHalfling: "Halfling",
    raceTiefling: "Tiefling",
    raceCustom: "Custom",
    customRaceLabel: "Custom Race",
    alignmentLabel: "Alignment",
    alignmentLG: "Lawful Good",
    alignmentNG: "Neutral Good",
    alignmentCG: "Chaotic Good",
    alignmentLN: "Lawful Neutral",
    alignmentTN: "True Neutral",
    alignmentCN: "Chaotic Neutral",
    alignmentLE: "Lawful Evil",
    alignmentNE: "Neutral Evil",
    alignmentCE: "Chaotic Evil",
    STR: "STR",
    DEX: "DEX",
    CON: "CON",
    INT: "INT",
    WIS: "WIS",
    CHA: "CHA",
    ageLabel: "Age",
    heightLabel: "Height",
    weightLabel: "Weight",
    notesLabel: "Notes / Backstory",
    saveBtn: "Save",
    exportBtn: "Export",
    resetBtn: "Reset",
    previewTitle: "Character Preview",
	
	// Character Creator specifics
    child: "Child",
    adult: "Adult",
    elder: "Elder",
    lifespan: "Average lifespan: {years} years",
    manualMode: "Manual",
    manualTooltip: "Type any number for stats",
    randomDropMode: "Random (4d6)",
    randomDropTooltip: "Roll 4d6 and drop the lowest die",
    randomAllMode: "Random (3d6)",
    randomAllTooltip: "Roll 3d6 sum all dice'",
    pointBuyMode: "Point Buy",
    pointBuyTooltip: "Distribute 27 points using DnD point-buy rules"
	
  },
  pl: {
    // Navbar / general
    home: "Strona główna",
    Chara: "Kreator Postaci",
    NameGen: "Generator Imion",
    NameGenFantasy: "Fantastyczny Generator Imion",
    PowerScaling: "Skalowanie Mocy",

    // Index page
    indextitle: "D&D Kuźnia Postaci",
    subtitle: "Twórz bohaterów, legendy i wędrowców lasów.",
    dnddesc: "Tworzenie postaci zgodne z D&D 5e",
    saveloaddesc: "Zapisuj i wczytuj postacie lokalnie",
    namegendesc: "Generator fantastycznych imion",
    powerscalingdesc: "Skalowanie mocy i punktów",
    ambientdesc: "Efekty wizualne magicznego lasu",

    // Power Scaling page
    PowerScalingDescriptionLong: "Ta strona wykorzystuje zapisaną postać do obliczenia całkowitej siły.",
    PowerScalingButton: "Oblicz Moc",

    // Name Generator page
    NameGenFantasyButton: "Generuj Imię",

    // Character Creator page labels (from before)
    legendBasic: "Podstawowe",
    legendStats: "Statystyki",
    legendExtra: "Dodatkowe",
    firstNameLabel: "Imię",
    lastNameLabel: "Nazwisko",
    raceHuman: "Człowiek",
    raceElf: "Elf",
    raceDwarf: "Krasnolud",
    raceHalfling: "Półling",
    raceTiefling: "Tiefling",
    raceCustom: "Własna",
    customRaceLabel: "Własna Rasa",
    alignmentLabel: "Punkty Charakteru",
    alignmentLG: "Praworządny Dobry",
    alignmentNG: "Neutralny Dobry",
    alignmentCG: "Chaotyczny Dobry",
    alignmentLN: "Praworządny Neutralny",
    alignmentTN: "Prawdziwie Neutralny",
    alignmentCN: "Chaotyczny Neutralny",
    alignmentLE: "Praworządny Zły",
    alignmentNE: "Neutralny Zły",
    alignmentCE: "Chaotyczny Zły",
    STR: "SIŁA",
    DEX: "ZRĘCZNOŚĆ",
    CON: "KONSTYTUCJA",
    INT: "INTELIGENCJA",
    WIS: "MĄDROŚĆ",
    CHA: "CHARYZMA",
    ageLabel: "Wiek",
    heightLabel: "Wzrost",
    weightLabel: "Waga",
    notesLabel: "Notatki / Historia",
    saveBtn: "Zapisz",
    exportBtn: "Eksportuj",
    loadBtn: "Eksportuj",
    resetBtn: "Resetuj",
    previewTitle: "Podgląd Postaci",
	
	// Character Creator specifics
    child: "Dziecko",
    adult: "Dorosły",
    elder: "Starszy",
    lifespan: "Średnia długość życia: {years} lat",
    manualMode: "Ręcznie",
    manualTooltip: "Wpisz dowolną liczbę dla statystyk",
    randomDropMode: "Losowe (4d6)",
    randomDropTooltip: "Rzuc 4k6 i odrzuć najniższy",
    randomAllMode: "Losowe (3d6)",
    randomAllTooltip: "Rzuć 3k6 i sumuj wszystkie",
    pointBuyMode: "Punkty",
    pointBuyTooltip: "Rozdziel 27 punktów według zasad DnD"
	
  }
};

// Translation function
function setLang(lang) {
  localStorage.setItem("lang", lang);
  const t = translations[lang] || {};

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (key && t[key] !== undefined) {
      el.textContent = t[key];
    }
  });
}

// Apply saved language on page loa
