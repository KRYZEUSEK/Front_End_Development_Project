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
    9: ["Meteor Swarm", "Time Stop", "Wish", "Power Word Kill"]
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
    8: ["Mind Blank", "Power Word Stun"],
    9: ["Foresight", "Power Word Heal"]
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
    8: ["Demiplane", "Power Word Stun"],
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
