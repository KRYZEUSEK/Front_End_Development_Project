const SPELLCASTING = {

  /* =========================
     FULL CASTERS (KNOWN)
  ========================= */

  bard: {
    type: "known",
    progression: [
      null,
      { cantrips: 2, spellsKnown: 4, maxSpellLevel: 1 },
      { cantrips: 2, spellsKnown: 5, maxSpellLevel: 1 },
      { cantrips: 2, spellsKnown: 6, maxSpellLevel: 2 },
      { cantrips: 3, spellsKnown: 7, maxSpellLevel: 2 },
      { cantrips: 3, spellsKnown: 8, maxSpellLevel: 3 },
      { cantrips: 3, spellsKnown: 9, maxSpellLevel: 3 },
      { cantrips: 3, spellsKnown: 10, maxSpellLevel: 4 },
      { cantrips: 3, spellsKnown: 11, maxSpellLevel: 4 },
      { cantrips: 3, spellsKnown: 12, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 14, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 15, maxSpellLevel: 6 },
      { cantrips: 4, spellsKnown: 15, maxSpellLevel: 6 },
      { cantrips: 4, spellsKnown: 16, maxSpellLevel: 7 },
      { cantrips: 4, spellsKnown: 18, maxSpellLevel: 7 },
      { cantrips: 4, spellsKnown: 19, maxSpellLevel: 8 },
      { cantrips: 4, spellsKnown: 19, maxSpellLevel: 8 },
      { cantrips: 4, spellsKnown: 20, maxSpellLevel: 9 },
      { cantrips: 4, spellsKnown: 22, maxSpellLevel: 9 },
      { cantrips: 4, spellsKnown: 22, maxSpellLevel: 9 },
      { cantrips: 4, spellsKnown: 22, maxSpellLevel: 9 }
    ]
  },

  sorcerer: {
    type: "known",
    progression: [
      null,
      { cantrips: 4, spellsKnown: 2, maxSpellLevel: 1 },
      { cantrips: 4, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 4, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 5, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 5, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 5, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 5, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 5, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 5, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 6, spellsKnown: 11, maxSpellLevel: 5 },
      { cantrips: 6, spellsKnown: 12, maxSpellLevel: 6 },
      { cantrips: 6, spellsKnown: 12, maxSpellLevel: 6 },
      { cantrips: 6, spellsKnown: 13, maxSpellLevel: 7 },
      { cantrips: 6, spellsKnown: 13, maxSpellLevel: 7 },
      { cantrips: 6, spellsKnown: 14, maxSpellLevel: 8 },
      { cantrips: 6, spellsKnown: 14, maxSpellLevel: 8 },
      { cantrips: 6, spellsKnown: 15, maxSpellLevel: 9 },
      { cantrips: 6, spellsKnown: 15, maxSpellLevel: 9 },
      { cantrips: 6, spellsKnown: 15, maxSpellLevel: 9 },
      { cantrips: 6, spellsKnown: 15, maxSpellLevel: 9 }
    ]
  },

  /* =========================
     FULL CASTERS (PREPARED)
  ========================= */

  cleric: {
    type: "prepared",
    progression: [
      null,
      { cantrips: 3, spellsPrepared: 4, maxSpellLevel: 1 },
      { cantrips: 3, spellsPrepared: 5, maxSpellLevel: 1 },
      { cantrips: 3, spellsPrepared: 6, maxSpellLevel: 2 },
      { cantrips: 4, spellsPrepared: 7, maxSpellLevel: 2 },
      { cantrips: 4, spellsPrepared: 9, maxSpellLevel: 3 },
      { cantrips: 4, spellsPrepared: 10, maxSpellLevel: 3 },
      { cantrips: 4, spellsPrepared: 11, maxSpellLevel: 4 },
      { cantrips: 4, spellsPrepared: 12, maxSpellLevel: 4 },
      { cantrips: 4, spellsPrepared: 14, maxSpellLevel: 5 },
      { cantrips: 5, spellsPrepared: 15, maxSpellLevel: 5 },
      { cantrips: 5, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 5, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 5, spellsPrepared: 17, maxSpellLevel: 7 },
      { cantrips: 5, spellsPrepared: 18, maxSpellLevel: 7 },
      { cantrips: 5, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 5, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 5, spellsPrepared: 20, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 21, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 22, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 22, maxSpellLevel: 9 }
    ]
  },

  druid: {
    type: "prepared",
    progression: [
      null,
      { cantrips: 2, spellsPrepared: 4, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 5, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 6, maxSpellLevel: 2 },
      { cantrips: 3, spellsPrepared: 7, maxSpellLevel: 2 },
      { cantrips: 3, spellsPrepared: 9, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 10, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 11, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 12, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 14, maxSpellLevel: 5 },
      { cantrips: 4, spellsPrepared: 15, maxSpellLevel: 5 },
      { cantrips: 4, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 4, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 4, spellsPrepared: 17, maxSpellLevel: 7 },
      { cantrips: 4, spellsPrepared: 18, maxSpellLevel: 7 },
      { cantrips: 4, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 4, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 4, spellsPrepared: 20, maxSpellLevel: 9 },
      { cantrips: 4, spellsPrepared: 21, maxSpellLevel: 9 },
      { cantrips: 4, spellsPrepared: 22, maxSpellLevel: 9 },
      { cantrips: 4, spellsPrepared: 22, maxSpellLevel: 9 }
    ]
  },

  wizard: {
    type: "prepared",
    progression: [
      null,
      { cantrips: 3, spellsPrepared: 6, maxSpellLevel: 1 },
      { cantrips: 3, spellsPrepared: 7, maxSpellLevel: 1 },
      { cantrips: 3, spellsPrepared: 8, maxSpellLevel: 2 },
      { cantrips: 4, spellsPrepared: 9, maxSpellLevel: 2 },
      { cantrips: 4, spellsPrepared: 10, maxSpellLevel: 3 },
      { cantrips: 4, spellsPrepared: 11, maxSpellLevel: 3 },
      { cantrips: 4, spellsPrepared: 12, maxSpellLevel: 4 },
      { cantrips: 4, spellsPrepared: 13, maxSpellLevel: 4 },
      { cantrips: 4, spellsPrepared: 14, maxSpellLevel: 5 },
      { cantrips: 5, spellsPrepared: 15, maxSpellLevel: 5 },
      { cantrips: 5, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 5, spellsPrepared: 16, maxSpellLevel: 6 },
      { cantrips: 5, spellsPrepared: 17, maxSpellLevel: 7 },
      { cantrips: 5, spellsPrepared: 18, maxSpellLevel: 7 },
      { cantrips: 5, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 5, spellsPrepared: 19, maxSpellLevel: 8 },
      { cantrips: 5, spellsPrepared: 20, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 21, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 22, maxSpellLevel: 9 },
      { cantrips: 5, spellsPrepared: 22, maxSpellLevel: 9 }
    ]
  },

  /* =========================
     PACT MAGIC
  ========================= */

  warlock: {
    type: "pact",
    progression: [
      null,
      { cantrips: 2, spellsKnown: 2, maxSpellLevel: 1 },
      { cantrips: 2, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 2, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 3, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 3, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 3, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 3, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 3, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 3, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 11, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 11, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 12, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 12, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 13, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 13, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 14, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 14, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 15, maxSpellLevel: 5 },
      { cantrips: 4, spellsKnown: 15, maxSpellLevel: 5 }
    ]
  },

  /* =========================
     HALF CASTERS
  ========================= */

  paladin: {
    type: "prepared",
    progression: [
      null,
      null,
      { cantrips: 0, spellsKnown: 2, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 11, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 11, maxSpellLevel: 5 }
    ]
  },

  ranger: {
    type: "known",
    progression: [
      null,
      null,
      { cantrips: 0, spellsKnown: 2, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 3, maxSpellLevel: 1 },
      { cantrips: 0, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 4, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 5, maxSpellLevel: 2 },
      { cantrips: 0, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 6, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 7, maxSpellLevel: 3 },
      { cantrips: 0, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 8, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 9, maxSpellLevel: 4 },
      { cantrips: 0, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 10, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 11, maxSpellLevel: 5 },
      { cantrips: 0, spellsKnown: 11, maxSpellLevel: 5 }
    ]
  },

  artificer: {
    type: "prepared",
    progression: [
      null,
      { cantrips: 2, spellsPrepared: 2, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 3, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 4, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 5, maxSpellLevel: 1 },
      { cantrips: 2, spellsPrepared: 6, maxSpellLevel: 2 },
      { cantrips: 2, spellsPrepared: 7, maxSpellLevel: 2 },
      { cantrips: 2, spellsPrepared: 8, maxSpellLevel: 2 },
      { cantrips: 2, spellsPrepared: 9, maxSpellLevel: 2 },
      { cantrips: 2, spellsPrepared: 10, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 10, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 11, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 11, maxSpellLevel: 3 },
      { cantrips: 3, spellsPrepared: 12, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 12, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 13, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 13, maxSpellLevel: 4 },
      { cantrips: 3, spellsPrepared: 14, maxSpellLevel: 5 },
      { cantrips: 3, spellsPrepared: 14, maxSpellLevel: 5 },
      { cantrips: 3, spellsPrepared: 15, maxSpellLevel: 5 },
      { cantrips: 3, spellsPrepared: 15, maxSpellLevel: 5 }
    ]
  }
};

const SUBCLASS_SPELLCASTING = {

  /* =========================
     BARD
  ========================= */
  bard: {
    "Lore": {
      type: "known",
      list: "wizard",
      progression: [
        null,
        null,
        { cantrips: 2, spellsKnown: 2, maxSpellLevel: 1 },  // Level 3: Additional Magical Secrets (choose 2)
        null,
        null,
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 2, maxSpellLevel: 3 }   // Level 6: Extra Magical Secrets (choose 2)
        // Continue with more if you want, but typically 3 & 6 are key
      ]
    }
  },

  /* =========================
     ROGUE
  ========================= */
  rogue: {
    "Arcane Trickster": {
      type: "known",
      list: "wizard",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 3, maxSpellLevel: 1, spellSchools: ["Enchantment", "Illusion"] }, // Level 3
        null,
        { cantrips: 2, spellsKnown: 4, maxSpellLevel: 2, spellSchools: ["Enchantment", "Illusion"] }, // Level 4
        null,
        { cantrips: 2, spellsKnown: 5, maxSpellLevel: 2, spellSchools: ["Enchantment", "Illusion"] }, // Level 8
        null,
        { cantrips: 2, spellsKnown: 6, maxSpellLevel: 3, spellSchools: ["Enchantment", "Illusion"] }  // Level 10
      ]
    }
  },

  /* =========================
     FIGHTER
  ========================= */
  fighter: {
    "Eldritch Knight": {
      type: "known",
      list: "wizard",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 2, maxSpellLevel: 1, spellSchools: ["Abjuration", "Evocation"] }, // Level 3
        null,
        { cantrips: 2, spellsKnown: 3, maxSpellLevel: 2, spellSchools: ["Abjuration", "Evocation"] }, // Level 7
        null,
        { cantrips: 2, spellsKnown: 4, maxSpellLevel: 2, spellSchools: ["Abjuration", "Evocation"] }, // Level 10
        null,
        { cantrips: 2, spellsKnown: 5, maxSpellLevel: 3, spellSchools: ["Abjuration", "Evocation"] }  // Level 15
      ]
    }
  },

  /* =========================
     PALADIN (Oath Subclasses)
  ========================= */
  paladin: {
    "Devotion": {
      type: "prepared",
      list: "paladin",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 }, // Level 3
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 }, // Level 5
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }  // Level 9
      ]
    },
    "Ancients": {
      type: "prepared",
      list: "paladin",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 },
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 },
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }
      ]
    },
    "Vengeance": {
      type: "prepared",
      list: "paladin",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 },
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 },
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }
      ]
    }
    // Repeat similarly for other paladin Oaths if needed
  },

  /* =========================
     DRUID
  ========================= */
  druid: {
    "Land": {
      type: "prepared",
      druid: "artificer",
      progression: [
        null,
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 }, // Level 3: bonus spells
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }, // Level 5
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 3 }, // Level 7
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 4 }  // Level 9
      ]
    }
  },

  /* =========================
     ARTIFICER
  ========================= */
  artificer: {
    "Alchemist": {
      type: "prepared",
      list: "artificer",
      progression: [
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 }, // Level 3
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }, // Level 5
      ]
    },
    "Artillerist": {
      type: "prepared",
      list: "artificer",
      progression: [
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 }, // Level 3
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 2 }  // Level 5
      ]
    },
    "Battle Smith": {
      type: "prepared",
      list: "artificer",
      progression: [
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 } // Level 3
      ]
    },
    "Armorer": {
      type: "prepared",
      list: "artificer",
      progression: [
        null,
        null,
        { cantrips: 2, spellsKnown: 1, maxSpellLevel: 1 } // Level 3
      ]
    }
  }

};
