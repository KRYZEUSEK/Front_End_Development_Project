const SPELLS = {
  "Acid Splash":       { level: 0, type: "damage", damageType: "acid",   dice: "1d6" },
  "Chill Touch":       { level: 0, type: "damage", damageType: "necrotic", dice: "1d8" },
  "Fire Bolt":         { level: 0, type: "damage", damageType: "fire",   dice: "1d10" },
  "Light":              { level: 0, type: "effect", damageType: null,    dice: null },
  "Mage Hand":          { level: 0, type: "effect", damageType: null,    dice: null },
  "Prestidigitation":   { level: 0, type: "effect", damageType: null,    dice: null },
  "Ray of Frost":       { level: 0, type: "damage", damageType: "cold",   dice: "1d8" },

  "Magic Missile":      { level: 1, type: "damage", damageType: "force",   dice: "1d4+1" },
  "Burning Hands":      { level: 1, type: "damage", damageType: "fire",    dice: "3d6" },
  "Chromatic Orb":      { level: 1, type: "damage", damageType: "varies",  dice: "3d8" },
  "Guiding Bolt":       { level: 1, type: "damage", damageType: "radiant", dice: "4d6" },
  "Cure Wounds":        { level: 1, type: "heal",   damageType: "heal",    dice: "1d8+mod" },
  "Healing Word":       { level: 1, type: "heal",   damageType: "heal",    dice: "1d4+mod" },
  "Shield":             { level: 1, type: "effect", damageType: null,      dice: null },

  "Scorching Ray":      { level: 2, type: "damage", damageType: "fire",    dice: "3d6" },
  "Hold Person":        { level: 2, type: "effect", damageType: null,      dice: null },
  "Mirror Image":       { level: 2, type: "effect", damageType: null,      dice: null },
  "Misty Step":         { level: 2, type: "effect", damageType: null,      dice: null },
  "Flaming Sphere":     { level: 2, type: "damage", damageType: "fire",    dice: "2d6" },

  "Fireball":           { level: 3, type: "damage", damageType: "fire",    dice: "8d6" },
  "Lightning Bolt":     { level: 3, type: "damage", damageType: "lightning", dice: "8d6" },
  "Fly":                { level: 3, type: "effect", damageType: null,      dice: null },
  "Counterspell":       { level: 3, type: "effect", damageType: null,      dice: null },
  "Dispel Magic":       { level: 3, type: "effect", damageType: null,      dice: null },

  "Polymorph":          { level: 4, type: "effect", damageType: null,      dice: null },
  "Ice Storm":          { level: 4, type: "damage", damageType: "cold",    dice: "2d8 + 4d6" },
  "Dimension Door":     { level: 4, type: "effect", damageType: null,      dice: null },

  "Wall of Force":      { level: 5, type: "effect", damageType: null,      dice: null },
  "Cone of Cold":       { level: 5, type: "damage", damageType: "cold",    dice: "8d8" },
  "Animate Objects":    { level: 5, type: "effect", damageType: null,      dice: null },

  "Disintegrate":       { level: 6, type: "damage", damageType: "force",   dice: "10d6+40" },
  "Globe of Invulnerability": { level: 6, type: "effect", damageType: null, dice: null },

  "Finger of Death":    { level: 7, type: "damage", damageType: "necrotic", dice: "7d8+30" },
  "Teleport":           { level: 7, type: "effect", damageType: null,      dice: null },

  "Antimagic Field":    { level: 8, type: "effect", damageType: null,      dice: null },
  "Power Word Stun":    { level: 8, type: "effect", damageType: null,      dice: null },

  "Meteor Swarm":       { level: 9, type: "damage", damageType: "fire & bludgeoning", dice: "20d6 fire + 20d6 bludgeoning" },
  "Wish":               { level: 9, type: "effect", damageType: null,      dice: null }
};
