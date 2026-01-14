/* =====================================================
   POWERSCALING – D&D CHARACTER COMPARISON
   ===================================================== */

/* -----------------------------
   1. KONFIGURACJA
------------------------------ */

const CLASS_STAT_WEIGHTS = {

  Barbarian: {
    STR: 1.0,
    DEX: 0.4,
    CON: 1.0,
    INT: 0.1,
    WIS: 0.3,
    CHA: 0.1
  },

  Bard: {
    STR: 0.2,
    DEX: 0.6,
    CON: 0.6,
    INT: 0.4,
    WIS: 0.3,
    CHA: 1.0
  },

  Cleric: {
    STR: 0.5,
    DEX: 0.3,
    CON: 0.7,
    INT: 0.3,
    WIS: 1.0,
    CHA: 0.4
  },

  Druid: {
    STR: 0.3,
    DEX: 0.4,
    CON: 0.6,
    INT: 0.4,
    WIS: 1.0,
    CHA: 0.2
  },

  Fighter: {
    STR: 1.0,
    DEX: 0.5,
    CON: 0.8,
    INT: 0.2,
    WIS: 0.3,
    CHA: 0.2
  },

  Monk: {
    STR: 0.4,
    DEX: 1.0,
    CON: 0.6,
    INT: 0.3,
    WIS: 0.8,
    CHA: 0.2
  },

  Paladin: {
    STR: 0.9,
    DEX: 0.3,
    CON: 0.8,
    INT: 0.2,
    WIS: 0.4,
    CHA: 0.9
  },

  Ranger: {
    STR: 0.6,
    DEX: 0.8,
    CON: 0.6,
    INT: 0.3,
    WIS: 0.6,
    CHA: 0.3
  },

  Rogue: {
    STR: 0.3,
    DEX: 1.0,
    CON: 0.6,
    INT: 0.4,
    WIS: 0.4,
    CHA: 0.6
  },

  Sorcerer: {
    STR: 0.1,
    DEX: 0.5,
    CON: 0.6,
    INT: 0.4,
    WIS: 0.3,
    CHA: 1.0
  },

  Warlock: {
    STR: 0.2,
    DEX: 0.5,
    CON: 0.6,
    INT: 0.4,
    WIS: 0.4,
    CHA: 1.0
  },

  Wizard: {
    STR: 0.1,
    DEX: 0.5,
    CON: 0.6,
    INT: 1.0,
    WIS: 0.4,
    CHA: 0.2
  },

  Artificer: {
    STR: 0.3,
    DEX: 0.4,
    CON: 0.6,
    INT: 1.0,
    WIS: 0.4,
    CHA: 0.2
  }
};

/* -----------------------------
   2. KONTRY KLASOWE
------------------------------ */

const CLASS_COUNTERS = {
  Wizard_vs_Fighter: 1.2,
  Fighter_vs_Wizard: 0.8,

  Rogue_vs_Wizard: 1.1,
  Wizard_vs_Rogue: 0.9,

  Paladin_vs_Warlock: 1.1,
  Warlock_vs_Paladin: 0.9,

  Barbarian_vs_Wizard: 1.15,
  Wizard_vs_Barbarian: 0.85
};

/* -----------------------------
   3. BALANS
------------------------------ */

const BALANCE = {
  CON_BONUS_MULTIPLIER: 0.5,
  LEVEL_BONUS_MULTIPLIER: 1.5
};

/* -----------------------------
   4. OBLICZANIE MOCY
------------------------------ */

function calculateBasePower(character) {
  const { className, level, stats } = character;
  const weights = CLASS_STAT_WEIGHTS[className];

  if (!weights) {
    console.warn(`Unknown class "${className}", using Fighter as fallback`);
    return calculateBasePower({ ...character, className: "Fighter" });
  }

  let statScore = 0;
  for (const stat in stats) {
    statScore += stats[stat] * (weights[stat] ?? 0);
  }

  const conBonus = stats.CON * BALANCE.CON_BONUS_MULTIPLIER;
  const levelBonus = level * BALANCE.LEVEL_BONUS_MULTIPLIER;

  return statScore + conBonus + levelBonus;
}

/* -----------------------------
   5. KONTRY
------------------------------ */

function applyClassCounter(power, classA, classB) {
  return power * (CLASS_COUNTERS[`${classA}_vs_${classB}`] ?? 1);
}

/* -----------------------------
   6. PORÓWNANIE
------------------------------ */

function compareCharacters(charA, charB) {
  const baseA = calculateBasePower(charA);
  const baseB = calculateBasePower(charB);

  const adjA = applyClassCounter(baseA, charA.className, charB.className);
  const adjB = applyClassCounter(baseB, charB.className, charA.className);

  const total = adjA + adjB;

  return {
    winner: adjA > adjB ? charA.name : charB.name,
    probabilities: {
      [charA.name]: +(adjA / total * 100).toFixed(1),
      [charB.name]: +(adjB / total * 100).toFixed(1)
    }
  };
}

/* -----------------------------
   7. EXPORT GLOBALNY
------------------------------ */

window.compareCharacters = compareCharacters;

/* =====================================================
   KONIEC
   ===================================================== */
