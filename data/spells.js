const SPELLS = {
  wizard: {
    0: ["Acid Splash", "Blade Ward", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Encode Thoughts", "Fire Bolt", "Friends", "Frostbite", "Gust", "Infestation", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Ray of Frost", "Sapping Sting", "Shape Water", "Shocking Grasp", "Thunderclap", "Toll the Dead", "True Strike"],
    1: ["Absorb Elements", "Alarm", "Burning Hands", "Catapult", "Cause Fear", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Distort Value", "Earth Tremor", "Expeditious Retreat", "False Life", "Feather Fall", "Find Familiar", "Fog Cloud", "Frost Fingers", "Gift of Alacrity", "Grease", "Ice Knife", "Identify", "Illusory Script", "Jim's Magic Missile", "Jump", "Longstrider"],
    2: ["Aganazzar's Scorcher", "Air Bubble", "Alter Self", "Arcane Lock", "Blindness/Deafness", "Blur", "Borrowed Knowledge", "Cloud of Daggers", "Continual Flame", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Dragon's Breath", "Dust Devil", "Earthbind", "Enlarge/Reduce", "Flaming Sphere", "Flock of Familiars", "Fortune's Favor", "Gentle Repose", "Gift of Gab", "Gust of Wind", "Hold Person", "Immovable Object", "Invisibility", "Jim's Glowing Coin"],
    3: ["Animate Dead", "Antagonize", "Ashardalon's Stride", "Bestow Curse", "Blink", "Catnap", "Clairvoyance", "Counterspell", "Dispel Magic", "Enemies Abound", "Erupting Earth", "Fast Friends", "Fear", "Feign Death", "Fireball", "Flame Arrows", "Fly", "Galder's Tower", "Gaseous Form", "Glyph of Warding", "Haste", "Hypnotic Pattern", "Incite Greed", "Leomund's Tiny Hut", "Life Transference", "Lightning Bolt", "Magic Circle", "Major Image", "Melf's Minute Meteors", "Nondetection", "Phantom Steed", "Protection from Energy", "Pulse Wave", "Remove Curse", "Sending", "Sleet Storm", "Slow", "Stinking Cloud", "Summon Lesser Demons", "Thunder Step", "Tidal Wave", "Tiny Servant", "Tongues", "Vampiric Touch", "Wall of Sand", "Wall of Water", "Water Breathing"],
    4: ["Arcane Eye", "Banishment", "Blight", "Charm Monster", "Confusion", "Conjure Minor Elementals", "Control Water", "Dimension Door", "Elemental Bane", "Evard's Black Tentacles", "Fabricate", "Fire Shield", "Galder's Speedy Courier", "Gate Seal", "Gravity Sinkhole", "Greater Invisibility", "Hallucinatory Terrain", "Ice Storm", "Leomund's Secret Chest", "Locate Creature", "Mordenkainen's Faithful Hound", "Mordenkainen's Private Sanctum", "Otiluke's Resilient Sphere", "Phantasmal Killer", "Polymorph", "Raulothim's Psychic Lance", "Sickening Radiance", "Spirit Of Death", "Stone Shape", "Stoneskin", "Storm Sphere", "Summon Greater Demon", "Vitriolic Sphere", "Wall of Fire", "Watery Sphere"],
    5: ["Animate Objects", "Bigby's Hand", "Cloudkill", "Cone of Cold", "Conjure Elemental", "Contact Other Plane", "Control Winds", "Create Spelljamming Helm", "Creation", "Danse Macabre", "Dawn", "Dominate Person", "Dream", "Enervation", "Far Step", "Geas", "Hold Monster", "Immolation", "Infernal Calling", "Legend Lore", "Mislead", "Modify Memory", "Negative Energy Flood", "Passwall", "Planar Binding", "Rary's Telepathic Bond", "Scrying", "Seeming", "Skill Empowerment", "Steel Wind Strike", "Summon Draconic Spirit", "Synaptic Static", "Telekinesis", "Teleportation Circle", "Temporal Shunt"],
    6: ["Arcane Gate", "Chain Lightning", "Circle of Death", "Contingency", "Create Homunculus", "Create Undead", "Disintegrate", "Drawmij's Instant Summons", "Eyebite", "Fizban's Platinum Shield", "Flesh to Stone", "Globe of Invulnerability", "Gravity Fissure", "Guards and Wards", "Investiture of Flame", "Investiture of Ice", "Investiture of Stone", "Investiture of Wind", "Magic Jar", "Mass Suggestion", "Mental Prison", "Move Earth", "Otiluke's Freezing Sphere", "Otto's Irresistible Dance", "Programmed Illusion", "Scatter", "Soul Cage", "Sunbeam", "Tenser's Transformation", "True Seeing", "Wall of Ice"],
    7: ["Create Magen", "Crown of Stars", "Delayed Blast Fireball", "Draconic Transformation", "Etherealness", "Finger of Death", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", "Plane Shift", "Power Word: Pain", "Prismatic Spray", "Project Image", "Reverse Gravity", "Sequester", "Simulacrum", "Symbol", "Teleport", "Tether Essence", "Whirlwind"],
    8: ["Abi-Dalzim's Horrid Wilting", "Antimagic Field", "Antipathy/Sympathy", "Clone", "Control Weather", "Dark Star", "Demiplane", "Dominate Monster", "Feeblemind", "Illusory Dragon", "Incendiary Cloud", "Maddening Darkness", "Maze", "Mighty Fortress", "Mind Blank", "Power Word: Stun", "Reality Break", "Sunburst", "Telepathy"],
    9: ["Astral Projection", "Foresight", "Gate", "Imprisonment", "Invulnerability", "Mass Polymorph", "Meteor Swarm", "Power Word: Kill", "Prismatic Wall", "Psychic Scream", "Ravenous Void", "Shapechange", "Time Ravage", "Time Stop", "True Polymorph", "Weird", "Wish"]
  },

  cleric: {
    0: ["Guidance", "Light", "Mending", "Resistance", "Sacred Flame", "Spare the Dying", "Thaumaturgy", "Toll the Dead", "Word of Radiance"],
    1: ["Bane", "Bless", "Ceremony", "Command", "Create or Destroy Water", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Guiding Bolt", "Healing Word", "Inflict Wounds", "Protection from Evil and Good", "Purify Food and Drink", "Sanctuary", "Shield of Faith"],
    2: ["Aid", "Augury", "Blindness/Deafness", "Borrowed Knowledge", "Calm Emotions", "Continual Flame", "Enhance Ability", "Find Traps", "Gentle Repose", "Hold Person", "Lesser Restoration", "Locate Object", "Prayer of Healing", "Protection from Poison", "Silence", "Spiritual Weapon", "Warding Bond", "Zone of Truth"],
    3: ["Animate Dead", "Beacon of Hope", "Bestow Curse", "Clairvoyance", "Create Food and Water", "Daylight", "Dispel Magic", "Fast Friends", "Feign Death", "Glyph of Warding", "Incite Greed", "Life Transference", "Magic Circle", "Mass Healing Word", "Meld into Stone", "Motivational Speech", "Protection from Energy", "Remove Curse", "Revivify", "Sending", "Speak with Dead", "Spirit Guardians", "Tongues", "Water Walk"],
    4: ["Banishment", "Control Water", "Death Ward", "Divination", "Freedom of Movement", "Guardian of Faith", "Locate Creature", "Stone Shape"],
    5: ["Commune", "Contagion", "Dawn", "Dispel Evil and Good", "Flame Strike", "Geas", "Greater Restoration", "Hallow", "Holy Weapon", "Insect Plague", "Legend Lore", "Mass Cure Wounds", "Planar Binding", "Raise Dead", "Scrying"],
    6: ["Blade Barrier", "Create Undead", "Find the Path", "Forbiddance", "Harm", "Heal", "Heroes' Feast", "Planar Ally", "True Seeing", "Word of Recall"],
    7: ["Conjure Celestial", "Divine Word", "Etherealness", "Fire Storm", "Plane Shift", "Regenerate", "Resurrection", "Symbol", "Temple of the Gods"],
    8: ["Antimagic Field", "Control Weather", "Earthquake", "Holy Aura"],
    9: ["Astral Projection", "Gate", "Mass Heal", "True Resurrection"]
  },

  druid: {
    0: ["Control Flames", "Create Bonfire", "Druidcraft", "Frostbite", "Guidance", "Gust", "Infestation", "Magic Stone", "Mending", "Mold Earth", "Poison Spray", "Primal Savagery", "Produce Flame", "Resistance", "Shape Water", "Shillelagh", "Thorn Whip", "Thunderclap"],
    1: ["Absorb Elements", "Animal Friendship", "Beast Bond", "Charm Person", "Create or Destroy Water", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Earth Tremor", "Entangle", "Faerie Fire", "Fog Cloud", "Goodberry", "Healing Word", "Ice Knife", "Jump", "Longstrider", "Purify Food and Drink", "Snare", "Speak with Animals", "Thunderwave"],
    2: ["Air Bubble", "Animal Messenger", "Barkskin", "Beast Sense", "Darkvision", "Dust Devil", "Earthbind", "Enhance Ability", "Find Traps", "Flame Blade", "Flaming Sphere", "Gust of Wind", "Healing Spirit", "Heat Metal", "Hold Person", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Moonbeam", "Pass Without Trace", "Protection from Poison", "Skywrite", "Spike Growth", "Warding Wind", "Wither and Bloom"],
    3: ["Call Lightning", "Conjure Animals", "Daylight", "Dispel Magic", "Erupting Earth", "Feign Death", "Flame Arrows", "Meld into Stone", "Plant Growth", "Protection from Energy", "Sleet Storm", "Speak with Plants", "Tidal Wave", "Wall of Water", "Water Breathing", "Water Walk", "Wind Wall"],
    4: ["Blight", "Charm Monster", "Confusion", "Conjure Minor Elementals", "Conjure Woodland Beings", "Control Water", "Dominate Beast", "Elemental Bane", "Freedom of Movement", "Giant Insect", "Grasping Vine", "Guardian of Nature", "Hallucinatory Terrain", "Ice Storm", "Locate Creature", "Polymorph", "Stone Shape", "Stoneskin", "Wall of Fire", "Watery Sphere"],
    5: ["Antilife Shell", "Awaken", "Commune with Nature", "Conjure Elemental", "Contagion", "Control Winds", "Geas", "Greater Restoration", "Insect Plague", "Maelstrom", "Mass Cure Wounds", "Planar Binding", "Reincarnate", "Scrying", "Summon Draconic Spirit", "Transmute Rock", "Tree Stride", "Wall of Stone", "Wrath Of Nature"],
    6: ["Bones of the Earth", "Conjure Fey", "Druid Grove", "Find the Path", "Heal", "Heroes' Feast", "Investiture of Flame", "Investiture of Ice", "Investiture of Stone", "Investiture of Wind", "Move Earth", "Primordial Ward", "Sunbeam", "Transport via Plants", "Wall of Thorns", "Wind Walk"],
    7: ["Draconic Transformation", "Fire Storm", "Mirage Arcane", "Plane Shift", "Regenerate", "Reverse Gravity", "Whirlwind"],
    8: ["Animal Shapes", "Antipathy/Sympathy", "Control Weather", "Earthquake", "Feeblemind", "Sunburst", "Tsunami"],
    9: ["Foresight", "Shapechange", "Storm of Vengeance", "True Resurrection"]
  },

  bard: {
    0: ["Blade Ward", "Dancing Lights", "Friends", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "Thunderclap", "True Strike", "Vicious Mockery"],
    1: ["Animal Friendship", "Bane", "Charm Person", "Comprehend Languages", "Cure Wounds", "Detect Magic", "Disguise Self", "Dissonant Whispers", "Distort Value", "Earth Tremor", "Faerie Fire", "Feather Fall", "Healing Word", "Heroism", "Identify", "Illusory Script", "Longstrider", "Silent Image", "Silvery Barbs", "Sleep", "Speak with Animals", "Tasha's Hideous Laughter", "Thunderwave", "Unseen Servant"],
    2: ["Animal Messenger", "Blindness/Deafness", "Borrowed Knowledge", "Calm Emotions", "Cloud of Daggers", "Crown of Madness", "Detect Thoughts", "Enhance Ability", "Enthrall", "Gift of Gab", "Heat Metal", "Hold Person", "Invisibility", "Kinetic Jaunt", "Knock", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Magic Mouth", "Nathair's Mischief", "Phantasmal Force", "Pyrotechnics", "See Invisibility", "Shatter", "Silence", "Skywrite", "Spray Of Cards", "Suggestion", "Warding Wind", "Zone of Truth"],
    3: ["Antagonize", "Bestow Curse", "Catnap", "Clairvoyance", "Dispel Magic", "Enemies Abound", "Fast Friends", "Fear", "Feign Death", "Glyph of Warding", "Hypnotic Pattern", "Leomund's Tiny Hut", "Major Image", "Motivational Speech", "Nondetection", "Plant Growth", "Sending", "Speak with Dead", "Speak with Plants", "Stinking Cloud", "Tongues"],
    4: ["Charm Monster", "Compulsion", "Confusion", "Dimension Door", "Freedom of Movement", "Greater Invisibility", "Hallucinatory Terrain", "Locate Creature", "Polymorph", "Raulothim's Psychic Lance"],
    5: ["Animate Objects", "Awaken", "Dominate Person", "Dream", "Geas", "Greater Restoration", "Hold Monster", "Legend Lore", "Mass Cure Wounds", "Mislead", "Modify Memory", "Planar Binding", "Raise Dead", "Scrying", "Seeming", "Skill Empowerment", "Synaptic Static", "Teleportation Circle"],
    6: ["Eyebite", "Find the Path", "Guards and Wards", "Mass Suggestion", "Otto's Irresistible Dance", "Programmed Illusion", "True Seeing"],
    7: ["Etherealness", "Forcecage", "Mirage Arcane", "Mordenkainen's Magnificent Mansion", "Mordenkainen's Sword", "Prismatic Spray", "Project Image", "Regenerate", "Resurrection", "Symbol", "Teleport"],
    8: ["Dominate Monster", "Feeblemind", "Glibness", "Mind Blank", "Power Word: Stun"],
    9: ["Foresight", "Mass Polymorph", "Power Word: Heal", "Power Word: Kill", "Psychic Scream", "True Polymorph"]
  },

  sorcerer: {
    0: ["Acid Splash", "Blade Ward", "Chill Touch", "Control Flames", "Create Bonfire", "Dancing Lights", "Fire Bolt", "Friends", "Frostbite", "Gust", "Infestation", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Mold Earth", "Poison Spray", "Prestidigitation", "Ray of Frost", "Shape Water", "Shocking Grasp", "Thunderclap", "True Strike"],
    1: ["Absorb Elements", "Burning Hands", "Catapult", "Chaos Bolt", "Charm Person", "Chromatic Orb", "Color Spray", "Comprehend Languages", "Detect Magic", "Disguise Self", "Distort Value", "Earth Tremor", "Expeditious Retreat", "False Life", "Feather Fall", "Fog Cloud", "Ice Knife", "Jump", "Mage Armor", "Magic Missile", "Ray of Sickness", "Shield", "Silent Image", "Silvery Barbs", "Sleep", "Thunderwave", "Witch Bolt"],
    2: ["Aganazzar's Scorcher", "Air Bubble", "Alter Self", "Blindness/Deafness", "Blur", "Cloud of Daggers", "Crown of Madness", "Darkness", "Darkvision", "Detect Thoughts", "Dragon's Breath", "Dust Devil", "Earthbind", "Enhance Ability", "Enlarge/Reduce", "Gust of Wind", "Hold Person", "Invisibility", "Kinetic Jaunt", "Knock", "Levitate", "Maximillian's Earthen Grasp", "Mind Spike", "Mirror Image", "Misty Step", "Nathair's Mischief", "Phantasmal Force", "Pyrotechnics", "Rime's Binding Ice", "Scorching Ray", "See Invisibility", "Shadow Blade", "Shatter", "Snilloc's Snowball Swarm", "Spider Climb", "Spray Of Cards", "Suggestion", "Vortex Warp", "Warding Wind", "Warp Sense", "Web", "Wither and Bloom"],
    3: ["Antagonize", "Ashardalon's Stride", "Blink", "Catnap", "Clairvoyance", "Counterspell", "Daylight", "Dispel Magic", "Enemies Abound", "Erupting Earth", "Fear", "Fireball", "Flame Arrows", "Fly", "Gaseous Form", "Haste", "Hypnotic Pattern", "Incite Greed", "Lightning Bolt", "Major Image", "Melf's Minute Meteors", "Protection from Energy", "Sleet Storm", "Slow", "Stinking Cloud", "Thunder Step", "Tidal Wave", "Tongues", "Wall of Water", "Water Breathing", "Water Walk"],
    4: ["Banishment", "Blight", "Charm Monster", "Confusion", "Dimension Door", "Dominate Beast", "Gate Seal", "Greater Invisibility", "Ice Storm", "Polymorph", "Raulothim's Psychic Lance", "Sickening Radiance", "Spirit Of Death", "Stoneskin", "Storm Sphere", "Vitriolic Sphere", "Wall of Fire", "Watery Sphere"],
    5: ["Animate Objects", "Cloudkill", "Cone of Cold", "Control Winds", "Creation", "Dominate Person", "Enervation", "Far Step", "Hold Monster", "Immolation", "Insect Plague", "Seeming", "Skill Empowerment", "Summon Draconic Spirit", "Synaptic Static", "Telekinesis", "Teleportation Circle", "Wall of Light", "Wall of Stone"],
    6: ["Arcane Gate", "Chain Lightning", "Circle of Death", "Disintegrate", "Eyebite", "Fizban's Platinum Shield", "Globe of Invulnerability", "Investiture of Flame", "Investiture of Ice", "Investiture of Stone", "Investiture of Wind", "Mass Suggestion", "Mental Prison", "Move Earth", "Scatter", "Sunbeam", "True Seeing"],
    7: ["Crown of Stars", "Delayed Blast Fireball", "Draconic Transformation", "Etherealness", "Finger of Death", "Fire Storm", "Plane Shift", "Power Word: Pain", "Prismatic Spray", "Reverse Gravity", "Teleport"],
    8: ["Abi-Dalzim's Horrid Wilting", "Dominate Monster", "Earthquake", "Incendiary Cloud", "Power Word: Stun", "Sunburst"],
    9: ["Blade of Disaster", "Gate", "Mass Polymorph", "Meteor Swarm", "Power Word: Kill", "Psychic Scream", "Time Stop", "Wish"]
  },

  warlock: {
    0: ["Blade Ward", "Chill Touch", "Create Bonfire", "Eldritch Blast", "Friends", "Frostbite", "Infestation", "Mage Hand", "Magic Stone", "Minor Illusion", "Poison Spray", "Prestidigitation", "Thunderclap", "Toll the Dead", "True Strike"],
    1: ["Armor of Agathys", "Arms of Hadar", "Cause Fear", "Charm Person", "Comprehend Languages", "Distort Value", "Expeditious Retreat", "Hellish Rebuke", "Hex", "Illusory Script", "Protection from Evil and Good", "Unseen Servant", "Witch Bolt"],
    2: ["Borrowed Knowledge", "Cloud of Daggers", "Crown of Madness", "Darkness", "Earthbind", "Enthrall", "Flock of Familiars", "Hold Person", "Invisibility", "Mind Spike", "Mirror Image", "Misty Step", "Ray of Enfeeblement", "Shadow Blade", "Shatter", "Spider Climb", "Spray Of Cards", "Suggestion", "Warp Sense"],
    3: ["Antagonize", "Counterspell", "Dispel Magic", "Enemies Abound", "Fear", "Fly", "Gaseous Form", "Hunger Of Hadar", "Hypnotic Pattern", "Incite Greed", "Magic Circle", "Major Image", "Remove Curse", "Summon Lesser Demons", "Thunder Step", "Tongues", "Vampiric Touch"],
    4: ["Banishment", "Blight", "Charm Monster", "Dimension Door", "Elemental Bane", "Galder's Speedy Courier", "Gate Seal", "Hallucinatory Terrain", "Raulothim's Psychic Lance", "Shadow Of Moil", "Sickening Radiance", "Spirit Of Death"],
    5: ["Contact Other Plane", "Danse Macabre", "Dream", "Enervation", "Far Step", "Hold Monster", "Infernal Calling", "Negative Energy Flood", "Scrying", "Synaptic Static", "Wall of Light"],
    6: ["Arcane Gate", "Circle of Death", "Conjure Fey", "Create Undead", "Eyebite", "Flesh to Stone", "Investiture of Flame", "Investiture of Ice", "Investiture of Stone", "Investiture of Wind", "Mass Suggestion", "Mental Prison", "Scatter", "Soul Cage", "True Seeing"],
    7: ["Crown of Stars", "Etherealness", "Finger of Death", "Forcecage", "Plane Shift", "Power Word: Pain"],
    8: ["Demiplane", "Dominate Monster", "Feeblemind", "Glibness", "Maddening Darkness", "Power Word: Stun"],
    9: ["Astral Projection", "Foresight", "Imprisonment", "Power Word: Kill", "Psychic Scream", "True Polymorph"]
  },

  paladin: {
    1: ["Bless", "Ceremony", "Command", "Compelled Duel", "Cure Wounds", "Detect Evil and Good", "Detect Magic", "Detect Poison and Disease", "Divine Favor", "Heroism", "Protection from Evil and Good", "Purify Food and Drink", "Searing Smite", "Shield of Faith", "Thunderous Smite", "Wrathful Smite"],
    2: ["Aid", "Branding Smite", "Find Steed", "Lesser Restoration", "Locate Object", "Magic Weapon", "Protection from Poison", "Zone of Truth"],
    3: ["Aura of Vitality", "Blinding Smite", "Create Food and Water", "Crusader's Mantle", "Daylight", "Dispel Magic", "Elemental Weapon", "Magic Circle", "Remove Curse", "Revivify"],
    4: ["Aura of Life", "Aura of Purity", "Banishment", "Death Ward", "Find Greater Steed", "Locate Creature", "Staggering Smite"],
    5: ["Banishing Smite", "Circle of Power", "Destructive Wave", "Dispel Evil and Good", "Geas", "Holy Weapon", "Raise Dead"]
  },

  ranger: {
    1: ["Absorb Elements", "Alarm", "Animal Friendship", "Beast Bond", "Cure Wounds", "Detect Magic", "Detect Poison and Disease", "Ensnaring Strike", "Fog Cloud", "Goodberry", "Hail of Thorns", "Hunter's Mark", "Jump", "Longstrider", "Snare", "Speak with Animals", "Zephyr Strike"],
    2: ["Air Bubble", "Animal Messenger", "Barkskin", "Beast Sense", "Cordon of Arrows", "Darkvision", "Find Traps", "Healing Spirit", "Lesser Restoration", "Locate Animals or Plants", "Locate Object", "Pass Without Trace", "Protection from Poison", "Silence", "Spike Growth"],
    3: ["Ashardalon's Stride", "Conjure Animals", "Conjure Barrage", "Daylight", "Flame Arrows", "Lightning Arrow", "Nondetection", "Plant Growth", "Protection from Energy", "Speak with Plants", "Water Breathing", "Water Walk", "Wind Wall"],
    4: ["Conjure Woodland Beings", "Freedom of Movement", "Grasping Vine", "Guardian of Nature", "Locate Creature", "Stoneskin"],
    5: ["Commune with Nature", "Conjure Volley", "Steel Wind Strike", "Swift Quiver", "Tree Stride", "Wrath Of Nature"]
  },
   artificer: {
    0: ["Acid Splash", "Booming Blade", "Create Bonfire", "Dancing Lights", "Fire Bolt", "Frostbite", "Green-Flame Blade", "Guidance", "Light", "Lightning Lure", "Mage Hand", "Magic Stone", "Mending", "Message", "Poison Spray", "Prestidigitation", "Ray of Frost", "Resistance", "Shocking Grasp", "Spare the Dying", "Sword Burst", "Thorn Whip", "Thunderclap"],
    1: ["Absorb Elements", "Alarm", "Arcane Weapon (UA)", "Catapult", "Cure Wounds", "Detect Magic", "Disguise Self", "Expeditious Retreat", "Faerie Fire", "False Life", "Feather Fall", "Grease", "Identify", "Jump", "Longstrider", "Purify Food and Drink", "Sanctuary", "Snare", "Tasha's Caustic Brew"],
    2: ["Aid", "Air Bubble", "Alter Self", "Arcane Lock", "Blur", "Continual Flame", "Darkvision", "Enhance Ability", "Enlarge/Reduce", "Heat Metal", "Invisibility", "Kinetic Jaunt", "Lesser Restoration", "Levitate", "Magic Mouth", "Magic Weapon", "Protection from Poison", "Pyrotechnics", "Rope Trick", "See Invisibility", "Skywrite", "Spider Climb", "Vortex Warp", "Web"],
    3: ["Ashardalon's Stride", "Blink", "Catnap", "Create Food and Water", "Dispel Magic", "Elemental Weapon", "Flame Arrows", "Flame Stride (UA)", "Fly", "Glyph of Warding", "Haste", "House of Cards (UA)", "Intellect Fortress", "Protection from Energy", "Revivify", "Tiny Servant", "Water Breathing", "Water Walk"],
    4: ["Arcane Eye", "Elemental Bane", "Fabricate", "Freedom of Movement", "Leomund's Secret Chest", "Mordenkainen's Faithful Hound", "Mordenkainen's Private Sanctum", "Otiluke's Resilient Sphere", "Stone Shape", "Stoneskin", "Summon Construct"],
    5: ["Animate Objects", "Bigby's Hand", "Create Spelljamming Helm", "Creation", "Greater Restoration", "Skill Empowerment", "Transmute Rock", "Wall of Stone"]
  }
};

const SPELLS_TASHA = {
  wizard: {
    0: ["Booming Blade", "Green-Flame Blade", "Lightning Lure", "Mind Sliver", "On/Off (UA)", "Sword Burst"],
    1: ["Acid Stream (UA)", "Guiding Hand (UA)", "Healing Elixir (UA)", "Id Insinuation (UA)", "Infallible Relay (UA)", "Mage Armor", "Magic Missile", "Magnify Gravity", "Protection from Evil and Good", "Puppet (UA)", "Ray of Sickness", "Remote Access (UA)", "Sense Emotion (UA)", "Shield", "Silent Image", "Silvery Barbs", "Sleep", "Snare", "Sudden Awakening (UA)", "Tasha's Caustic Brew", "Tasha's Hideous Laughter", "Tenser's Floating Disk", "Thunderwave", "Unseen Servant", "Witch Bolt"],
    2: ["Arcane Hacking (UA)", "Augury", "Digital Phantom (UA)", "Enhance Ability", "Find Vehicle (UA)", "Icingdeath's Frost (UA)", "Kinetic Jaunt", "Knock", "Levitate", "Locate Object", "Magic Mouth", "Magic Weapon", "Maximillian's Earthen Grasp", "Melf's Acid Arrow", "Mental Barrier (UA)", "Mind Spike", "Mind Thrust (UA)", "Mirror Image", "Misty Step", "Nathair's Mischief", "Nathair's Mischief (UA)", "Nystul's Magic Aura", "Phantasmal Force", "Pyrotechnics", "Ray of Enfeeblement", "Rime's Binding Ice", "Rope Trick", "Scorching Ray", "See Invisibility", "Shadow Blade", "Shatter", "Skywrite", "Snilloc's Snowball Swarm", "Spider Climb", "Spray Of Cards", "Spray of Cards (UA)", "Suggestion", "Tasha's Mind Whip", "Thought Shield (UA)", "Vortex Warp", "Warding Wind", "Warp Sense", "Web", "Wither and Bloom", "Wristpocket"],
    3: ["Antagonize (UA)", "Conjure Lesser Demon (UA)", "Flame Stride (UA)", "Haywire (UA)", "House of Cards (UA)", "Intellect Fortress", "Invisibility To Cameras (UA)", "Protection from Ballistics (UA)", "Psionic Blast (UA)", "Speak with Dead", "Spirit Shroud", "Summon Fey", "Summon Shadowspawn", "Summon Undead", "Summon Warrior Spirit (UA)"],
    4: ["Conjure Barlgura (UA)", "Conjure Knowbot (UA)", "Conjure Shadow Demon (UA)", "Divination", "Ego Whip (UA)", "Raulothim's Psychic Lance (UA)", "Spirit of Death (UA)", "Summon Aberration", "Summon Construct", "Summon Elemental", "Synchronicity (UA)", "System Backdoor (UA)"],
    5: ["Commune with City (UA)", "Conjure Vrock (UA)", "Shutdown (UA)", "Summon Draconic Spirit (UA)", "Transmute Rock", "Wall of Force", "Wall of Light", "Wall of Stone"],
    6: ["Fizban's Platinum Shield (UA)", "Otherworldly Form (UA)", "Psychic Crush (UA)", "Summon Fiend", "Tasha's Otherworldly Guise"],
    7: ["Conjure Hezrou (UA)", "Draconic Transformation (UA)", "Dream of the Blue Veil"],
    8: [],
    9: ["Blade of Disaster"]
  },

  cleric: {
    0: ["Hand of Radiance (UA)", "Virtue (UA)"],
    1: ["Guiding Hand (UA)"],
    2: [],
    3: ["Aura of Vitality", "Spirit Shroud"],
    4: ["Banishment"],
    5: ["Summon Celestial"],
    6: ["Otherworldly Form (UA)", "Sunbeam"],
    7: [],
    8: ["Sunburst"],
    9: ["Power Word: Heal",]
  },

  druid: {
    0: ["Guiding Hand (UA)", "Protection from Evil and Good", "Wild Cunning (UA)"],
    1: [],
    2: ["Augury", "Continual Flame", "Enlarge/Reduce", "Summon Beast"],
    3: ["Call Lightning", "Elemental Weapon", "Revivify", "Summon Fey"],
    4: ["Divination", "Fire Shield", "Summon Elemental"],
    5: ["Cone of Cold", "Summon Draconic Spirit (UA)"],
    6: ["Flesh to Stone"],
    7: ["Draconic Transformation (UA)", "Symbol"],
    8: ["Incendiary Cloud"],
    9: []
  },

  bard: {
    0: [],
    1: ["Color Spray", "Command", "Guiding Hand (UA)", "Puppet (UA)", "Sense Emotion (UA)", "Sudden Awakening (UA)", "Unearthly Chorus (UA)"],
    2: ["Animal Messenger", "Enlarge/Reduce", "Mirror Image", "Nathair's Mischief (UA)", "Spray of Cards (UA)"],
    3: ["Antagonize (UA)", "House of Cards (UA)", "Intellect Fortress", "Mass Healing Word", "Slow"],
    4: ["Ego Whip (UA)", "Phantasmal Killer", "Raulothim's Psychic Lance (UA)"],
    5: ["Rary's Telepathic Bond"],
    6: ["Heroes' Feast"],
    7: ["Etherealness"],
    8: ["Dominate Monster"],
    9: ["Prismatic Wall"]
  },

  sorcerer: {
    0: ["Booming Blade", "Green-Flame Blade", "Lightning Lure", "Mind Sliver", "On/Off (UA)", "Sword Burst"],
    1: ["Acid Stream (UA)", "Grease", "Id Insinuation (UA)", "Infallible Relay (UA)", "Remote Access (UA)", "Sudden Awakening (UA)", "Tasha's Caustic Brew"],
    2: ["Arcane Hacking (UA)", "Digital Phantom (UA)", "Find Vehicle (UA)", "Flame Blade", "Flaming Sphere", "Icingdeath's Frost (UA)", "Magic Weapon", "Mental Barrier (UA)", "Mind Thrust (UA)", "Nathair's Mischief (UA)", "Spray of Cards (UA)", "Tasha's Mind Whip", "Thought Shield (UA)"],
    3: ["Antagonize (UA)", "Conjure Lesser Demon (UA)", "Flame Stride (UA)", "Haywire (UA)", "House of Cards (UA)", "Intellect Fortress", "Invisibility To Cameras (UA)", "Protection from Ballistics (UA)", "Psionic Blast (UA)", "Summon Warrior Spirit (UA)", "Vampiric Touch"],
    4: ["Conjure Barlgura (UA)", "Conjure Knowbot (UA)", "Conjure Shadow Demon (UA)", "Ego Whip (UA)", "Fire Shield", "Raulothim's Psychic Lance (UA)", "Spirit of Death (UA)", "Synchronicity (UA)", "System Backdoor (UA)"],
    5: ["Bigby's Hand", "Commune with City (UA)", "Conjure Vrock (UA)", "Shutdown (UA)", "Summon Draconic Spirit (UA)"],
    6: ["Fizban's Platinum Shield (UA)", "Flesh to Stone", "Otherworldly Form (UA)", "Otiluke's Freezing Sphere", "Psychic Crush (UA)", "Tasha's Otherworldly Guise"],
    7: ["Crown of Stars", "Draconic Transformation (UA)", "Dream of the Blue Veil"],
    8: ["Demiplane"],
    9: []
  },

  warlock: {
    0: ["Booming Blade", "Green-Flame Blade", "Lightning Lure", "Mind Sliver", "On/Off (UA)", "Sword Burst"],
    1: ["Healing Elixir (UA)", "Id Insinuation (UA)", "Infallible Relay (UA)", "Puppet (UA)", "Remote Access (UA)", "Sense Emotion (UA)"],
    2: ["Borrowed Knowledge", "Digital Phantom (UA)", "Find Vehicle (UA)", "Mental Barrier (UA)", "Mind Thrust (UA)", "Spray of Cards (UA)", "Thought Shield (UA)"],
    3: ["Antagonize (UA)", "Haywire (UA)", "Intellect Fortress", "Invisibility To Cameras (UA)", "Protection from Ballistics (UA)", "Psionic Blast (UA)", "Spirit Shroud", "Summon Fey", "Summon Shadowspawn", "Summon Undead", "Summon Warrior Spirit (UA)"],
    4: ["Conjure Knowbot (UA)", "Ego Whip (UA)", "Raulothim's Psychic Lance (UA)", "Spirit of Death (UA)", "Summon Aberration", "Summon Greater Demon", "Synchronicity (UA)", "System Backdoor (UA)"],
    5: ["Commune with City (UA)", "Mislead", "Planar Binding", "Shutdown (UA)", "Teleportation Circle"],
    6: ["Otherworldly Form (UA)", "Psychic Crush (UA)", "Summon Fiend", "Tasha's Otherworldly Guise"],
    7: ["Dream of the Blue Veil"],
    8: [],
    9: ["Blade of Disaster", "Gate", "Weird"]
  },

  paladin: {
    0: [],
    1: [],
    2: ["Find Vehicle (UA)", "Gentle Repose", "Prayer of Healing", "Warding Bond"],
    3: ["Spirit Shroud"],
    4: ["Summon Celestial"]
  },

  ranger: {
    0: [],
    1: ["Entangle", "Searing Smite", "Sudden Awakening (UA)", "Wild Cunning (UA)"],
    2: ["Air Bubble", "Enhance Ability", "Gust of Wind", "Magic Weapon", "Summon Beast"],
    3: ["Elemental Weapon", "Flame Stride (UA)", "Meld into Stone", "Revivify", "Summon Fey"],
    4: ["Dominate Beast", "Summon Elemental"],
    5: ["Greater Restoration"]
  },
  artificer: {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
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
      0: [],
      1: ["Chaos Bolt"],
      2: [],
      3: ["Flame Arrows"],
      4: [],
      5: ["Immolation"]
    },
    Necromancy: {
      0: [],
      1: ["Inflict Wounds"],
      2: ["Wither and Bloom"]
    }
  },
  warlock: {
    Hexblade: {
      0: ["Booming Blade"],
      1: ["Chaos Bolt"],
      2: [],
      3: ["Flame Arrows"],
      4: [],
      5: ["Immolation"]
    },
    Necromancy: {
      0: [],
      1: ["Inflict Wounds"],
      2: ["Wither and Bloom"]
    }
  },

  cleric: {
    Light: {
      0: [],
      1: ["Burning Hands"],
      2: ["Scorching Ray"]
    }
  }
};

