const CLASSES = {
  barbarian: {
    name: "Barbarian",
    hitDie: 12,
    casterType: null,
    skillChoices: 2,
    skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    subclasses: ["Berserker", "Totem Warrior"]
  },

  bard: {
    name: "Bard",
    hitDie: 8,
    casterType: "full",
    skillChoices: 3,
    skills: ["Any"],
    subclasses: ["Lore", "Valor"]
  },

  cleric: {
    name: "Cleric",
    hitDie: 8,
    casterType: "full",
    skillChoices: 2,
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
    subclasses: ["Knowledge", "Life", "Light", "Nature", "Tempest", "Trickery", "War"]
  },

  druid: {
    name: "Druid",
    hitDie: 8,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
    subclasses: ["Land", "Moon"]
  },

  fighter: {
    name: "Fighter",
    hitDie: 10,
    casterType: null, // EK handled separately later
    skillChoices: 2,
    skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
    subclasses: ["Champion", "Battle Master", "Eldritch Knight"]
  },

  monk: {
    name: "Monk",
    hitDie: 8,
    casterType: null,
    skillChoices: 2,
    skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
    subclasses: ["Open Hand", "Shadow", "Four Elements"]
  },

  paladin: {
    name: "Paladin",
    hitDie: 10,
    casterType: "half",
    skillChoices: 2,
    skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
    subclasses: ["Devotion", "Ancients", "Vengeance"]
  },

  ranger: {
    name: "Ranger",
    hitDie: 10,
    casterType: "half",
    skillChoices: 3,
    skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
    subclasses: ["Hunter", "Beast Master"]
  },

  rogue: {
    name: "Rogue",
    hitDie: 8,
    casterType: null, // AT handled separately
    skillChoices: 4,
    skills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
    subclasses: ["Thief", "Assassin", "Arcane Trickster"]
  },

  sorcerer: {
    name: "Sorcerer",
    hitDie: 6,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
    subclasses: ["Draconic Bloodline", "Wild Magic"]
  },

  warlock: {
    name: "Warlock",
    hitDie: 8,
    casterType: "pact",
    skillChoices: 2,
    skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
    subclasses: ["Archfey", "Fiend", "Great Old One"]
  },

  wizard: {
    name: "Wizard",
    hitDie: 6,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
    subclasses: ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"]
  },

artificer: {
  name: "Artificer",
  hitDie: 8,
  casterType: "half",
  skillChoices: 2,
  skills: [
    "Arcana",
    "History",
    "Investigation",
    "Medicine",
    "Nature",
    "Perception",
    "Sleight of Hand"
  ],
  subclasses: ["Alchemist", "Artillerist", "Battle Smith", "Armorer"]
}
};
