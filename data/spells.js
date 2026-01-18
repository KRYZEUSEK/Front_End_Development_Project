const SPELLS = {
  wizard: {
    0: ["Fire Bolt", "Light", "Mage Hand", "Prestidigitation", "Ray of Frost", "Minor Illusion", "Acid Splash", "Chill Touch"],
    1: ["Magic Missile", "Shield", "Sleep", "Mage Armor", "Detect Magic", "Burning Hands", "Chromatic Orb", "Thunderwave"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Scorching Ray", "Invisibility", "Levitate", "Web", "Blur"],
    3: ["Counterspell", "Dispel Magic", "Fireball", "Fly", "Haste", "Lightning Bolt", "Major Image", "Sleet Storm"],
    4: ["Greater Invisibility", "Polymorph", "Ice Storm", "Dimension Door", "Stoneskin", "Wall of Fire"],
    5: ["Wall of Force", "Teleportation Circle", "Cone of Cold", "Cloudkill", "Animate Objects", "Bigby's Hand"],
    6: ["Disintegrate", "Globe of Invulnerability", "Mass Suggestion", "Flesh to Stone"],
    7: ["Finger of Death", "Teleport", "Plane Shift", "Reverse Gravity"],
    8: ["Dominate Monster", "Earthquake", "Incendiary Cloud", "Antimagic Field"],
    9: ["Meteor Swarm", "Time Stop", "Wish", "Power Word: Kill"]
  },

  cleric: {
    0: ["Guidance", "Sacred Flame", "Thaumaturgy", "Light", "Spare the Dying"],
    1: ["Cure Wounds", "Bless", "Shield of Faith", "Command", "Detect Magic", "Inflict Wounds", "Protection from Evil and Good"],
    2: ["Spiritual Weapon", "Hold Person", "Lesser Restoration", "Enhance Ability", "Aid", "Prayer of Healing"],
    3: ["Dispel Magic", "Spirit Guardians", "Mass Healing Word", "Revivify", "Beacon of Hope", "Sending"],
    4: ["Freedom of Movement", "Guardian of Faith", "Divination", "Death Ward", "Control Water"],
    5: ["Raise Dead", "Flame Strike", "Mass Cure Wounds", "Dispel Evil and Good", "Commune"],
    6: ["Heal", "Blade Barrier", "Word of Recall"],
    7: ["Resurrection", "Fire Storm", "Regenerate"],
    8: ["Holy Aura", "Earthquake"],
    9: ["True Resurrection", "Astral Projection"]
  },

  druid: {
    0: ["Druidcraft", "Shillelagh", "Guidance", "Produce Flame", "Thorn Whip"],
    1: ["Entangle", "Goodberry", "Cure Wounds", "Faerie Fire", "Thunderwave", "Absorb Elements"],
    2: ["Moonbeam", "Flaming Sphere", "Hold Person", "Pass without Trace", "Spike Growth", "Lesser Restoration"],
    3: ["Call Lightning", "Plant Growth", "Wind Wall", "Water Breathing", "Dispel Magic", "Sleet Storm"],
    4: ["Ice Storm", "Stoneskin", "Greater Invisibility", "Freedom of Movement", "Conjure Minor Elementals"],
    5: ["Wall of Stone", "Commune with Nature", "Tree Stride", "Reincarnate", "Mass Cure Wounds"],
    6: ["Heal", "Conjure Fey", "Sunbeam", "Transport via Plants"],
    7: ["Fire Storm", "Regenerate", "Plane Shift"],
    8: ["Animal Shapes", "Earthquake", "Sunburst"],
    9: ["Foresight", "Shapechange", "Storm of Vengeance"]
  },

  bard: {
    0: ["Vicious Mockery", "Prestidigitation", "Mage Hand", "Dancing Lights", "Minor Illusion"],
    1: ["Healing Word", "Charm Person", "Detect Magic", "Dissonant Whispers", "Faerie Fire", "Thunderwave"],
    2: ["Enhance Ability", "Invisibility", "Hold Person", "Mirror Image", "Suggestion", "Lesser Restoration"],
    3: ["Hypnotic Pattern", "Dispel Magic", "Leomund's Tiny Hut", "Major Image", "Counterspell"],
    4: ["Greater Invisibility", "Polymorph", "Freedom of Movement", "Compulsion"],
    5: ["Animate Objects", "Dominate Person", "Hold Monster", "Mass Cure Wounds"],
    6: ["Mass Suggestion", "Otto's Irresistible Dance", "True Seeing"],
    7: ["Forcecage", "Teleport", "Mirage Arcane"],
    8: ["Mind Blank", "Power Word: Stun"],
    9: ["Foresight", "Power Word: Heal"]
  },

  sorcerer: {
    0: ["Fire Bolt", "Light", "Mage Hand", "Prestidigitation", "Ray of Frost", "Acid Splash", "Chill Touch"],
    1: ["Shield", "Magic Missile", "Mage Armor", "Burning Hands", "Chromatic Orb", "Thunderwave"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Scorching Ray", "Invisibility", "Blur", "Web"],
    3: ["Fireball", "Counterspell", "Fly", "Haste", "Lightning Bolt", "Major Image", "Sleet Storm"],
    4: ["Greater Invisibility", "Polymorph", "Ice Storm", "Dimension Door", "Stoneskin", "Wall of Fire"],
    5: ["Wall of Force", "Teleportation Circle", "Cone of Cold", "Animate Objects", "Bigby's Hand"],
    6: ["Disintegrate", "Mass Suggestion", "Globe of Invulnerability"],
    7: ["Teleport", "Plane Shift", "Finger of Death"],
    8: ["Dominate Monster", "Earthquake", "Antimagic Field"],
    9: ["Meteor Swarm", "Time Stop", "Wish"]
  },

  warlock: {
    0: ["Eldritch Blast", "Mage Hand", "Prestidigitation", "Minor Illusion", "Chill Touch"],
    1: ["Hex", "Armor of Agathys", "Hellish Rebuke", "Charm Person", "Witch Bolt"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Invisibility", "Darkness"],
    3: ["Counterspell", "Dispel Magic", "Fear", "Fly", "Hunger of Hadar"],
    4: ["Banishment", "Greater Invisibility", "Phantasmal Killer", "Stoneskin"],
    5: ["Hold Monster", "Wall of Force", "Contact Other Plane", "Dream"],
    6: ["Circle of Death", "Eyebite", "True Seeing"],
    7: ["Finger of Death", "Plane Shift"],
    8: ["Demiplane", "Power Word: Stun"],
    9: ["Foresight", "True Polymorph"]
  },

  paladin: {
    0: ["Sacred Flame", "Light", "Thaumaturgy", "Guidance"],
    1: ["Bless", "Cure Wounds", "Divine Favor", "Shield of Faith", "Compelled Duel"],
    2: ["Lesser Restoration", "Magic Weapon", "Aid", "Find Steed"],
    3: ["Aura of Vitality", "Dispel Magic", "Revivify", "Remove Curse"],
    4: ["Death Ward", "Staggering Smite", "Guardian of Faith", "Freedom of Movement"],
    5: ["Banishing Smite", "Destructive Wave", "Circle of Power"]
  },

  ranger: {
    0: ["Hunter's Mark", "Shillelagh", "Guidance", "Light", "Resistance"],
    1: ["Cure Wounds", "Hail of Thorns", "Detect Magic", "Ensnaring Strike"],
    2: ["Pass without Trace", "Lesser Restoration", "Spike Growth", "Animal Messenger"],
    3: ["Conjure Animals", "Lightning Arrow", "Plant Growth", "Wind Wall"],
    4: ["Freedom of Movement", "Grasping Vine", "Stoneskin"],
    5: ["Commune with Nature", "Swift Quiver", "Tree Stride"]
  },
  artificer: {
  0: [
    "Acid Splash",
    "Dancing Lights",
    "Fire Bolt",
    "Guidance",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Resistance",
    "Shocking Grasp",
    "Spare the Dying",
    "Thorn Whip"
  ],
  1: [
    "Absorb Elements",
    "Alarm",
    "Catapult",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Expeditious Retreat",
    "Faerie Fire",
    "False Life",
    "Feather Fall",
    "Grease",
    "Identify",
    "Jump",
    "Longstrider",
    "Sanctuary",
    "Snare",
    "Unseen Servant"
  ],
  2: [
    "Aid",
    "Alter Self",
    "Arcane Lock",
    "Blur",
    "Darkvision",
    "Earthbind",
    "Enhance Ability",
    "Enlarge/Reduce",
    "Heat Metal",
    "Hold Person",
    "Knock",
    "Magic Weapon",
    "Magic Mouth",
    "See Invisibility",
    "Spider Climb"
  ],
  3: [
    "Counterspell",
    "Dispel Magic",
    "Elemental Weapon",
    "Feign Death",
    "Gaseous Form",
    "Glyph of Warding",
    "Magic Circle",
    "Protection from Energy",
    "Sending",
    "Water Breathing",
    "Water Walk",
    "Wind Wall"
  ],
  4: [
    "Arcane Eye",
    "Death Ward",
    "Fabricate",
    "Freedom of Movement",
    "Greater Invisibility",
    "Leomund's Tiny Hut",
    "Otiluke's Resilient Sphere",
    "Stone Shape",
    "Stoneskin"
  ],
  5: [
    "Animate Objects",
    "Creation",
    "Legend Lore",
    "Mislead",
    "Passwall",
    "Telekinesis",
    "Teleportation Circle",
    "Wall of Stone"
  ]
}

};

const SPELLS_TASHA = {
  wizard: {
    0: ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Encode Thoughts", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Mold Earth", "On/Off (UA)", "Poison Spray", "Prestidigitation", "Ray of Frost", "Sapping Sting", "Shape Water", "Shocking Grasp", "Sword Burst", "Thunderclap", "Toll the Dead", "True Strike"],
    1: ["Magic Missile", "Shield", "Sleep", "Mage Armor", "Detect Magic", "Burning Hands", "Chromatic Orb", "Thunderwave"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Scorching Ray", "Invisibility", "Levitate", "Web", "Blur"],
    3: ["Counterspell", "Dispel Magic", "Fireball", "Fly", "Haste", "Lightning Bolt", "Major Image", "Sleet Storm"],
    4: ["Greater Invisibility", "Polymorph", "Ice Storm", "Dimension Door", "Stoneskin", "Wall of Fire"],
    5: ["Wall of Force", "Teleportation Circle", "Cone of Cold", "Cloudkill", "Animate Objects", "Bigby's Hand"],
    6: ["Disintegrate", "Globe of Invulnerability", "Mass Suggestion", "Flesh to Stone"],
    7: ["Finger of Death", "Teleport", "Plane Shift", "Reverse Gravity"],
    8: ["Dominate Monster", "Earthquake", "Incendiary Cloud", "Antimagic Field"],
    9: ["Meteor Swarm", "Time Stop", "Wish", "Power Word: Kill"]
  },

  cleric: {
    0: ["Guidance", "Sacred Flame", "Thaumaturgy", "Light", "Spare the Dying"],
    1: ["Cure Wounds", "Bless", "Shield of Faith", "Command", "Detect Magic", "Inflict Wounds", "Protection from Evil and Good"],
    2: ["Spiritual Weapon", "Hold Person", "Lesser Restoration", "Enhance Ability", "Aid", "Prayer of Healing"],
    3: ["Dispel Magic", "Spirit Guardians", "Mass Healing Word", "Revivify", "Beacon of Hope", "Sending"],
    4: ["Freedom of Movement", "Guardian of Faith", "Divination", "Death Ward", "Control Water"],
    5: ["Raise Dead", "Flame Strike", "Mass Cure Wounds", "Dispel Evil and Good", "Commune"],
    6: ["Heal", "Blade Barrier", "Word of Recall"],
    7: ["Resurrection", "Fire Storm", "Regenerate"],
    8: ["Holy Aura", "Earthquake"],
    9: ["True Resurrection", "Astral Projection"]
  },

  druid: {
    0: ["Druidcraft", "Shillelagh", "Guidance", "Produce Flame", "Thorn Whip"],
    1: ["Entangle", "Goodberry", "Cure Wounds", "Faerie Fire", "Thunderwave", "Absorb Elements"],
    2: ["Moonbeam", "Flaming Sphere", "Hold Person", "Pass without Trace", "Spike Growth", "Lesser Restoration"],
    3: ["Call Lightning", "Plant Growth", "Wind Wall", "Water Breathing", "Dispel Magic", "Sleet Storm"],
    4: ["Ice Storm", "Stoneskin", "Greater Invisibility", "Freedom of Movement", "Conjure Minor Elementals"],
    5: ["Wall of Stone", "Commune with Nature", "Tree Stride", "Reincarnate", "Mass Cure Wounds"],
    6: ["Heal", "Conjure Fey", "Sunbeam", "Transport via Plants"],
    7: ["Fire Storm", "Regenerate", "Plane Shift"],
    8: ["Animal Shapes", "Earthquake", "Sunburst"],
    9: ["Foresight", "Shapechange", "Storm of Vengeance"]
  },

  bard: {
    0: ["Vicious Mockery", "Prestidigitation", "Mage Hand", "Dancing Lights", "Minor Illusion"],
    1: ["Healing Word", "Charm Person", "Detect Magic", "Dissonant Whispers", "Faerie Fire", "Thunderwave"],
    2: ["Enhance Ability", "Invisibility", "Hold Person", "Mirror Image", "Suggestion", "Lesser Restoration"],
    3: ["Hypnotic Pattern", "Dispel Magic", "Leomund's Tiny Hut", "Major Image", "Counterspell"],
    4: ["Greater Invisibility", "Polymorph", "Freedom of Movement", "Compulsion"],
    5: ["Animate Objects", "Dominate Person", "Hold Monster", "Mass Cure Wounds"],
    6: ["Mass Suggestion", "Otto's Irresistible Dance", "True Seeing"],
    7: ["Forcecage", "Teleport", "Mirage Arcane"],
    8: ["Mind Blank", "Power Word: Stun"],
    9: ["Foresight", "Power Word: Heal"]
  },

  sorcerer: {
    0: ["Fire Bolt", "Light", "Mage Hand", "Prestidigitation", "Ray of Frost", "Acid Splash", "Chill Touch"],
    1: ["Shield", "Magic Missile", "Mage Armor", "Burning Hands", "Chromatic Orb", "Thunderwave"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Scorching Ray", "Invisibility", "Blur", "Web"],
    3: ["Fireball", "Counterspell", "Fly", "Haste", "Lightning Bolt", "Major Image", "Sleet Storm"],
    4: ["Greater Invisibility", "Polymorph", "Ice Storm", "Dimension Door", "Stoneskin", "Wall of Fire"],
    5: ["Wall of Force", "Teleportation Circle", "Cone of Cold", "Animate Objects", "Bigby's Hand"],
    6: ["Disintegrate", "Mass Suggestion", "Globe of Invulnerability"],
    7: ["Teleport", "Plane Shift", "Finger of Death"],
    8: ["Dominate Monster", "Earthquake", "Antimagic Field"],
    9: ["Meteor Swarm", "Time Stop", "Wish"]
  },

  warlock: {
    0: ["Eldritch Blast", "Mage Hand", "Prestidigitation", "Minor Illusion", "Chill Touch"],
    1: ["Hex", "Armor of Agathys", "Hellish Rebuke", "Charm Person", "Witch Bolt"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Invisibility", "Darkness"],
    3: ["Counterspell", "Dispel Magic", "Fear", "Fly", "Hunger of Hadar"],
    4: ["Banishment", "Greater Invisibility", "Phantasmal Killer", "Stoneskin"],
    5: ["Hold Monster", "Wall of Force", "Contact Other Plane", "Dream"],
    6: ["Circle of Death", "Eyebite", "True Seeing"],
    7: ["Finger of Death", "Plane Shift"],
    8: ["Demiplane", "Power Word: Stun"],
    9: ["Foresight", "True Polymorph"]
  },

  paladin: {
    0: ["Sacred Flame", "Light", "Thaumaturgy", "Guidance"],
    1: ["Bless", "Cure Wounds", "Divine Favor", "Shield of Faith", "Compelled Duel"],
    2: ["Lesser Restoration", "Magic Weapon", "Aid", "Find Steed"],
    3: ["Aura of Vitality", "Dispel Magic", "Revivify", "Remove Curse"],
    4: ["Death Ward", "Staggering Smite", "Guardian of Faith", "Freedom of Movement"],
    5: ["Banishing Smite", "Destructive Wave", "Circle of Power"]
  },

  ranger: {
    0: ["Hunter's Mark", "Shillelagh", "Guidance", "Light", "Resistance"],
    1: ["Cure Wounds", "Hail of Thorns", "Detect Magic", "Ensnaring Strike"],
    2: ["Pass without Trace", "Lesser Restoration", "Spike Growth", "Animal Messenger"],
    3: ["Conjure Animals", "Lightning Arrow", "Plant Growth", "Wind Wall"],
    4: ["Freedom of Movement", "Grasping Vine", "Stoneskin"],
    5: ["Commune with Nature", "Swift Quiver", "Tree Stride"]
  },
  artificer: {
  0: [
    "Acid Splash",
    "Dancing Lights",
    "Fire Bolt",
    "Guidance",
    "Light",
    "Mage Hand",
    "Mending",
    "Message",
    "Poison Spray",
    "Prestidigitation",
    "Ray of Frost",
    "Resistance",
    "Shocking Grasp",
    "Spare the Dying",
    "Thorn Whip"
  ],
  1: [
    "Absorb Elements",
    "Alarm",
    "Catapult",
    "Comprehend Languages",
    "Cure Wounds",
    "Detect Magic",
    "Disguise Self",
    "Expeditious Retreat",
    "Faerie Fire",
    "False Life",
    "Feather Fall",
    "Grease",
    "Identify",
    "Jump",
    "Longstrider",
    "Sanctuary",
    "Snare",
    "Unseen Servant"
  ],
  2: [
    "Aid",
    "Alter Self",
    "Arcane Lock",
    "Blur",
    "Darkvision",
    "Earthbind",
    "Enhance Ability",
    "Enlarge/Reduce",
    "Heat Metal",
    "Hold Person",
    "Knock",
    "Magic Weapon",
    "Magic Mouth",
    "See Invisibility",
    "Spider Climb"
  ],
  3: [
    "Counterspell",
    "Dispel Magic",
    "Elemental Weapon",
    "Feign Death",
    "Gaseous Form",
    "Glyph of Warding",
    "Magic Circle",
    "Protection from Energy",
    "Sending",
    "Water Breathing",
    "Water Walk",
    "Wind Wall"
  ],
  4: [
    "Arcane Eye",
    "Death Ward",
    "Fabricate",
    "Freedom of Movement",
    "Greater Invisibility",
    "Leomund's Tiny Hut",
    "Otiluke's Resilient Sphere",
    "Stone Shape",
    "Stoneskin"
  ],
  5: [
    "Animate Objects",
    "Creation",
    "Legend Lore",
    "Mislead",
    "Passwall",
    "Telekinesis",
    "Teleportation Circle",
    "Wall of Stone"
  ]
}

};

const SUBCLASS_SPELLS = {

  /* =========================
     ROGUE
  ========================= */
  "Arcane Trickster": {
    0: ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Encode Thoughts", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Mold Earth", "On/Off (UA)", "Poison Spray", "Prestidigitation", "Ray of Frost", "Sapping Sting", "Shape Water", "Shocking Grasp", "Sword Burst", "Thunderclap", "Toll the Dead", "True Strike"], // level 3
    1: ["Charm Person", "Color Spray", "Disguise Self", "Distort Value", "Id Insinuation (UA)", "Illusory Script", "Puppet (UA)", "Silent Image", "Silvery Barbs", "Sleep", "Sudden Awakening (UA)", "Tasha's Hideous Laughter"], // level 4
    2: ["Blur", "Crown of Madness", "Gift of Gab", "Hold Person", "Invisibility", "Jim's Glowing Coin", "Magic Mouth", "Mind Thrust (UA)", "Mirror Image", "Nathair's Mischief", "Nathair's Mischief (UA)", "Nystul's Magic Aura", "Phantasmal Force", "Shadow Blade", "Suggestion", "Tasha's Mind Whip"], // level 8
    3: ["Antagonize", "Antagonize (UA)", "Catnap", "Enemies Abound", "Fast Friends", "Fear", "Haywire (UA)", "Hypnotic Pattern", "Incite Greed", "Invisibility To Cameras (UA)", "Major Image", "Phantom Steed"], // level 10
    4: ["Charm Monster", "Confusion", "Ego Whip (UA)", "Greater Invisibility", "Hallucinatory Terrain", "Phantasmal Killer", "Raulothim's Psychic Lance", "Raulothim's Psychic Lance (UA)", "Synchronicity (UA)"],
  },

  /* =========================
     FIGHTER
  ========================= */
  "Eldritch Knight": {
    0: ["Acid Splash", "Blade Ward", "Booming Blade", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Encode Thoughts", "Fire Bolt", "Friends", "Frostbite", "Green-Flame Blade", "Gust", "Infestation", "Light", "Lightning Lure", "Mage Hand", "Mending", "Message", "Mind Sliver", "Minor Illusion", "Mold Earth", "On/Off (UA)", "Poison Spray", "Prestidigitation", "Ray of Frost", "Sapping Sting", "Shape Water", "Shocking Grasp", "Sword Burst", "Thunderclap", "Toll the Dead", "True Strike"], // level 3
    1: ["Absorb Elements", "Acid Stream (UA)", "Alarm", "Burning Hands", "Chromatic Orb", "Earth Tremor", "Frost Fingers", "Jim's Magic Missile", "Mage Armor", "Magic Missile", "Protection from Evil and Good", "Shield", "Snare", "Tasha's Caustic Brew", "Thunderwave", "Witch Bolt"], // level 7
    2: ["Aganazzar's Scorcher", "Arcane Lock", "Continual Flame", "Darkness", "Digital Phantom (UA)", "Gust of Wind", "Icingdeath's Frost (UA)", "Melf's Acid Arrow", "Mental Barrier (UA)", "Rime's Binding Ice", "Scorching Ray", "Shatter", "Snilloc's Snowball Swarm", "Thought Shield (UA)", "Warding Wind"], // level 10
    3: ["Counterspell", "Dispel Magic", "Fireball", "Glyph of Warding", "Intellect Fortress", "Leomund's Tiny Hut", "Lightning Bolt", "Magic Circle", "Melf's Minute Meteors", "Nondetection", "Protection from Ballistics (UA)", "Protection from Energy", "Psionic Blast (UA)", "Pulse Wave", "Remove Curse", "Sending", "Wall of Sand", "Wall of Water"], // level 15
    4: ["Banishment", "Fire Shield", "Gate Seal", "Gravity Sinkhole", "Ice Storm", "Mordenkainen's Private Sanctum", "Otiluke's Resilient Sphere", "Sickening Radiance", "Stoneskin", "Storm Sphere", "Vitriolic Sphere", "Wall of Fire"]
  },

  /* =========================
     BARD
  ========================= */
  "Lore": {
    0: ["Fire Bolt", "Light", "Mage Hand", "Prestidigitation", "Ray of Frost", "Minor Illusion", "Acid Splash", "Chill Touch"],
    1: ["Magic Missile", "Shield", "Sleep", "Mage Armor", "Detect Magic", "Burning Hands", "Chromatic Orb", "Thunderwave"],
    2: ["Mirror Image", "Misty Step", "Hold Person", "Scorching Ray", "Invisibility", "Levitate", "Web", "Blur"],
    3: ["Counterspell", "Dispel Magic", "Fireball", "Fly", "Haste", "Lightning Bolt", "Major Image", "Sleet Storm"],
    4: ["Greater Invisibility", "Polymorph", "Ice Storm", "Dimension Door", "Stoneskin", "Wall of Fire"],
    5: ["Wall of Force", "Teleportation Circle", "Cone of Cold", "Cloudkill", "Animate Objects", "Bigby's Hand"],
    6: ["Disintegrate", "Globe of Invulnerability", "Mass Suggestion", "Flesh to Stone"],
    7: ["Finger of Death", "Teleport", "Plane Shift", "Reverse Gravity"],
    8: ["Dominate Monster", "Earthquake", "Incendiary Cloud", "Antimagic Field"],
    9: ["Meteor Swarm", "Time Stop", "Wish", "Power Word: Kill"]
  },

  /* =========================
     DRUID
  ========================= */
  "Land": {
    3: ["Spider Climb", "Melf's Acid Arrow"], // example bonus spells for Land Druid (Forest)
    5: ["Slow", "Flame Strike"],
    7: ["Freedom of Movement", "Locate Creature"],
    9: ["Commune", "Tree Stride"]
  },

  /* =========================
     ARTIFICER
  ========================= */
  "Alchemist": {
    3: ["Aid", "Lesser Restoration"], // example
    5: ["Mass Healing Word", "Beacon of Hope"]
  },
  "Artillerist": {
    3: ["Magic Missile", "Shield"],
    5: ["Fireball", "Counterspell"]
  },
  "Battle Smith": {
    3: ["Shield", "Absorb Elements"]
  },
  "Armorer": {
    3: ["Shield", "Thunderwave"]
  },

  /* =========================
     PALADIN
  ========================= */
  "Devotion": {
    3: ["Sanctuary", "Protection from Evil and Good"],
    5: ["Lesser Restoration", "Zone of Truth"]
  },
  "Ancients": {
    3: ["Ensnaring Strike", "Speak with Animals"],
    5: ["Moonbeam", "Mist Step"]
  },
  "Vengeance": {
    3: ["Bane", "Hunter's Mark"],
    5: ["Hold Person", "Misty Step"]
  }

};

const SPELLS_SUBCLASS_ADDON = {
  wizard: {
    Evocation: {
      1: ["Chaos Bolt"],
      3: ["Flame Arrows"],
      5: ["Immolation"]
    },
    Necromancy: {
      1: ["Inflict Wounds"],
      2: ["Wither and Bloom"]
    }
  },
  warlock: {
    Hexblade: {
      0: ["Booming Blade"],
      1: ["Chaos Bolt"],
      3: ["Flame Arrows"],
      5: ["Immolation"]
    },
    Necromancy: {
      1: ["Inflict Wounds"],
      2: ["Wither and Bloom"]
    }
  },

  cleric: {
    Light: {
      1: ["Burning Hands"],
      2: ["Scorching Ray"]
    }
  }
};

