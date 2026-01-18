const SUBCLASSES = {
  barbarian: {
    "Totem Warrior": {
      features: {
        3: [
          { name: "Totem Spirit", choice: ["Bear", "Eagle", "Wolf"] }
        ],
        6: [
          { name: "Aspect of the Beast", choice: ["Bear", "Eagle", "Wolf"] }
        ],
        10: [
          { name: "Spirit Walker" }
        ],
        14: [
          { name: "Totemic Attunement", choice: ["Bear", "Eagle", "Wolf"] }
        ]
      }
    },

    "Storm Herald": {
      features: {
        3: [
          { name: "Storm Aura", choice: ["Desert", "Sea", "Tundra"] }
        ],
        6: [
          { name: "Storm Soul" }
        ],
        10: [
          { name: "Shielding Storm" }
        ],
        14: [
          { name: "Raging Storm" }
        ]
      }
    },

    "Wild Magic": {
      features: {
        3: [
          { name: "Wild Surge" },
          { name: "Magic Awareness" }
        ],
        6: [
          { name: "Bolstering Magic" }
        ],
        10: [
          { name: "Unstable Backlash" }
        ],
        14: [
          { name: "Controlled Surge" }
        ]
      }
    },

    "Berserker": {
      features: {
        3: [
          { name: "Frenzy" }
        ],
        6: [
          { name: "Mindless Rage" }
        ],
        10: [
          { name: "Intimidating Presence" }
        ],
        14: [
          { name: "Retaliation" }
        ]
      }
    },

    "Ancestral Guardian": {
      features: {
        3: [
          { name: "Ancestral Protectors" }
        ],
        6: [
          { name: "Spirit Shield" }
        ],
        10: [
          { name: "Consult the Spirits" }
        ],
        14: [
          { name: "Vengeful Ancestors" }
        ]
      }
    },

    "Battlerager": {
      features: {
        3: [
          { name: "Battlerager Armor" }
        ],
        6: [
          { name: "Reckless Abandon" }
        ],
        10: [
          { name: "Battlerager Charge" }
        ],
        14: [
          { name: "Spiked Retribution" }
        ]
      }
    },

    "Beast": {
      features: {
        3: [
          { name: "Form of the Beast" }
        ],
        6: [
          { name: "Bestial Soul" }
        ],
        10: [
          { name: "Infectious Fury" }
        ],
        14: [
          { name: "Call the Hunt" }
        ]
      }
    },

    "Giant": {
      features: {
        3: [
          { name: "Giant's Power" }
        ],
        6: [
          { name: "Elemental Cleaver" }
        ],
        10: [
          { name: "Mighty Impel" }
        ],
        14: [
          { name: "Demiurgic Colossus" }
        ]
      }
    },

    "Zealot": {
      features: {
        3: [
          { name: "Divine Fury" },
          { name: "Warrior of the Gods" }
        ],
        6: [
          { name: "Fanatical Focus" }
        ],
        10: [
          { name: "Zealous Presence" }
        ],
        14: [
          { name: "Rage Beyond Death" }
        ]
      }
    }
  },
  bard: {
  "Lore": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Cutting Words" }
      ],
      6: [
        { name: "Additional Magical Secrets" }
      ],
      14: [
        { name: "Peerless Skill" }
      ]
    }
  },

  "Valor": {
    features: {
      3: [
        { name: "Combat Inspiration" }
      ],
      6: [
        { name: "Extra Attack" },
        { name: "Battle Magic" }
      ],
      14: [
        { name: "Superior Inspiration" }
      ]
    }
  },

  "Creation": {
    features: {
      3: [
        { name: "Mote of Potential" },
        { name: "Animating Performance" }
      ],
      6: [
        { name: "Creative Crescendo" }
      ],
      14: [
        { name: "Master Artisan" }
      ]
    }
  },

  "Eloquence": {
    features: {
      3: [
        { name: "Silver Tongue" },
        { name: "Unsettling Words" }
      ],
      6: [
        { name: "Unfailing Inspiration" }
      ],
      14: [
        { name: "Infectious Inspiration" }
      ]
    }
  },

  "Glamour": {
    features: {
      3: [
        { name: "Mantle of Inspiration" },
        { name: "Enthralling Performance" }
      ],
      6: [
        { name: "Unbreakable Majesty" }
      ],
      14: [
        { name: "Greater Enthrallment" }
      ]
    }
  },

  "Spirits": {
    features: {
      3: [
        { name: "Guiding Whispers" },
        { name: "Spirit Session" }
      ],
      6: [
        { name: "Mantle of the Spirit" }
      ],
      14: [
        { name: "Reckoning of the Dead" }
      ]
    }
  },

  "Swords": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Fighting Style", choice: ["Dueling", "Two-Weapon Fighting", "Defense"] },
        { name: "Blade Flourish" }
      ],
      6: [
        { name: "Extra Attack" }
      ],
      14: [
        { name: "Master’s Flourish" }
      ]
    }
  },

  "Whispers": {
    features: {
      3: [
        { name: "Psychic Blades" },
        { name: "Words of Terror" }
      ],
      6: [
        { name: "Mantle of Whispers" }
      ],
      14: [
        { name: "Shadow Lore" }
      ]
    }
  }
},
cleric: {
  "Knowledge": {
    features: {
      1: [
        { name: "Blessings of Knowledge" },
        { name: "Domain Spells", spells: ["Command", "Identify"] }
      ],
      2: [
        { name: "Channel Divinity: Knowledge of the Ages" }
      ],
      6: [
        { name: "Channel Divinity: Read Thoughts" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Visions of the Past" }
      ]
    }
  },

  "Life": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Bless", "Cure Wounds"] },
        { name: "Bonus Proficiency" },
        { name: "Disciple of Life" }
      ],
      2: [
        { name: "Channel Divinity: Turn Undead" }
      ],
      6: [
        { name: "Preserve Life" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Supreme Healing" }
      ]
    }
  },

  "Light": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Burning Hands", "Faerie Fire"] },
        { name: "Bonus Cantrip" },
        { name: "Warding Flare" }
      ],
      2: [
        { name: "Channel Divinity: Radiance of the Dawn" }
      ],
      6: [
        { name: "Improved Flare" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Corona of Light" }
      ]
    }
  },

  "Nature": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Animal Friendship", "Speak with Animals"] },
        { name: "Acolyte of Nature" }
      ],
      2: [
        { name: "Channel Divinity: Charm Animals and Plants" }
      ],
      6: [
        { name: "Dampen Elements" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Master of Nature" }
      ]
    }
  },

  "Tempest": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Fog Cloud", "Thunderwave"] },
        { name: "Bonus Proficiencies" },
        { name: "Wrath of the Storm" }
      ],
      2: [
        { name: "Channel Divinity: Destructive Wrath" }
      ],
      6: [
        { name: "Thunderbolt Strike" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Stormborn" }
      ]
    }
  },

  "Trickery": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Charm Person", "Disguise Self"] },
        { name: "Blessing of the Trickster" }
      ],
      2: [
        { name: "Channel Divinity: Invoke Duplicity" }
      ],
      6: [
        { name: "Cloak of Shadows" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Improved Duplicity" }
      ]
    }
  },

  "War": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Divine Favor", "Shield of Faith"] },
        { name: "Bonus Proficiency" },
        { name: "War Priest" }
      ],
      2: [
        { name: "Channel Divinity: Guided Strike" }
      ],
      6: [
        { name: "Channel Divinity: War God's Blessing" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Avatar of Battle" }
      ]
    }
  },

  "Death": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Chill Touch", "False Life"] },
        { name: "Reaper" }
      ],
      2: [
        { name: "Channel Divinity: Touch of Death" }
      ],
      6: [
        { name: "Inescapable Destruction" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Improved Reaper" }
      ]
    }
  },

  "Arcana": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Magic Missile", "Detect Magic"] },
        { name: "Arcane Initiate" }
      ],
      2: [
        { name: "Channel Divinity: Arcane Abjuration" }
      ],
      6: [
        { name: "Spell Breaker" }
      ],
      8: [
        { name: "Arcane Strike" }
      ],
      17: [
        { name: "Spell Immunity" }
      ]
    }
  },

  "Forge": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Searing Smite", "Shield of Faith"] },
        { name: "Bonus Proficiency" },
        { name: "Blessing of the Forge" }
      ],
      2: [
        { name: "Channel Divinity: Artisan's Blessing" }
      ],
      6: [
        { name: "Soul of the Forge" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Saint of Forge and Fire" }
      ]
    }
  },

  "Grave": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Bane", "False Life"] },
        { name: "Circle of Mortality" }
      ],
      2: [
        { name: "Channel Divinity: Path to the Grave" }
      ],
      6: [
        { name: "Eyes of the Grave" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Potent Spellcasting" }
      ]
    }
  },

  "Order": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Command", "Heroism"] },
        { name: "Voice of Authority" }
      ],
      2: [
        { name: "Channel Divinity: Order's Demand" }
      ],
      6: [
        { name: "Embodiment of Law" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Order's Wrath" }
      ]
    }
  },

  "Peace": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Cure Wounds", "Heroism"] },
        { name: "Implement of Peace" }
      ],
      2: [
        { name: "Channel Divinity: Balm of Peace" }
      ],
      6: [
        { name: "Protective Bond" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Emissary of Peace" }
      ]
    }
  },

  "Twilight": {
    features: {
      1: [
        { name: "Domain Spells", spells: ["Faerie Fire", "Sleep"] },
        { name: "Eyes of Night" },
        { name: "Vigilant Blessing" }
      ],
      2: [
        { name: "Channel Divinity: Twilight Sanctuary" }
      ],
      6: [
        { name: "Steps of Night" }
      ],
      8: [
        { name: "Divine Strike" }
      ],
      17: [
        { name: "Twilight Shroud" }
      ]
    }
  }
},
druid: {
  "Land": {
    features: {
      2: [
        { name: "Bonus Cantrip" },
        { name: "Natural Recovery" }
      ],
      3: [
        { name: "Circle Spells", spells: ["Longstrider", "Spider Climb"] }
      ],
      6: [
        { name: "Land's Stride" }
      ],
      10: [
        { name: "Nature's Ward" }
      ],
      14: [
        { name: "Nature's Sanctuary" }
      ]
    }
  },

  "Moon": {
    features: {
      2: [
        { name: "Combat Wild Shape" },
        { name: "Circle Forms" }
      ],
      6: [
        { name: "Primal Strike" }
      ],
      10: [
        { name: "Elemental Wild Shape" }
      ],
      14: [
        { name: "Thousand Forms" }
      ]
    }
  },

  "Dreams": {
    features: {
      2: [
        { name: "Hearth of Moonlight and Shadow" },
        { name: "Balm of the Summer Court" }
      ],
      6: [
        { name: "Hidden Paths" }
      ],
      10: [
        { name: "Walker in Dreams" }
      ],
      14: [
        { name: "Watcher in the Woods" }
      ]
    }
  },

  "Shepherd": {
    features: {
      2: [
        { name: "Spirit Totem" }
      ],
      6: [
        { name: "Mighty Summoner" }
      ],
      10: [
        { name: "Guardian Spirit" }
      ],
      14: [
        { name: "Faithful Summons" }
      ]
    }
  },

  "Spores": {
    features: {
      2: [
        { name: "Halo of Spores" }
      ],
      6: [
        { name: "Fungal Infestation" }
      ],
      10: [
        { name: "Spreading Spores" }
      ],
      14: [
        { name: "Fungal Body" }
      ]
    }
  },

  "Stars": {
    features: {
      2: [
        { name: "Star Map" },
        { name: "Starry Form" }
      ],
      6: [
        { name: "Cosmic Omen" }
      ],
      10: [
        { name: "Twinkling Constellations" }
      ],
      14: [
        { name: "Full of Stars" }
      ]
    }
  },

  "Wildfire": {
    features: {
      2: [
        { name: "Summon Wildfire Spirit" },
        { name: "Enhanced Bond" }
      ],
      6: [
        { name: "Cauterizing Flames" }
      ],
      10: [
        { name: "Form of the Wildfire" }
      ],
      14: [
        { name: "Blazing Revival" }
      ]
    }
  }
},
fighter: {
  "Champion": {
    features: {
      3: [
        { name: "Improved Critical" }
      ],
      7: [
        { name: "Remarkable Athlete" }
      ],
      10: [
        { name: "Additional Fighting Style" }
      ],
      15: [
        { name: "Superior Critical" }
      ],
      18: [
        { name: "Survivor" }
      ]
    }
  },

  "Battle Master": {
    features: {
      3: [
        { name: "Combat Superiority" },
        { name: "Student of War" }
      ],
      7: [
        { name: "Know Your Enemy" }
      ],
      10: [
        { name: "Improved Combat Superiority" }
      ],
      15: [
        { name: "Relentless" }
      ]
    }
  },

  "Eldritch Knight": {
    features: {
      3: [
        { name: "Weapon Bond" },
        { name: "Spellcasting", list: "wizard" }
      ],
      7: [
        { name: "War Magic" }
      ],
      10: [
        { name: "Eldritch Strike" }
      ],
      15: [
        { name: "Arcane Charge" }
      ],
      18: [
        { name: "Improved War Magic" }
      ]
    }
  },

  "Arcane Archer": {
    features: {
      3: [
        { name: "Arcane Archer Lore" },
        { name: "Arcane Shot", choice: ["Banishing Arrow", "Beguiling Arrow", "Bursting Arrow", "Enfeebling Arrow", "Grasping Arrow", "Piercing Arrow", "Seeking Arrow", "Shadow Arrow"] }
      ],
      7: [
        { name: "Arcane Shot Improvement" }
      ],
      10: [
        { name: "Magic Arrow" }
      ],
      15: [
        { name: "Arcane Archer Mastery" }
      ]
    }
  },

  "Banneret": {
    features: {
      3: [
        { name: "Banner of the Ancients" }
      ],
      7: [
        { name: "Rallying Cry" }
      ],
      10: [
        { name: "Inspiring Strike" }
      ],
      15: [
        { name: "Unyielding Banner" }
      ]
    }
  },

  "Cavalier": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Unwavering Mark" }
      ],
      7: [
        { name: "Warding Maneuver" }
      ],
      10: [
        { name: "Hold the Line" }
      ],
      15: [
        { name: "Vigilant Defender" }
      ]
    }
  },

  "Echo Knight": {
    features: {
      3: [
        { name: "Manifest Echo" },
        { name: "Unleash Incarnation" }
      ],
      7: [
        { name: "Echo Avatar" }
      ],
      10: [
        { name: "Shadow Martyr" }
      ],
      15: [
        { name: "Reclaim Potential" }
      ],
      18: [
        { name: "Legion of One" }
      ]
    }
  },

  "Psi Warrior": {
    features: {
      3: [
        { name: "Psionic Power" },
        { name: "Psi-Bolstered Knack" }
      ],
      7: [
        { name: "Telekinetic Adept" }
      ],
      10: [
        { name: "Protective Field" }
      ],
      15: [
        { name: "Powerful Build" }
      ],
      18: [
        { name: "Master of Psionics" }
      ]
    }
  },

  "Rune Knight": {
    features: {
      3: [
        { name: "Giant's Might" },
        { name: "Runes" }
      ],
      7: [
        { name: "Rune Carver" }
      ],
      10: [
        { name: "Stone’s Endurance" }
      ],
      15: [
        { name: "Runic Juggernaut" }
      ],
      18: [
        { name: "Master of Runes" }
      ]
    }
  },

  "Samurai": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Fighting Spirit" }
      ],
      7: [
        { name: "Elegant Courtier" }
      ],
      10: [
        { name: "Tireless Spirit" }
      ],
      15: [
        { name: "Rapid Strike" }
      ]
    }
  }
},
monk: {
  "Open Hand": {
    features: {
      3: [
        { name: "Open Hand Technique" }
      ],
      6: [
        { name: "Wholeness of Body" }
      ],
      11: [
        { name: "Tranquility" }
      ],
      17: [
        { name: "Quivering Palm" }
      ]
    }
  },

  "Shadow": {
    features: {
      3: [
        { name: "Shadow Arts" },
        { name: "Darkness Step" }
      ],
      6: [
        { name: "Shadow Step" }
      ],
      11: [
        { name: "Cloak of Shadows" }
      ],
      17: [
        { name: "Opportunist" }
      ]
    }
  },

  "Four Elements": {
    features: {
      3: [
        { name: "Disciple of the Elements" }
      ],
      6: [
        { name: "Elemental Attunement" }
      ],
      11: [
        { name: "Elemental Disciplines Improvement" }
      ],
      17: [
        { name: "Mastery of Elements" }
      ]
    }
  },

  "Astral Self": {
    features: {
      3: [
        { name: "Arms of the Astral Self" }
      ],
      6: [
        { name: "Visage of the Astral Self" }
      ],
      11: [
        { name: "Body of the Astral Self" }
      ],
      17: [
        { name: "Awakened Astral Self" }
      ]
    }
  },

  "Ascendant Dragon": {
    features: {
      3: [
        { name: "Dragon Ancestor" },
        { name: "Breath of the Dragon" }
      ],
      6: [
        { name: "Elemental Affinity" }
      ],
      11: [
        { name: "Wings of the Dragon" }
      ],
      17: [
        { name: "Dragon Fear" }
      ]
    }
  },

  "Drunken Master": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Drunken Technique" }
      ],
      6: [
        { name: "Tipsy Sway" }
      ],
      11: [
        { name: "Drunken Mastery" }
      ],
      17: [
        { name: "Intoxicated Frenzy" }
      ]
    }
  },

  "Kensei": {
    features: {
      3: [
        { name: "Path of the Kensei" },
        { name: "Kensei Weapons" }
      ],
      6: [
        { name: "One with the Blade" }
      ],
      11: [
        { name: "Sharpen the Blade" }
      ],
      17: [
        { name: "Unerring Accuracy" }
      ]
    }
  },

  "Long Death": {
    features: {
      3: [
        { name: "Touch of Death" }
      ],
      6: [
        { name: "Hour of Reaping" }
      ],
      11: [
        { name: "Mastery of Death" }
      ],
      17: [
        { name: "Fortitude of the Deathless" }
      ]
    }
  },

  "Mercy": {
    features: {
      3: [
        { name: "Practiced Physician" },
        { name: "Hand of Healing" }
      ],
      6: [
        { name: "Physician's Touch" }
      ],
      11: [
        { name: "Infallible Aid" }
      ],
      17: [
        { name: "Healing Mastery" }
      ]
    }
  },

  "Sun Soul": {
    features: {
      3: [
        { name: "Radiant Sun Bolt" },
        { name: "Searing Sun" }
      ],
      6: [
        { name: "Searing Arc" }
      ],
      11: [
        { name: "Sun Shield" }
      ],
      17: [
        { name: "Searing Radiance" }
      ]
    }
  }
},
paladin: {
  "Devotion": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Protection from Evil and Good", "Sanctuary"] },
        { name: "Channel Divinity: Sacred Weapon" },
        { name: "Channel Divinity: Turn the Unholy" }
      ],
      7: [
        { name: "Aura of Devotion" }
      ],
      15: [
        { name: "Purity of Spirit" }
      ],
      20: [
        { name: "Holy Nimbus" }
      ]
    }
  },

  "Ancients": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Ensnaring Strike", "Speak with Animals"] },
        { name: "Channel Divinity: Nature's Wrath" },
        { name: "Channel Divinity: Turn the Faithless" }
      ],
      7: [
        { name: "Aura of Warding" }
      ],
      15: [
        { name: "Undying Sentinel" }
      ],
      20: [
        { name: "Elder Champion" }
      ]
    }
  },

  "Vengeance": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Bane", "Hunter's Mark"] },
        { name: "Channel Divinity: Abjure Enemy" },
        { name: "Channel Divinity: Vow of Enmity" }
      ],
      7: [
        { name: "Relentless Avenger" }
      ],
      15: [
        { name: "Soul of Vengeance" }
      ],
      20: [
        { name: "Avenging Angel" }
      ]
    }
  },

  "Conquest": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Armor of Agathys", "Command"] },
        { name: "Channel Divinity: Conquering Presence" },
        { name: "Channel Divinity: Guided Strike" }
      ],
      7: [
        { name: "Aura of Conquest" }
      ],
      15: [
        { name: "Scornful Rebuke" }
      ],
      20: [
        { name: "Invincible Conqueror" }
      ]
    }
  },

  "Crown": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Command", "Compelled Duel"] },
        { name: "Channel Divinity: Champion Challenge" },
        { name: "Channel Divinity: Turn the Tide" }
      ],
      7: [
        { name: "Divine Allegiance" }
      ],
      15: [
        { name: "Unyielding Spirit" }
      ],
      20: [
        { name: "Exalted Champion" }
      ]
    }
  },

  "Glory": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Burning Hands", "Heroism"] },
        { name: "Channel Divinity: Peerless Athlete" },
        { name: "Channel Divinity: Radiant Strike" }
      ],
      7: [
        { name: "Aura of Courage" }
      ],
      15: [
        { name: "Empowered Champion" }
      ],
      20: [
        { name: "Glorious Intervention" }
      ]
    }
  },

  "Redemption": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Sanctuary", "Sleep"] },
        { name: "Channel Divinity: Emissary of Peace" },
        { name: "Channel Divinity: Rebuke the Violent" }
      ],
      7: [
        { name: "Aura of the Guardian" }
      ],
      15: [
        { name: "Protective Spirit" }
      ],
      20: [
        { name: "Avatar of Redemption" }
      ]
    }
  },

  "Watchers": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Alarm", "Detect Evil and Good"] },
        { name: "Channel Divinity: Watchful Sentinel" },
        { name: "Channel Divinity: Abjure the Outlander" }
      ],
      7: [
        { name: "Aura of the Watchers" }
      ],
      15: [
        { name: "Unyielding Sentinel" }
      ],
      20: [
        { name: "Sentinel of the Planes" }
      ]
    }
  },

  "Oathbreaker": {
    features: {
      3: [
        { name: "Sacred Oath" },
        { name: "Oath Spells", spells: ["Inflict Wounds", "Shield"] },
        { name: "Channel Divinity: Control Undead" },
        { name: "Channel Divinity: Dreadful Aspect" }
      ],
      7: [
        { name: "Aura of Hate" }
      ],
      15: [
        { name: "Control Undead Improvement" }
      ],
      20: [
        { name: "Dread Lord" }
      ]
    }
  }
},
ranger: {
  "Hunter": {
    features: {
      3: [
        { name: "Hunter's Prey", choice: ["Colossus Slayer", "Giant Killer", "Horde Breaker"] },
        { name: "Hunter Spells", spells: ["Hunter's Mark", "Jump"] }
      ],
      7: [
        { name: "Defensive Tactics", choice: ["Escape the Horde", "Multiattack Defense", "Steel Will"] }
      ],
      11: [
        { name: "Multiattack", choice: ["Volley", "Whirlwind Attack"] }
      ],
      15: [
        { name: "Superior Hunter's Defense" }
      ]
    }
  },

  "Beast Master": {
    features: {
      3: [
        { name: "Ranger's Companion" },
        { name: "Beast Master Spells", spells: ["Hunter's Mark", "Cure Wounds"] }
      ],
      7: [
        { name: "Exceptional Training" }
      ],
      11: [
        { name: "Bestial Fury" }
      ],
      15: [
        { name: "Share Spells" }
      ]
    }
  },

  "Fey Wanderer": {
    features: {
      3: [
        { name: "Fey Wanderer Magic", spells: ["Charm Person", "Faerie Fire"] },
        { name: "Otherworldly Glamour" }
      ],
      7: [
        { name: "Fey Reinforcements" }
      ],
      11: [
        { name: "Misty Wanderer" }
      ],
      15: [
        { name: "Fey Step Improvement" }
      ]
    }
  },

  "Gloom Stalker": {
    features: {
      3: [
        { name: "Gloom Stalker Magic", spells: ["Disguise Self", "Dreadful Word"] },
        { name: "Dread Ambusher" },
        { name: "Umbral Sight" }
      ],
      7: [
        { name: "Iron Mind" }
      ],
      11: [
        { name: "Stalker's Flurry" }
      ],
      15: [
        { name: "Shadowy Dodge" }
      ]
    }
  },

  "Horizon Walker": {
    features: {
      3: [
        { name: "Horizon Walker Magic", spells: ["Detect Magic", "Shield"] },
        { name: "Detect Portal" },
        { name: "Planar Warrior" }
      ],
      7: [
        { name: "Ethereal Step" }
      ],
      11: [
        { name: "Distant Strike" }
      ],
      15: [
        { name: "Spectral Defense" }
      ]
    }
  },

  "Monster Slayer": {
    features: {
      3: [
        { name: "Monster Slayer Magic", spells: ["Hunter's Mark", "Detect Magic"] },
        { name: "Slayer's Prey" }
      ],
      7: [
        { name: "Hunter's Sense" }
      ],
      11: [
        { name: "Supernatural Defense" }
      ],
      15: [
        { name: "Magic-User's Bane" }
      ]
    }
  },

  "Swarmkeeper": {
    features: {
      3: [
        { name: "Swarmkeeper Magic", spells: ["Mage Hand", "Fog Cloud"] },
        { name: "Gathered Swarm" }
      ],
      7: [
        { name: "Swarming Dispersal" }
      ],
      11: [
        { name: "Writhing Tide" }
      ],
      15: [
        { name: "Summon Swarm" }
      ]
    }
  },

  "Drakewarden": {
    features: {
      3: [
        { name: "Drake Companion" },
        { name: "Drakewarden Magic", spells: ["Elemental Weapon", "Enlarge/Reduce"] }
      ],
      7: [
        { name: "Drake Wings" }
      ],
      11: [
        { name: "Drake Breath" }
      ],
      15: [
        { name: "Multiattack" }
      ]
    }
  }
},
rogue: {
  "Thief": {
    features: {
      3: [
        { name: "Fast Hands" },
        { name: "Second-Story Work" }
      ],
      9: [
        { name: "Supreme Sneak" }
      ],
      13: [
        { name: "Use Magic Device" }
      ],
      17: [
        { name: "Thief's Reflexes" }
      ]
    }
  },

  "Assassin": {
    features: {
      3: [
        { name: "Bonus Proficiencies" },
        { name: "Assassinate" }
      ],
      9: [
        { name: "Infiltration Expertise" }
      ],
      13: [
        { name: "Imposter" }
      ],
      17: [
        { name: "Death Strike" }
      ]
    }
  },

  "Arcane Trickster": {
    features: {
      3: [
        { name: "Spellcasting", list: "wizard" },
        { name: "Mage Hand Legerdemain" },
        { name: "Arcane Trickster Spells", spells: ["Mage Hand", "Minor Illusion", "Charm Person"] }
      ],
      9: [
        { name: "Magical Ambush" }
      ],
      13: [
        { name: "Versatile Trickster" }
      ],
      17: [
        { name: "Spell Thief" }
      ]
    }
  },

  "Inquisitive": {
    features: {
      3: [
        { name: "Ear for Deceit" },
        { name: "Eye for Detail" },
        { name: "Insightful Fighting" }
      ],
      9: [
        { name: "Steady Eye" }
      ],
      13: [
        { name: "Unerring Eye" }
      ],
      17: [
        { name: "Eye for Weakness" }
      ]
    }
  },

  "Mastermind": {
    features: {
      3: [
        { name: "Master of Intrigue" },
        { name: "Master of Tactics" }
      ],
      9: [
        { name: "Insightful Manipulator" }
      ],
      13: [
        { name: "Misdirection" }
      ],
      17: [
        { name: "Soul of Deception" }
      ]
    }
  },

  "Swashbuckler": {
    features: {
      3: [
        { name: "Fancy Footwork" },
        { name: "Rakish Audacity" }
      ],
      9: [
        { name: "Panache" }
      ],
      13: [
        { name: "Elegant Maneuver" }
      ],
      17: [
        { name: "Master Duelist" }
      ]
    }
  },

  "Phantom": {
    features: {
      3: [
        { name: "Whispers of the Dead" },
        { name: "Wails from the Grave" }
      ],
      9: [
        { name: "Tokens of the Departed" }
      ],
      13: [
        { name: "Ghost Walk" }
      ],
      17: [
        { name: "Death Knell" }
      ]
    }
  },

  "Soulknife": {
    features: {
      3: [
        { name: "Psionic Power" },
        { name: "Psychic Blades" }
      ],
      9: [
        { name: "Soul Blades Enhancement" }
      ],
      13: [
        { name: "Psychic Veil" }
      ],
      17: [
        { name: "Rend Mind" }
      ]
    }
  },

  "Scout": {
    features: {
      3: [
        { name: "Skirmisher" },
        { name: "Survivalist" }
      ],
      9: [
        { name: "Superior Mobility" }
      ],
      13: [
        { name: "Ambush Master" }
      ],
      17: [
        { name: "Sudden Strike" }
      ]
    }
  }
},
sorcerer: {
  "Draconic Bloodline": {
    features: {
      1: [
        { name: "Dragon Ancestor" },
        { name: "Draconic Resilience" }
      ],
      6: [
        { name: "Elemental Affinity" }
      ],
      14: [
        { name: "Dragon Wings" }
      ],
      18: [
        { name: "Draconic Presence" }
      ]
    }
  },

  "Wild Magic": {
    features: {
      1: [
        { name: "Wild Magic Surge" },
        { name: "Tides of Chaos" }
      ],
      6: [
        { name: "Controlled Chaos" }
      ],
      14: [
        { name: "Bend Luck" }
      ],
      18: [
        { name: "Spell Bombardment" }
      ]
    }
  },

  "Aberrant Mind": {
    features: {
      1: [
        { name: "Psionic Spells", spells: ["Mind Sliver", "Dissonant Whispers"] },
        { name: "Telepathic Speech" }
      ],
      6: [
        { name: "Psionic Sorcery" }
      ],
      14: [
        { name: "Psychic Defenses" }
      ],
      18: [
        { name: "Revelation in Flesh" }
      ]
    }
  },

  "Shadow Magic": {
    features: {
      1: [
        { name: "Eyes of the Dark" },
        { name: "Strength of the Grave" },
        { name: "Shadow Sorcery Spells", spells: ["Darkness", "Minor Illusion"] }
      ],
      6: [
        { name: "Hound of Ill Omen" }
      ],
      14: [
        { name: "Shadow Walk" }
      ],
      18: [
        { name: "Umbral Form" }
      ]
    }
  },

  "Storm Sorcery": {
    features: {
      1: [
        { name: "Wind Speaker" },
        { name: "Tempestuous Magic" },
        { name: "Storm Sorcery Spells", spells: ["Thunderwave", "Gust"] }
      ],
      6: [
        { name: "Heart of the Storm" }
      ],
      14: [
        { name: "Storm Guide" }
      ],
      18: [
        { name: "Wind Soul" }
      ]
    }
  },

  "Lunar Sorcery": {
    features: {
      1: [
        { name: "Lunar Magic" },
        { name: "Moonbeam Cantrip" },
        { name: "Lunar Sorcery Spells", spells: ["Moonbeam", "Faerie Fire"] }
      ],
      6: [
        { name: "Lunar Shield" }
      ],
      14: [
        { name: "Eclipse Form" }
      ],
      18: [
        { name: "Radiant Lunar Mastery" }
      ]
    }
  },

  "Divine Soul": {
    features: {
      1: [
        { name: "Divine Magic" },
        { name: "Favored by the Gods" },
        { name: "Divine Soul Spells", spells: ["Cure Wounds", "Guiding Bolt"] }
      ],
      6: [
        { name: "Empowered Healing" }
      ],
      14: [
        { name: "Otherworldly Wings" }
      ],
      18: [
        { name: "Unearthly Recovery" }
      ]
    }
  },

  "Clockwork Soul": {
    features: {
      1: [
        { name: "Clockwork Magic" },
        { name: "Powerful Build" },
        { name: "Clockwork Soul Spells", spells: ["Alarm", "Protection from Evil and Good"] }
      ],
      6: [
        { name: "Restore Balance" }
      ],
      14: [
        { name: "Trance of Order" }
      ],
      18: [
        { name: "Clockwork Cavalier" }
      ]
    }
  }
},
warlock: {
  "Archfey": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Faerie Fire", "Sleep"] },
        { name: "Fey Presence" }
      ],
      6: [
        { name: "Misty Escape" }
      ],
      10: [
        { name: "Beguiling Defenses" }
      ],
      14: [
        { name: "Dark Delirium" }
      ]
    }
  },

  "Fiend": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Burning Hands", "Command"] },
        { name: "Dark One's Blessing" }
      ],
      6: [
        { name: "Dark One's Own Luck" }
      ],
      10: [
        { name: "Fiendish Resilience" }
      ],
      14: [
        { name: "Hurl Through Hell" }
      ]
    }
  },

  "Great Old One": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Dissonant Whispers", "Tasha's Hideous Laughter"] },
        { name: "Awakened Mind" }
      ],
      6: [
        { name: "Entropic Ward" }
      ],
      10: [
        { name: "Thought Shield" }
      ],
      14: [
        { name: "Create Thrall" }
      ]
    }
  },

  "Hexblade": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Shield", "Wrathful Smite"] },
        { name: "Hexblade's Curse" },
        { name: "Hex Warrior" }
      ],
      6: [
        { name: "Accursed Specter" }
      ],
      10: [
        { name: "Armor of Hexes" }
      ],
      14: [
        { name: "Master of Hexes" }
      ]
    }
  },

  "Celestial": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Cure Wounds", "Guiding Bolt"] },
        { name: "Bonus Cantrips" },
        { name: "Healing Light" }
      ],
      6: [
        { name: "Radiant Soul" }
      ],
      10: [
        { name: "Celestial Resilience" }
      ],
      14: [
        { name: "Searing Vengeance" }
      ]
    }
  },

  "Fathomless": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Mage Hand", "Shape Water"] },
        { name: "Tentacle of the Deeps" },
        { name: "Gift of the Sea" }
      ],
      6: [
        { name: "Guardians of the Depths" }
      ],
      10: [
        { name: "Dreadful Tentacle" }
      ],
      14: [
        { name: "Grasping Tentacles" }
      ]
    }
  },

  "Genie": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Sanctuary", "Tenser's Floating Disk"] },
        { name: "Genie’s Vessel" },
        { name: "Expanded Spellcasting" }
      ],
      6: [
        { name: "Sanctuary's Boon" }
      ],
      10: [
        { name: "Genie’s Wrath" }
      ],
      14: [
        { name: "Elemental Gift" }
      ]
    }
  },

  "Undead": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["Chill Touch", "False Life"] },
        { name: "Grim Harvest" }
      ],
      6: [
        { name: "Undead Thralls" }
      ],
      10: [
        { name: "Inured to Undeath" }
      ],
      14: [
        { name: "Command Undead" }
      ]
    }
  },

  "Undying": {
    features: {
      1: [
        { name: "Expanded Spell List", spells: ["False Life", "Spare the Dying"] },
        { name: "Among the Dead" }
      ],
      6: [
        { name: "Defy Death" }
      ],
      10: [
        { name: "Undead Fortitude" }
      ],
      14: [
        { name: "Indestructible Life" }
      ]
    }
  }
},
wizard: {
  "Abjuration": {
    features: {
      2: [
        { name: "Abjuration Savant" },
        { name: "Arcane Ward" }
      ],
      6: [
        { name: "Projected Ward" }
      ],
      10: [
        { name: "Improved Abjuration" }
      ],
      14: [
        { name: "Spell Resistance" }
      ]
    }
  },

  "Conjuration": {
    features: {
      2: [
        { name: "Conjuration Savant" },
        { name: "Minor Conjuration" }
      ],
      6: [
        { name: "Benign Transposition" }
      ],
      10: [
        { name: "Focused Conjuration" }
      ],
      14: [
        { name: "Durable Summons" }
      ]
    }
  },

  "Divination": {
    features: {
      2: [
        { name: "Divination Savant" },
        { name: "Portent" }
      ],
      6: [
        { name: "Expert Divination" }
      ],
      10: [
        { name: "The Third Eye" }
      ],
      14: [
        { name: "Greater Portent" }
      ]
    }
  },

  "Enchantment": {
    features: {
      2: [
        { name: "Enchantment Savant" },
        { name: "Hypnotic Gaze" }
      ],
      6: [
        { name: "Instinctive Charm" }
      ],
      10: [
        { name: "Split Enchantment" }
      ],
      14: [
        { name: "Altered Traits" }
      ]
    }
  },

  "Evocation": {
    features: {
      2: [
        { name: "Evocation Savant" },
        { name: "Sculpt Spells" }
      ],
      6: [
        { name: "Potent Cantrip" }
      ],
      10: [
        { name: "Empowered Evocation" }
      ],
      14: [
        { name: "Overchannel" }
      ]
    }
  },

  "Illusion": {
    features: {
      2: [
        { name: "Illusion Savant" },
        { name: "Improved Minor Illusion" }
      ],
      6: [
        { name: "Malleable Illusions" }
      ],
      10: [
        { name: "Illusory Self" }
      ],
      14: [
        { name: "Illusory Reality" }
      ]
    }
  },

  "Necromancy": {
    features: {
      2: [
        { name: "Necromancy Savant" },
        { name: "Grim Harvest" }
      ],
      6: [
        { name: "Undead Thralls" }
      ],
      10: [
        { name: "Inured to Undeath" }
      ],
      14: [
        { name: "Command Undead" }
      ]
    }
  },

  "Transmutation": {
    features: {
      2: [
        { name: "Transmutation Savant" },
        { name: "Minor Alchemy" }
      ],
      6: [
        { name: "Transmuter's Stone" }
      ],
      10: [
        { name: "Shapechanger" }
      ],
      14: [
        { name: "Master Transmuter" }
      ]
    }
  },

  "Bladesinging": {
    features: {
      2: [
        { name: "Training in War and Song" },
        { name: "Bladesong" }
      ],
      6: [
        { name: "Extra Attack" }
      ],
      10: [
        { name: "Song of Defense" }
      ],
      14: [
        { name: "Song of Victory" }
      ]
    }
  },

  "Chronurgy": {
    features: {
      2: [
        { name: "Chronurgy Magic", spells: ["Guiding Bolt", "Shield"] },
        { name: "Chronal Shift" }
      ],
      6: [
        { name: "Momentary Stasis" }
      ],
      10: [
        { name: "Arcane Abeyance" }
      ],
      14: [
        { name: "Convergent Future" }
      ]
    }
  },

  "Graviturgy": {
    features: {
      2: [
        { name: "Graviturgy Magic", spells: ["Mage Hand", "Feather Fall"] },
        { name: "Adjust Density" }
      ],
      6: [
        { name: "Gravity Well" }
      ],
      10: [
        { name: "Press" }
      ],
      14: [
        { name: "Event Horizon" }
      ]
    }
  },

  "Order of Scribes": {
    features: {
      2: [
        { name: "Wizardly Quill" },
        { name: "Awakened Spellbook" }
      ],
      6: [
        { name: "Manifest Mind" }
      ],
      10: [
        { name: "Master Scrivener" }
      ],
      14: [
        { name: "One with the Word" }
      ]
    }
  },

  "War Magic": {
    features: {
      2: [
        { name: "Arcane Deflection" },
        { name: "Tactical Wit" }
      ],
      6: [
        { name: "Power Surge" }
      ],
      10: [
        { name: "Defensive Casting" }
      ],
      14: [
        { name: "Durable Magic" }
      ]
    }
  }
},
artificer: {
  "Alchemist": {
    features: {
      3: [
        { name: "Alchemist Spells", spells: ["Healing Word", "Faerie Fire"] },
        { name: "Alchemist Specialist" }
      ],
      5: [
        { name: "Experimental Elixir" }
      ],
      9: [
        { name: "Restorative Reagents" }
      ],
      15: [
        { name: "Chemical Mastery" }
      ]
    }
  },

  "Artillerist": {
    features: {
      3: [
        { name: "Artillerist Spells", spells: ["Shield", "Thunderwave"] },
        { name: "Eldritch Cannon" }
      ],
      5: [
        { name: "Arcane Firearm" }
      ],
      9: [
        { name: "Explosive Cannon" }
      ],
      15: [
        { name: "Fortified Position" }
      ]
    }
  },

  "Battle Smith": {
    features: {
      3: [
        { name: "Battle Smith Spells", spells: ["Shield", "Thunderwave"] },
        { name: "Battle Ready" },
        { name: "Steel Defender" }
      ],
      5: [
        { name: "Extra Attack" }
      ],
      9: [
        { name: "Arcane Jolt" }
      ],
      15: [
        { name: "Improved Defender" }
      ]
    }
  },

  "Armorer": {
    features: {
      3: [
        { name: "Armorer Spells", spells: ["Mage Armor", "Thunderwave"] },
        { name: "Arcane Armor" }
      ],
      5: [
        { name: "Armor Model" }
      ],
      9: [
        { name: "Armor Modifications" }
      ],
      15: [
        { name: "Perfected Armor" }
      ]
    }
  },

  "Archivist": {
    features: {
      3: [
        { name: "Archivist Spells", spells: ["Identify", "Comprehend Languages"] },
        { name: "Sage Savant" }
      ],
      5: [
        { name: "Mnemonic Recall" }
      ],
      9: [
        { name: "Arcane Insight" }
      ],
      15: [
        { name: "Master Archivist" }
      ]
    }
  }
}

};
