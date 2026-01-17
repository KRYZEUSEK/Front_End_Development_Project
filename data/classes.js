const CLASSES = {
  barbarian: {
    name: "Barbarian",
    hitDie: 12,
    casterType: null,
    skillChoices: 2,
    skills: ["Animal Handling", "Athletics", "Intimidation", "Nature", "Perception", "Survival"],
    subclasses: ["Berserker", "Totem Warrior", "Ancestral Guardian", "Battlerager", "Beast", "Giant", "Storm Herald", "Wild Magic", "Zealot"]
  },

  bard: {
    name: "Bard",
    hitDie: 8,
    casterType: "full",
    skillChoices: 3,
    skills: ["Any"],
    subclasses: ["Lore", "Valor", "Creation", "Eloquence", "Glamour", "Spirits", "Swords", "Whispers"]
  },

  cleric: {
    name: "Cleric",
    hitDie: 8,
    casterType: "full",
    skillChoices: 2,
    skills: ["History", "Insight", "Medicine", "Persuasion", "Religion"],
    subclasses: ["Knowledge", "Life", "Light", "Nature", "Tempest", "Trickery", "War", "Death", "Arcana", "Forge", "Grave", "Order", "Peace", "Twilight"]
  },

  druid: {
    name: "Druid",
    hitDie: 8,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "Animal Handling", "Insight", "Medicine", "Nature", "Perception", "Religion", "Survival"],
    subclasses: ["Land", "Moon", "Dreams", "Shepherd", "Spores", "Stars", "Wildfire"]
  },

  fighter: {
    name: "Fighter",
    hitDie: 10,
    casterType: null, // EK handled separately later
    skillChoices: 2,
    skills: ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"],
    subclasses: ["Champion", "Battle Master", "Eldritch Knight", "Arcane Archer", "Banneret", "Cavalier", "Echo Knight", "Psi Warrior", "Rune Knight", "Samurai"]
  },

  monk: {
    name: "Monk",
    hitDie: 8,
    casterType: null,
    skillChoices: 2,
    skills: ["Acrobatics", "Athletics", "History", "Insight", "Religion", "Stealth"],
    subclasses: ["Open Hand", "Shadow", "Four Elements", "Astral Self", "Ascendant Dragon", "Drunken Master", "Kensei", "Long Death", "Mercy", "Sun Soul"]
  },

  paladin: {
    name: "Paladin",
    hitDie: 10,
    casterType: "half",
    skillChoices: 2,
    skills: ["Athletics", "Insight", "Intimidation", "Medicine", "Persuasion", "Religion"],
    subclasses: ["Devotion", "Ancients", "Vengeance", "Conquest", "Crown", "Glory", "Redemption", "Watchers", "Oathbreaker"]
  },

  ranger: {
    name: "Ranger",
    hitDie: 10,
    casterType: "half",
    skillChoices: 3,
    skills: ["Animal Handling", "Athletics", "Insight", "Investigation", "Nature", "Perception", "Stealth", "Survival"],
    subclasses: ["Hunter", "Beast Master", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Monster Slayer", "Swarmkeeper", "Drakewarden"]
  },

  rogue: {
    name: "Rogue",
    hitDie: 8,
    casterType: null, // AT handled separately
    skillChoices: 4,
    skills: ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand", "Stealth"],
    subclasses: ["Thief", "Assassin", "Arcane Trickster", "Inquisitive", "Mastermind", " Swashbuckler", "Phantom", "Soulknife", "Scout"]
  },

  sorcerer: {
    name: "Sorcerer",
    hitDie: 6,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "Deception", "Insight", "Intimidation", "Persuasion", "Religion"],
    subclasses: ["Draconic Bloodline", "Wild Magic", "Aberrant Mind", "Shadow Magic", "Storm Sorcery", "Lunar Sorcery", "Divine Soul", "Clockwork Soul"]
  },

  warlock: {
    name: "Warlock",
    hitDie: 8,
    casterType: "pact",
    skillChoices: 2,
    skills: ["Arcana", "Deception", "History", "Intimidation", "Investigation", "Nature", "Religion"],
    subclasses: ["Archfey", "Fiend", "Great Old One", "Hexblade", "Celestial", "Fathomless", "Genie", "Undead", "Undying"]
  },

  wizard: {
    name: "Wizard",
    hitDie: 6,
    casterType: "full",
    skillChoices: 2,
    skills: ["Arcana", "History", "Insight", "Investigation", "Medicine", "Religion"],
    subclasses: ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation", "Bladesigning", "Chronurgy", "Graviturgy", "Order of Scribes", "War Magic"]
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
  subclasses: ["Alchemist", "Artillerist", "Battle Smith", "Armorer", "Archivist"]
}
};
