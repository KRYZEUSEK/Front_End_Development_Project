/* =====================================================
   POWERSCALING – D&D CHARACTER COMPARISON
   ===================================================== */

/* -----------------------------
   1. KONFIGURACJA
------------------------------ */

const CLASS_STAT_WEIGHTS = {
  Fighter: {
    STR: 1.0,
    DEX: 0.4,
    CON: 0.8,
    INT: 0.1,
    WIS: 0.3,
    CHA: 0.1
  },
  Wizard: {
    STR: 0.1,
    DEX: 0.5,
    CON: 0.7,
    INT: 1.0,
    WIS: 0.4,
    CHA: 0.2
  },
  Rogue: {
    STR: 0.3,
    DEX: 1.0,
    CON: 0.6,
    INT: 0.3,
    WIS: 0.4,
    CHA: 0.5
  }
};

const CLASS_COUNTERS = {
  Wizard_vs_Fighter: 1.2,
  Fighter_vs_Wizard: 0.8,
  Rogue_vs_Wizard: 1.1,
  Wizard_vs_Rogue: 0.9
};

const BALANCE = {
  CON_BONUS_MULTIPLIER: 0.5,
  LEVEL_BONUS_MULTIPLIER: 1.5
};

/* -----------------------------
   2. OBLICZANIE MOCY
------------------------------ */

function calculateBasePower(character) {
  const { className, level, stats } = character;
  const weights = CLASS_STAT_WEIGHTS[className];

  let statScore = 0;
  for (const stat in stats) {
    statScore += stats[stat] * (weights[stat] ?? 0);
  }

  const conBonus = stats.CON * BALANCE.CON_BONUS_MULTIPLIER;
  const levelBonus = level * BALANCE.LEVEL_BONUS_MULTIPLIER;

  return statScore + conBonus + levelBonus;
}

/* -----------------------------
   3. KONTRY
------------------------------ */

function applyClassCounter(power, classA, classB) {
  return power * (CLASS_COUNTERS[`${classA}_vs_${classB}`] ?? 1);
}

/* -----------------------------
   4. PORÓWNANIE
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
   5. GLOBAL EXPORT
------------------------------ */

window.compareCharacters = compareCharacters;

/* =====================================================
   KONIEC
   ===================================================== */