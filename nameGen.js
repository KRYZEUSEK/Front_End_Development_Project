/* ------------------------------
   Name Gen
------------------------------ */

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

/*
  BIG SHARED POOLS
  These are “style buckets” that races pull from + their own specific bits.
  You can safely append more entries to ANY of these arrays.
*/

// human-ish / common fantasy starts
const COMMON_STARTS_HUMAN = [
  'Ab','Ada','Adr','Ael','Aem','Aen','Aes','Aev','Ais','Al','Ala','Ald','Ale',
  'Ali','All','Am','Amel','An','Ana','And','Ann','Ar','Ara','Ari','Ary','As',
  'Ash','Ast','At','Aur','Ava','Ave','Avy','Bael','Bal','Bar','Bel','Ben',
  'Ber','Brae','Bram','Bren','Bri','Bry','Cael','Caem','Caer','Cal','Cam',
  'Car','Cas','Ced','Cel','Cer','Ceph','Chae','Chal','Char','Cor','Crae',
  'Dael','Dae','Dag','Dal','Dam','Dan','Dar','Del','Den','Der','Dev','Dre',
  'Dry','Ead','Edr','Ed','Eir','Ela','Eld','Eli','Elis','Ell','Ely','Em',
  'Emi','Ena','Enn','Eri','Ery','Esm','Esr','Est','Eva','Eve','Evy','Fael',
  'Fae','Fal','Far','Fen','Fer','Fel','Fin','Fir','Gael','Gae','Gal','Gar',
  'Gav','Gell','Ger','Gil','Grae','Gray','Gwen','Gwy','Hael','Hal','Har',
  'Hav','Haz','Hel','Hen','Her','Iad','Ian','Ias','Ila','Illy','Ina','Ira',
  'Isa','Isab','Ise','Ism','Jae','Jaec','Jaed','Jaer','Jal','Jan','Jar',
  'Jas','Jax','Jay','Jor','Jos','Kael','Kae','Kai','Kal','Kam','Kar','Kas',
  'Kath','Ked','Kel','Ken','Ker','Kev','Kis','Kyl','Ky','Lae','Lal','Lan',
  'Lar','Las','Lay','Len','Leo','Lev','Lia','Lil','Lio','Lis','Liv','Lor',
  'Lun','Lys','Mael','Mae','Mag','Mal','Mar','Mas','Mat','Max','May','Mel',
  'Men','Mer','Mic','Mil','Mir','Myr','Nael','Nae','Nal','Nam','Nar','Nat',
  'Nath','Neo','Nev','Nol','Noa','Nor','Odin','Odr','Oli','Oliv','Oly',
  'Orv','Os','Ott','Ov','Pael','Paen','Pel','Pen','Per','Pet','Pyn','Py',
  'Quin','Quill','Rael','Raen','Raf','Ral','Ram','Ran','Ray','Raz','Rem',
  'Ren','Rian','Ric','Rid','Ril','Rom','Ron','Ror','Ryd','Ry','Sael','Saem',
  'Sal','Sam','Sant','Sar','Saul','Seb','Sebas','Sel','Ser','Seth','Sil',
  'Sim','Sol','Som','Sor','Sof','Sofe','Sol','Syl','Tael','Tae','Tag','Tal',
  'Tan','Tar','Tav','Teg','Tel','Ter','Theo','Thae','Thal','Tham','Thom',
  'Thor','Tir','Tor','Tris','Try','Ty','Tyl','Ulr','Ul','Um','Ur','Vael',
  'Val','Var','Vas','Vek','Vel','Ven','Ver','Ves','Vik','Vic','Vin','Vyn',
  'Vio','Vyr','Wen','Wes','Wil','Wyl','Wyae','Wyat','Wynn','Xan','Xav',
  'Xavy','Xael','Xim','Yar','Yes','Yor','Ysa','Ysae','Ys','Yve','Yvel','Yvo',
  'Zac','Zach','Zae','Zan','Zar','Zel','Zen','Zoe','Zo','Zos','Zy'
];

// human-ish middles
const COMMON_MIDDLES_HUMAN = [
  'ab','ad','ae','ai','al','am','an','ar','as','at','av',
  'bel','bry','bre','bra','bro','bryn','cas','cel','cer',
  'dae','dal','dan','dar','del','den','der','dev','dri','dry',
  'el','em','en','er','es','eth','ev','evi','eyn','gal','gar',
  'gen','gia','gio','gla','gre','gry','had','hal','har','hel',
  'hen','her','hes','hyl','ian','ias','ich','id','iel','il',
  'im','in','io','ir','is','ith','ius','jae','jen','jer','jor',
  'jus','kae','kar','kel','ken','ker','kor','kyl','kyn','lae',
  'lag','lan','lar','las','len','ler','les','lia','lian','lic',
  'lis','los','lys','lynn','mae','mag','mal','man','mar','mas',
  'mel','men','mer','mil','mir','mon','mor','myr','nael','nal',
  'nar','nas','nat','nev','nis','nol','non','ny','nyl','od',
  'ol','om','on','or','os','oth','ov','qu','rae','rah','ral',
  'ran','ras','rav','ren','ria','riel','rim','ris','ron','ryn',
  'sal','sam','sar','sel','sem','sen','ser','set','seph','siah',
  'siel','sil','sim','sin','sol','sta','tae','tal','tan','tar',
  'tas','tes','tia','til','tir','ton','tor','tril','try','ul',
  'um','un','ur','us','val','van','var','vel','ven','ver','vic',
  'vin','vor','vyn','wes','whyl','wyn','wyr','ya','yan','yar',
  'yas','yel','yen','za','zah','zar','zel','zen','zor'
];

// human-ish ends
const COMMON_ENDS_HUMAN = [
  'a','ae','ah','ain','air','al','an','and','ane','ar','ard','as','ash','ath',
  'bald','belle','bert','beth','bryn','byr','byne','cia','cie','cus','cyn',
  'dan','dell','den','der','dine','dis','dith','dora','dos','dric','dros',
  'ean','eah','eas','eck','ecks','edge','eith','elis','elle','ella','elyn',
  'en','end','er','ern','ers','erra','eryn','essa','eth','eton','eus','ev',
  'fan','fer','ford','fred','gan','gar','geon','gian','gio','glen','grim',
  'gus','hart','hard','han','hanna','hael','helm','hern','holt','ian','ias',
  'id','iel','ik','il','im','in','ir','is','ith','ius','jen','jyn','kan','kar',
  'kas','kel','kin','kir','kow','la','lain','las','lath','len','ler','les','lia',
  'lian','lie','lin','lis','lith','llyn','llyr','llyth','lyn','lynn','ma','man',
  'mar','mas','mer','mir','mond','mor','na','nah','nath','naya','ne','neus',
  'ney','nica','nick','niel','nis','nix','nna','no','nor','nos','nys','o','oa',
  'oc','och','on','or','orn','os','oth','ova','ovia','ovic','qua','que','quin',
  'ra','rae','rak','ran','ras','ray','rea','red','rek','ren','res','reth','ric',
  'rick','rid','rio','rios','rion','ris','rix','ro','rom','ros','rum','ryn',
  'sa','saan','sair','san','sar','saur','say','se','sel','sen','ser','seth',
  'sha','shel','sia','siah','sic','sio','sis','son','stan','ston','sus','sy',
  'ta','tan','tar','tas','ter','then','thur','thos','tia','tin','ton','tor',
  'tos','tria','trius','us','uth','uus','var','ven','via','vian','vict','vin',
  'vio','vir','vus','wen','wyn','wyr','ya','yah','yan','yas','yel','yen','yn',
  'ys','za','zah','zan','zar','zen','zia','ziah','zio','zor'
];

/*
  RACE-SPECIFIC FIRST NAME RULES
  Each race pulls in COMMON_* plus its own unique flavor lists.
*/

const syllableRules = {
  human: {
    male: {
      start: [
        'Al','Ber','Cor','Da','Ed','Fen','Gar','Har','Iv','Ja','Ka','Leo','Mar','Nor','Os',
        'Per','Ran','Tor','Ul','Val','Wil','Xan','Yor','Zan',
        // plus the big pool
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','i','o','u','an','en','in','or','ar','er','on','al','el','il','as','is','us',
        'ad','am','ev','eth','ian','iel','ias',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'd','ric','mus','rin','dor','th','gan','rick','vard','mon','las','den','mund','var','ian','son','hardt',
        'ander','eus','ianus','ello','etto','erio','ien','ius','aro',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Ari','Bel','Ce','Da','Eli','Fae','Gwen','Hel','Isa','Jo','Ki','Lia','Mi','Na','Oph',
        'Pe','Quin','Sa','Tha','Ve','Wi','Xa','Ya','Za',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','ia','la','ra','na','li','ri','el','is','yn','ara','ina','ora',
        'brya','breia','drea','elyn','eria','essa',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'na','ra','lia','line','wyn','thia','nora','velle','selle','thea','sha','lisse',
        'anna','aria','elle','etta','ina','issa','lyn','lys','mia','rae',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  elf: {
    male: {
      start: [
        'Ae','Cael','Daer','Faer','Haer','Ili','Lae','Maer','Nael','Olo','Rael','Sael','Tha',
        'Syl','Thal','Elr','Erl','Fin','Galad','Ere','Ela','Elo','Ilith','Cele',
        ...COMMON_STARTS_HUMAN  // reusing the nicer vowel-heavy bits
      ],
      middle: [
        'l','r','th','n','m','hl','ll','nd','v','s','h','nor','mar','riel','thel','ien','ion','ith',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'dor','drel','ion','ien','ar','eth','ir','ael','or','is','uil','oth',
        'ion','riel','thir','dil','las','mir','anor','las','dir',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Aela','Ca','Eli','Fae','Ga','Lae','Na','Ola','Sa','Tha','Syl','Luth','Nyme',
        'Cele','Lora','Mira','Nim','Shya',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'l','r','th','n','m','ll','s','h','ni','ri','li','mir','wyn','riel','loth','neth',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'na','neth','riel','wyn','thiel','lune','rith','sira','reth',
        'lith','wen','mir','driel','iel','wen','quil',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  dwarf: {
    male: {
      start: [
        'Bal','Bar','Dor','Dur','Gar','Har','Kor','Mor','Nor','Rag','Thar','Ulf','Vor',
        'Brom','Brun','Thrain','Throm','Udor','Kaz','Rurik','Thorg','Magni',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','o','u','ar','or','ur','an','un','im','dr','gr','br','th','ul','dur','grim','grom',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'in','grim','gar','dun','rin','drum','rik','mund','rak','gran','grom','dok','stone',
        'fur','garn','kuld','mir','nar',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'An','Bar','Brun','Dae','Hel','Kil','Mor','Ris','Tor','Vis','Bryn','Frin',
        'Hild','Sign','Ragn','Gunn',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','i','o','un','im','or','ur','dr','gr','br','ild','gunn',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ra','rin','deth','gunn','hild','lin','drin','la','grin','dis','grette',
        'gurd','hildr','run','dottir',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  halfling: {
    male: {
      start: [
        'Al','Be','Ca','El','Fin','Gar','Lin','Mer','Per','Re','Ros','Err','Ly',
        'Pip','Merr','Bram','Tob','Sam','Bil','Hob','Will','Ned',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'lo','li','ri','ro','da','di','ni','no','mi','br','bb','pp','bo','do','fo',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'n','o','y','ric','rin','ry','wick','ton','foot','bur','burr','wise','bottle','kettle',
        'leaf','hill','brook',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'An','Bree','Cal','Kit','Lav','Mer','Ned','Pae','Ser','Try','Va',
        'Poppy','Rosie','Daisy','Mina','Tilda','Lottie',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','i','o','ia','li','ri','na','pp','mm','ss','ll',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'la','na','ria','belle','liana','wyn','lina','rose','bottle','bramble','berry',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  dragonborn: {
    male: {
      start: [
        'Ar','Bal','Dar','Ghe','Kri','Med','Pan','Rho','Sha','Tar','Tor',
        'Vor','Zar','Rhag','Kriv','Rhog','Serg','Vyth','Rhaz','Azhar',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'j','l','r','s','th','n','m','dr','kr','zh','vyr','rax',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'han','asar','rash','aar','esh','ith','onar','ador','arin','azar','drith',
        'vash','dros','rion',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Ak','Bi','Daar','Far','Har','Je','Ka','Na','Rai','So','Tha',
        'Rhys','Sora','Zara','Axia','Iris','Saph','Tia','Xira',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','i','or','ir','ur','ss','rz','zy','th',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ra','la','ria','nna','thra','sha','sira','zara','nyss','xis',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  gnome: {
    male: {
      start: [
        'Al','Bod','Broc','Dim','Fon','Frug','Ger','Gim','Glim','Kel','Nam','Or','Roon','Zook',
        'Bodd','Nib','Pip','Wizzle','Fizz','Whim','Tink','Rizz','Fleck',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'o','i','a','u','el','en','an','im','ip','op','bodd','wizz','tink',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ston','dyn','wick','pin','dle','bin','lin','min','boddle','whistle','spark',
        'sprung','fuse','cog','sprocket',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Bimp','Bree','Cara','Elly','Lilli','Loop','Lori','Nis','Nyx','Oda','Sha','Way',
        'Tilla','Poppy','Mina','Wenna','Tibby','Fizzi',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'a','e','i','o','y','el','en','in','ip','op','ibb','belle',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'nottin','na','mip','lin','ella','wicket','wyn','belle','sparkle','twist',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  "half-elf": {
    male: {
      start: [
        'Al','Cae','El','Fen','Ga','Lar','Mer','Val','Xan',
        'Arel','Daen','Faen','Leth','Raen',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'd','dr','l','r','n','v','th','ian','iel','el','ar','os',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ric','len','drin','ion','ar','en','ian','or','riel','vain',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Ales','Brie','Ce','Ela','Fae','Gwy','Iso','Kei','Lore','Rowe','Sere',
        'Mira','Syla','Naela','Thia','Vala',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'l','r','n','th','ll','iel','wen','ar','el',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ia','elle','eth','wen','rine','lith','lyn','is','ira','elleth',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  "half-orc": {
    male: {
      start: [
        'Den','Fen','Gel','Henk','Keth','Kru','Mhurr','Ront','Thok','Grom','Ur',
        'Brak','Dorg','Hruk','Krug','Grash','Dorn',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'g','rk','rg','kk','lg','rm','rn','sh','zg','gr','sk',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ar','og','ash','rug','mok','gor','dush','gash','zug','garn','rag',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Bag','Em','Eng','Kan','My','Nee','Shau','Su','Vo','Ush',
        'Grak','Brug','Krisha','Ugra','Morg',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'g','rk','rg','sh','lg','rm','zz','zg','gr','sk',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ra','ga','sha','dra','gora','mira','nash','gra','gash','drah',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  tiefling: {
    male: {
      start: [
        'Ak','Am','Bar','Da','Eke','Ia','Kai','Leu','Me','Mor','Ska','The',
        'Zar','Mal','Vor','Xer','Az','Dev','Luc','Rav','Zev',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'm','n','r','l','v','th','zz','sph','zhar','zor','zar',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'enos','non','akas','makos','emon','ron','dai','aios','zeus','xus','ziah',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Ak','Ana','Bry','Cri','Da','Kal','Le','Ma','Ne','Phe','Rie',
        'Zel','Zar','Sera','Lyx','Vexa','Nyx',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'm','n','r','l','v','th','ss','z','zh','vash','zor',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ta','kis','seis','ella','ia','ira','essa','aia','zila','ziah',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  orc: {
    male: {
      start: [
        'Gro','Thra','Ur','Dur','Bru','Ghar','Mor','Throk','Drog','Rog','Zu',
        'Grum','Ugar','Thruk','Brak','Uruk','Gromm',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'k','g','gr','rg','mz','rr','sk','zg','gl','gh','kr',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'nak','goth','zug','dush','mok','gar','thak','nosh','grak','zug','grod',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Bagh','Gra','Mug','Sha','Ur','Vor','Yar','Zug','Mur',
        'Grish','Brug','Ugra','Magh','Hrog',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'g','gr','rg','rr','zg','sk','gh','kr',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ra','ga','sha','dra','gora','nash','gra','gash','grun',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  goblin: {
    male: {
      start: [
        'Boo','Dro','Gri','Ix','Kren','Nix','Rat','Snig','Tar','Vrek','Zik',
        'Skrit','Skab','Grib','Nib','Grek','Skug',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'y','i','a','o','ix','rik','nag','grub','snag','skit','skab',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'g','zit','nix','grub','snag','dak','gob','gitz','muck','sniff','snap',
        ...COMMON_ENDS_HUMAN
      ]
    },
    female: {
      start: [
        'Bl','Dr','Fl','Gr','Kr','Pl','Sn','Tr','V','Z',
        'Skri','Nib','Zib','Gri','Pli',
        ...COMMON_STARTS_HUMAN
      ],
      middle: [
        'i','e','y','ri','li','ni','zz','sk','gn','gr',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'x','z','ik','rix','nix','vix','zix','gix','pix','snap',
        ...COMMON_ENDS_HUMAN
      ]
    },
    neutral: null
  },

  tabaxi: {
    phrase: {
      firstPart: [
        'Cloud','Five','Jade','Left-Handed','Seven','Skirt of','Smoking',
        'Copper','Golden','Swift','Silent','Hidden','Dancing','Fading',
        'Moon','Star','Shadow','Whispering','Soft','Bright','Flickering',
        'Running','Falling','Sleeping','Wandering','Laughing','Leaping'
      ],
      secondPart: [
        'on the Mountaintop','Timber','Shoe','Hummingbird','Thunderclouds',
        'Snakes','Mirror','Fang','Eye','Wind','Whisker','Paw','Leaf','Shadow',
        'Rain','Sunset','Storms','Grasses','Reeds','Puddles','Rivers','Sands'
      ]
    }
  },

  kenku: {
    sound: {
      first: [
        'Whisper','Shadow','Echo','Mimic','Scratch','Chime','Rattle','Croak',
        'Caw','Screech','Chirp','Click','Rustle','Drip','Tapping','Flicker',
        'Buzz','Rasp','Thump','Clack','Knock','Scratch',
      ],
      second: [
        'of Crows','in the Alley','Under Eaves','in the Dark','on Stone',
        'on Glass','of Feathers','of Chains','of Storms','of Dust',
        'in the Market','at Dawn','at Dusk','in the Trees','by the River'
      ]
    }
  },

  lizardfolk: {
    core: {
      start: [
        'Ar','As','Gar','Jh','Ke','Irk','Ko','Sul','Thro','Vrt','Ves','Ssk','Saur',
        'Kraz','Ssil','Thrax','Vorr','Iss','Ssz','Krass','Vesz'
      ],
      middle: [
        'th','ss','rk','sk','r','z','rr','rz','lk','ssr','zk',
        ...COMMON_MIDDLES_HUMAN
      ],
      end: [
        'ath','is','ar','ik','os','uth','ash','iss','oth','rax','sith','azk',
        ...COMMON_ENDS_HUMAN
      ]
    }
  }
};

/*
  SURNAME RULES (Option B: only “surname races” get them)
*/

const surnameRules = {
  human: {
    start: [
      'Bright','Brown','Brush','Camp','Canyon','Cricket','Cross','Desert','Dune',
      'Fair','Far','Field','Flint','Forest','Gold','Golden','Green','Grey','Hazel',
      'Hill','Iron','Lake','Marsh','Meadow','Miller','Oak','Plain','Raven','Red',
      'River','Rock','Shadow','Silver','Spring','Star','Steel','Stone','Storm',
      'Summer','Sun','Swift','Thorn','Valley','Walker','West','White','Winter','Wood',
      'Ash','Ember','Ever','Fox','Hearth','Hunter'
    ],
    end: [
      'bloom','bourne','branch','bridge','brook','brow','bury','castle','crest','croft',
      'dale','fall','field','ford','gate','grove','hall','ham','harbor','harrow',
      'hart','haven','hill','hold','holm','hurst','keep','land','leigh','man',
      'mere','moor','mont','more','ridge','son','stead','stone','thorn','vale',
      'ward','water','way','well','wick','win','wood','wright','wynd','worthy',
      'wall','wallis'
    ]
  },
  elf: {
    start: [
      'Amber','Autumn','Birch','Bright','Celestial','Dawn','Dew','Even',
      'Ever','Fern','Glitter','Golden','Green','Ivy','Lake','Leaf','Lumen','Maple',
      'Meadow','Moon','Morning','Moss','Night','Petal','Quiet','River','Rowan','Silver',
      'Soft','Song','Star','Starlit','Sun','Thistle','Twilight','Willow','Wind','Winter',
      'Whisper','Thorn','Mist','Glimmer','Velvet','Cloud'
    ],
    end: [
      'bloom','branch','bringer','brook','caller','dancer','dew','fall','feather',
      'flower','gale','glade','gleam','glow','leaf','light','mist','petal','runner',
      'shade','shadow','shimmer','singer','sky','song','spring','star','stream','thorn',
      'trail','vale','walker','watcher','weaver','whisper','wind','wing','wood','spire',
      'moon','grove','veil','breeze'
    ]
  },
  dwarf: {
    start: [
      'Amber','Anvil','Axeblade','Barrel','Battle','Bitter','Black','Bronze','Coal','Coalfire',
      'Cold','Deep','Earth','Ember','Fire','Flint','Forge','Granite','Gravel','Grim',
      'Hard','Iron','Marble','Mithril','Mountain','Oaken','Ore','Red','Rock','Rough',
      'Rum','Rune','Silver','Steel','Stone','Storm','Strong','Thunder','Under','Ale',
      'Hammer','Boulder','Deepdelve','Gold'
    ],
    end: [
      'anvil','axe','back','beard','bellow','binder','born','breaker','brand','brew',
      'brok','brother','delver','digger','fist','forge','hammer','hand','heart','helm',
      'hide','keeper','mantle','maul','miner','shield','shaper','smith','spine','splitter',
      'steel','stone','striker','ward','watcher','whisper','tankard','thane','deep','helm',
      'sunder','pick','ironfoot'
    ]
  },
  halfling: {
    start: [
      'Apple','Barrel','Berry','Big','Brandy','Bright','Brush','Burrow','Button','Cherry',
      'Clover','Copper','Dale','Feather','Fen','Field','Good','Green','Hay','Hill',
      'Meadow','Merry','Moss','Oat','Quick','Rain','Reed','River','Small','Sunny',
      'Tea','Thistle','Thresh','Under','Weather','Willow','Proud','Short','Tobacco','Pipe'
    ],
    end: [
      'barrel','bottle','brook','brow','bury','burrow','button','cart','cloak','comb',
      'cup','delve','drop','field','foot','gate','leaf','lock','man','pipe',
      'root','song','spoon','step','stock','stone','stream','topple','ward','water',
      'way','well','whistle','wick','willow','wind','worthy','wright','crumb','kettle',
      'mug','tumbler'
    ]
  },
  dragonborn: {
    start: [
      'Akra','Balcon','Cleth','Daardendrian','Delmirev','Drache','Drak','Drath','Fenken',
      'Flame','Gem','Gesh','Heat','Ingeir','Keothi','Medrash','Mishann','Myastan','Nadarr',
      'Night','Pyre','Qyint','Raenar','Rivaan','Sear','Skler','Storm','Thava','Twice',
      'Vadakarr','Verthis','Vor','Zephyr','Ignis','Ash','Cinder','Obsidian','Scorch','Vulkar'
    ],
    end: [
      'aar','ar','anth','axen','bor','dan','drache','drath','fang','fire',
      'flare','flame','guard','hand','heart','horn','irax','keeper','keth','kindle',
      'kran','mar','moon','scale','scales','sear','shard','smoke','spire','star',
      'storm','strike','tail','thane','thorn','thrax','tongue','wing','wrath','brand',
      'claw','ember','gaze','roar'
    ]
  },
  gnome: {
    start: [
      'Baff','Barrel','Bimp','Bottle','Bright','Bumble','Cog','Copper','Dabble','Dapple',
      'Fidget','Fizz','Flip','Glitter','Knack','Nackle','Nickel','Nimble','Noodle','Odd',
      'Pickle','Pip','Pocket','Quill','Quick','Rivet','Rusty','Scribble','Sprocket','Thimble',
      'Tinker','Waggle','Whistle','Wiggle','Wobble','Zibble','Brass','Sprinkle','Boddle','Glim'
    ],
    end: [
      'bottle','brass','buckle','crank','dabble','dash','fidget','fingers','fizz','flask',
      'flint','foot','fuse','gear','gem','gleam','glimmer','glitter','knack','lock',
      'needle','nook','penny','pipe','pocket','polish','rocket','rumple','snap','spark',
      'sprocket','stone','thread','tinker','top','twist','whistle','widget','wiggle','works',
      'wrinkle','whim','wrench','geargrip'
    ]
  },
  "half-elf": {
    start: [
      'Bright','Fair','Grey','Moon','River','Silver','Star','Willow','Autumn','Dawn',
      'Even','Fern','Green','Ivy','Lake','Leaf','Meadow','Night','Rowan','Soft',
      'Spring','Summer','Thorn','Twilight','Vale','Winter','Ash','Briar','Cloud','Elm',
      'Frost','Glen','Lark','Moss','Oak','Petal','Reed','Song','Storm','Sun'
    ],
    end: [
      'wood','wind','thorne','fall','shade','brook','bloom','bough','branch','brook',
      'crest','dale','dancer','dew','feather','gale','glade','grove','hart','light',
      'mist','petal','runner','shadow','shimmer','song','star','stream','vale','walker',
      'watcher','weaver','whisper','willow','wing','breeze','river','hearth','thorn','ridge'
    ]
  },
  "half-orc": {
    start: [
      'Blood','Skull','Iron','War','Bone','Red','Black','Battle','Blight','Brute',
      'Cold','Dark','Fang','Foe','Gore','Grim','Grisly','Hack','Hard','Maim',
      'Night','Rage','Razor','Rend','Rot','Scar','Shield','Skewer','Steel','Storm',
      'Stone','Tusk','Wrath','Crag','Doomborn','Gnash','Grudge','Marrow','Spike','Thorn'
    ],
    end: [
      'fist','crusher','jaw','heart','rend','breaker','bane','biter','blood','born',
      'brand','cleaver','cutter','fang','gore','grin','gut','hammer','hand','hide',
      'killer','maw','scar','scream','splitter','sunder','thirst','tooth','tusk','walker',
      'wound','wrecker','wrath','scarer','skull','gash','mauler','pike','cleft','scarborn'
    ]
  },
  tiefling: {
    virtue: [
      'Art','Ambition','Agony','Ash','Bane','Bliss','Carrion','Chant','Charity','Cinder',
      'Courage','Cruelty','Despair','Desire','Destiny','Dread','Ecstasy','Envy','Excellence',
      'Fear','Ferocity','Fortune','Glory','Grief','Hate','Hope','Honor','Joy','Justice',
      'Lament','Mercy','Misery','Nemesis','Passion','Penance','Pleasure','Pride','Promise',
      'Rapture','Reckoning','Redemption','Regret','Reverence','Revelry','Revenge','Ruin',
      'Sorrow','Temperance','Torment','Valor','Vice','Virtue','Wrath','Zeal','Silence','Sin',
      'Grace','Omen','Echo','Fury'
    ]
  },
  orc: {
    start: [
      'Blood','Bone','War','Skull','Iron','Black','Doom','Rage','Gore','Battle',
      'Brute','Crag','Dark','Death','Fang','Fire','Grim','Grisly','Hack','Hard',
      'Maim','Night','Rot','Scar','Shield','Skewer','Spike','Stone','Storm','Tusk',
      'Wrath','Ash','Blight','Boulder','Crush','Drake','Grudge','Marrow'
    ],
    end: [
      'crusher','fang','breaker','maw','scar','gore','sunder','fury','cleaver','chopper',
      'claw','club','eater','gash','gloom','goreborn','guts','hack','howl','killer',
      'mauler','scarer','skull','slayer','smash','splitter','thirst','tooth','tusk','war',
      'wrath','wrecker','rend','scarbrand','skullsplitter','doom','mawborn'
    ]
  },
  goblin: {
    start: [
      'Back','Blight','Bog','Bug','Chitter','Filth','Flea','Grime','Grub','Grumble',
      'Itch','Knob','Muck','Mud','Nib','Nose','Pox','Quick','Rag','Rat',
      'Rot','Rubble','Rust','Scab','Scrap','Scribble','Scruff','Skitter','Snipe','Snot',
      'Snuff','Spit','Stench','Stitch','Stump','Tatter','Twitch','Warp','Wort','Wretch'
    ],
    end: [
      'bite','blister','bolt','bottle','catcher','claw','crumb','cut','dribble','fang',
      'fingers','fling','grin','grip','gut','hook','itch','jaw','knee','lick',
      'nose','patch','pike','pocket','scar','scratch','scrap','snag','snap','sniff',
      'snout','spark','spit','stabber','stick','stitch','strap','tooth','tongue','wart',
      'whisker','whistle','wrench','wriggle'
    ]
  }
};

/* -------- Name generation -------- */

function getGender(g) {
  if (g === "any") return pick(["male","female","neutral"]);
  return g;
}

function generateFirstName(race, gender) {
  const g = getGender(gender);

  if (race === "tabaxi") {
    const p = syllableRules.tabaxi.phrase;
    return pick(p.firstPart) + " " + pick(p.secondPart);
  }
  if (race === "kenku") {
    const p = syllableRules.kenku.sound;
    return pick(p.first) + " " + pick(p.second);
  }
  if (race === "lizardfolk") {
    const c = syllableRules.lizardfolk.core;
    let name = pick(c.start);
    if (Math.random() < 0.7) name += pick(c.middle);
    if (Math.random() < 0.3) name += pick(c.middle);
    name += pick(c.end);
    return name;
  }

  const base = syllableRules[race] || syllableRules.human;
  let rules = base[g] || base.male;

  if (g === "neutral" && base.male && base.female) {
    rules = {
      start: [...base.male.start, ...base.female.start],
      middle: [...base.male.middle, ...base.female.middle],
      end: [...base.male.end, ...base.female.end]
    };
  }

  const { start, middle, end } = rules;

  let name = pick(start);
  if (Math.random() < 0.7) name += pick(middle);
  if (Math.random() < 0.4) name += pick(middle);
  name += pick(end);

  if (['elf','tiefling','dragonborn','half-elf'].includes(race) &&
      Math.random() < 0.22) {
    const i = Math.floor(Math.random() * (name.length - 2)) + 1;
    name = name.slice(0, i) + "'" + name.slice(i);
  }

  return name;
}

function generateSurname(race) {
  if (['tabaxi','kenku','lizardfolk'].includes(race)) return "";
  const r = surnameRules[race] || surnameRules.human;
  if (r.virtue) return pick(r.virtue);
  return pick(r.start) + pick(r.end);
}

/* -------- Save / load -------- */

function loadSaved() {
  return JSON.parse(localStorage.getItem("savedNames") || "[]");
}

function saveList(arr) {
  localStorage.setItem("savedNames", JSON.stringify(arr));
}

function renderSaved() {
  const savedDiv = document.getElementById("savedList");
  savedDiv.innerHTML = "";
  const saved = loadSaved();

  saved.forEach((nm, idx) => {
    const div = document.createElement("div");
    div.className = "saved-item";

    const span = document.createElement("span");
    span.textContent = nm;

    const removeBtn = document.createElement("button");
    removeBtn.className = "btn-small";
    removeBtn.textContent = "Delete";
    removeBtn.onclick = () => {
      const arr = loadSaved();
      arr.splice(idx, 1);
      saveList(arr);
      renderSaved();
    };

    div.appendChild(span);
    div.appendChild(removeBtn);
    savedDiv.appendChild(div);
  });
}

function saveName(nm) {
  const arr = loadSaved();
  if (!arr.includes(nm)) {
    arr.push(nm);
    saveList(arr);
    renderSaved();
  }
}

/* -------- Generate (reroll unsaved only) -------- */

function generateNames() {
  const count = parseInt(document.getElementById("count").value) || 10;
  const race = document.getElementById("race").value;
  const gender = document.getElementById("gender").value;
  const includeSurname = document.getElementById("surname").checked;

  const list = document.getElementById("namesList");
  list.innerHTML = "";

  const saved = loadSaved();

  for (let i = 0; i < count; i++) {
    let name;

    if (saved[i]) {
      name = saved[i];
    } else {
      const first = generateFirstName(race, gender);
      const last = includeSurname ? generateSurname(race) : "";
      name = last ? `${first} ${last}` : first;
    }

    const div = document.createElement("div");
    div.className = "name-item";

    const span = document.createElement("span");
    span.textContent = name;

    const saveBtn = document.createElement("button");
    saveBtn.className = "btn-small";
    saveBtn.textContent = "Save";
    saveBtn.onclick = () => saveName(name);

    const copyBtn = document.createElement("button");
    copyBtn.className = "btn-small";
    copyBtn.textContent = "Copy";
    copyBtn.onclick = () => navigator.clipboard.writeText(name);

    div.appendChild(span);
    div.appendChild(saveBtn);
    div.appendChild(copyBtn);

    list.appendChild(div);
  }
}

function clearResults() {
  document.getElementById("namesList").innerHTML = "";
}

renderSaved();