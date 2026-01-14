/* ------------------------------
   GLOBAL MODE SWITCHER
------------------------------ */

let snowInterval = null; 
let rainInterval = null; 
let pollenInterval = null; 
let summerInterval = null; 
let autumnInterval = null; 
let valentineInterval = null; 

// Load mode on startup// 🎯 Determine season / holiday mode
function getSeasonMode() {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  // 🎃 Halloween (Oct 31)
  if (month === 9 && day === 31) return "halloween";

  // ❤️ Valentine’s Day (Feb 14)
  if (month === 1 && day === 14) return "valentine";

  // ❄️ Winter (Dec–Feb)
  if (month === 11 || month === 0 || month === 1) return "winter";

  // 🌸 Spring (Mar–May)
  if (month >= 2 && month <= 4) return "spring";

  // ☀️ Summer (Jun–Aug)
  if (month >= 5 && month <= 7) return "summer";

  // 🍂 Autumn (Sep–Nov)
  return "autumn";
}

document.addEventListener("DOMContentLoaded", () => {

  const seasonalMode = getSeasonMode();

  // 🎛 Season button emoji
  const seasonEmojis = {
    winter: "❄️",
    spring: "🌸",
    summer: "☀️",
    autumn: "🍂",
    valentine: "❤️",
    halloween: "🎃"
  };

  const seasonBtn = document.getElementById("season-btn");
  if (seasonBtn) {
    seasonBtn.textContent = seasonEmojis[seasonalMode];
  }

  // 💾 Respect saved mode first, otherwise use seasonal
  let savedMode = localStorage.getItem("uiMode");

  if (!savedMode) {
    savedMode = seasonalMode;
    localStorage.setItem("uiMode", savedMode);
  }

  setMode(savedMode);
});



/* ------------------------------
   Video + Sound
------------------------------ *//* ------------------------------
   Audio (Local Files)
------------------------------ */

const audioPlayer = new Audio();
audioPlayer.loop = true;
audioPlayer.volume = 0.7; // default

function handleModeAudio(mode) {
  let src = "";
  let volume = 0.7;

  switch (mode) {
    case "dark":
      src = "audio/dark.ogg";
      volume = 0.4;
      break;

    case "colorblind":
      src = "audio/light.ogg";
      volume = 0.15;
      break;

    case "halloween":
      src = "audio/dark.ogg";
      volume = 0.7;
      break;

    case "rain":
      src = "audio/rain.ogg";
      volume = 0.2;
      break;

    case "winter":
      src = "audio/snow.ogg";
      volume = 0.3;
      break;

    default: // light
      src = "audio/light.ogg";
      volume = 0.2;
      break;
  }

  if (audioPlayer.src !== location.origin + "/" + src) {
    audioPlayer.src = src;
  }

  audioPlayer.volume = volume;
  audioPlayer.play().catch(() => {
    // Autoplay blocked until user interacts
    console.warn("Audio playback blocked until user interaction");
  });
}


/* ------------------------------
   MODE + LANGUAGE
------------------------------ */

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);

  loadFromLocal();
  updatePreview();
});


function setMode(mode) {
  const root = document.documentElement;

  root.classList.remove(
    "light-mode",
    "dark-mode",
    "rain-mode",
    "spring-mode",
    "summer-mode",
    "autumn-mode",
    "valentine-mode",
    "halloween-mode",
    "colorblind-mode",
    "winter-mode"
  );

  if (mode === "dark") root.classList.add("dark-mode");
  else if (mode === "colorblind") root.classList.add("colorblind-mode");
  else if (mode === "halloween") root.classList.add("halloween-mode");
  else if (mode === "rain") {
    root.classList.add("rain-mode");
    startRain();
  } else if (mode === "winter") {
    root.classList.add("winter-mode");
    startSnow();
  } else if (mode === "spring") {
    root.classList.add("spring-mode");
    startSpring();
  } else if (mode === "summer") {
    root.classList.add("summer-mode");
    startSummer();
  } else if (mode === "autumn") {
    root.classList.add("autumn-mode");
    startAutumn();
  } else if (mode === "valentine") {
    root.classList.add("valentine-mode");
    startValentine();
  } else {
    root.classList.add("light-mode");
  }

  if (mode !== "winter") stopSnow();
  if (mode !== "rain") stopRain();
  if (mode !== "spring") stopSpring();
  if (mode !== "autumn") stopAutumn();
  if (mode !== "valentine") stopValentine();
  if (mode !== "summer") stopSummer();

  localStorage.setItem("uiMode", mode);
  handleModeAudio(mode);
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  if (typeof setLang === "function") setLang(lang);
}

/* ------------------------------
   CHARACTER DATA HANDLING
------------------------------ */

const form = document.getElementById("chara-form");
const preview = document.getElementById("preview");

/* Collect all data */
function getCharacterData() {
  return {
    basic: {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      race:
        document.getElementById("raceSelect").value === "custom"
          ? document.getElementById("customRace")?.value || "Custom"
          : document.getElementById("raceSelect").value,
      alignment: document.getElementById("alignment").value,
      class: document.getElementById("class").value,
      level: Number(document.getElementById("level").value)
    },

    stats: {
      str: Number(document.getElementById("str").value),
      dex: Number(document.getElementById("dex").value),
      con: Number(document.getElementById("con").value),
      int: Number(document.getElementById("int").value),
      wis: Number(document.getElementById("wis").value),
      cha: Number(document.getElementById("cha").value)
    },

    extra: {
      age: document.getElementById("age").value,
      sex: document.getElementById("sex").value,
      gender: document.getElementById("gender").value,
      height: document.getElementById("height").value,
      weight: document.getElementById("weight").value,
      notes: document.getElementById("notes").value
    }
  };
}

/* Apply data to form */
function setCharacterData(data) {
  // Basic info
  firstName.value = data.basic?.firstName || "";
  lastName.value = data.basic?.lastName || "";
  raceSelect.value = data.basic?.race || "Human";
  customRace.value = data.basic?.race || "";
  alignment.value = data.basic?.alignment || "";
  document.getElementById("class").value = data.basic?.class || "";
  document.getElementById("level").value = data.basic?.level || 1;

  // Stats
  if (data.stats) {
    str.value = data.stats.str || 0;
    dex.value = data.stats.dex || 0;
    con.value = data.stats.con || 0;
    int.value = data.stats.int || 0;
    wis.value = data.stats.wis || 0;
    cha.value = data.stats.cha || 0;
  }

  // Extra info
  age.value = data.extra?.age || "";
  height.value = data.extra?.height || "";
  weight.value = data.extra?.weight || "";
  sex.value = data.extra?.sex || "";
  gender.value = data.extra?.gender || "";
  notes.value = data.extra?.notes || "";

  updatePreview();
}


/* ------------------------------
   SAVE / LOAD LOCALSTORAGE
------------------------------ */

document.getElementById("saveLocal").onclick = () => {
  localStorage.setItem("characterData", JSON.stringify(getCharacterData()));
  alert("Character saved!");
};

function loadFromLocal() {
  const data = localStorage.getItem("characterData");
  if (data) setCharacterData(JSON.parse(data));
}


/* ------------------------------
   EXPORT JSON
------------------------------ */

document.getElementById("exportBtn").onclick = () => {
  const blob = new Blob(
    [JSON.stringify(getCharacterData(), null, 2)],
    { type: "application/json" }
  );

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "character.json";
  a.click();
};

/* ------------------------------
   IMPORT JSON
------------------------------ */

document.getElementById("importBtn").onclick = () =>
  document.getElementById("importFile").click();

document.getElementById("importFile").addEventListener("change", e => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => setCharacterData(JSON.parse(reader.result));
  reader.readAsText(file);
});

/* ------------------------------
   RESET
------------------------------ */

document.getElementById("resetBtn").onclick = () => {
  if (!confirm("Reset character?")) return;
  form.reset();
  localStorage.removeItem("characterData");
  updatePreview();
};

/* ------------------------------
   PREVIEW
------------------------------ */

function updatePreview() {
  preview.textContent = JSON.stringify(getCharacterData(), null, 2);
}

form.addEventListener("input", updatePreview);

/* ------------------------------
   STAT VALIDATION
------------------------------ */

document.querySelectorAll("input[type=number]").forEach(input => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
  });
});

/* ------------------------------
   Season and weather Theme
------------------------------ */

function randomIceHex() {
  const t = Math.random();
  const r = Math.round(255 + t * (93 - 255));
  const g = Math.round(255 + t * (209 - 255));
  const b = Math.round(255 + t * (228 - 255));
  return `rgb(${r}, ${g}, ${b})`;
}

function startSnow() {
  const emojis = ['❄', '❅', '❆', '❃', '❈', '❉', '❊', '❋'];

  if (snowInterval !== null) return; // 🛑 already running

  snowInterval = setInterval(() => {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
    snowflake.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";
    snowflake.style.color = randomIceHex();

    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 8000);
  }, 300);
}

function startRain() {
  const emojis = ['|', '│', '|', '╵', '〡', '╹', '╻', '╷', '︲'];

  if (rainInterval !== null) return; // already running

  rainInterval = setInterval(() => {
    const raindrop = document.createElement("div");
    raindrop.className = "raindrop";
    raindrop.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    raindrop.style.left = Math.random() * 100 + "vw";
    raindrop.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";
    raindrop.style.color = randomIceHex();
    raindrop.style.opacity = 0.4; // 50% transparent

    // Randomize animation duration for variation
    const duration = 3 + Math.random() * 5;
    raindrop.style.animationDuration = duration + "s";

    document.body.appendChild(raindrop);

    // Remove after animation ends
    setTimeout(() => raindrop.remove(), duration * 1000);
  }, 100);
}

function randomPollenColor() {
  const colors = [
    "#f7e36a", // yellow pollen
    "#e8f5a2", // soft green
    "#ffd966", // warm spring gold
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function startSpring() {
  const particles = ["•", "·", "°", "✿", "❊", "🌸", "✾", "✽", "✿", "❀", "❁", "❃", "❊", "❋", "💮", "🏵️", "🌺", "☘"];

  if (pollenInterval !== null) return;

  pollenInterval = setInterval(() => {
    const pollen = document.createElement("div");
    pollen.className = "pollen";
    pollen.innerText = particles[Math.floor(Math.random() * particles.length)];
    pollen.style.left = Math.random() * 100 + "vw";
    pollen.style.animationDuration = 8 + Math.random() * 6 + "s";
    pollen.style.fontSize = 0.5 + Math.random() * 0.8 + "rem";
    pollen.style.color = randomPollenColor();

    document.body.appendChild(pollen);
    setTimeout(() => pollen.remove(), 14000);
  }, 450);
}
function startSummer() {
  if (summerInterval !== null) return;

  summerInterval = setInterval(() => {
    const firefly = document.createElement("div");
    firefly.className = "firefly";
    firefly.innerText = "•";
    firefly.style.left = Math.random() * 100 + "vw";
    firefly.style.top = 60 + Math.random() * 30 + "vh";
    firefly.style.fontSize = 0.4 + Math.random() * 0.6 + "rem";
    firefly.style.color = "rgba(255, 230, 150, 0.9)";
    firefly.style.animationDuration = 4 + Math.random() * 4 + "s";

    document.body.appendChild(firefly);
    setTimeout(() => firefly.remove(), 7000);
  }, 600);
}

function startAutumn() {
  const leaves = ["🍂", "🍁", "🍃"];

  if (autumnInterval !== null) return;

  autumnInterval = setInterval(() => {
    const leaf = document.createElement("div");
    leaf.className = "leaf-fall";
    leaf.innerText = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 6 + Math.random() * 6 + "s";
    leaf.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";

    document.body.appendChild(leaf);
    setTimeout(() => leaf.remove(), 12000);
  }, 500);
}

function startValentine() {
  const emojis = ['❤️','♥️', '❤️', '🩷', '💜', '🤍', '💖', '♥️', '💓', '💗', '🩷', '❤️', '💝', '💘', '❤️‍🔥', '♥️', '❤️‍🩹', '💕', '💕', '❣️', '💞', '🩷', '🩷', '❤️', '❤️'];

  if (valentineInterval !== null) return; // already running

  valentineInterval = setInterval(() => {
    const hearts = document.createElement("div");
    hearts.className = "hearts";
    hearts.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    hearts.style.left = Math.random() * 100 + "vw";
    hearts.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";
    hearts.style.color = randomIceHex();
    hearts.style.opacity = 0.2; // 20% transparent

    // Randomize animation duration for variation
    const duration = 3 + Math.random() * 10;
    hearts.style.animationDuration = duration + "s";

    document.body.appendChild(hearts);

    // Remove after animation ends
    setTimeout(() => hearts.remove(), duration * 1000);
  }, 100);
}


function stopSnow() {
  if (snowInterval === null) return;

  clearInterval(snowInterval);
  snowInterval = null;

  document.querySelectorAll(".snowflake").forEach(e => e.remove());
}


function stopRain() {
  if (rainInterval === null) return;

  clearInterval(rainInterval);
  rainInterval = null;

  document.querySelectorAll(".raindrop").forEach(e => e.remove());
}


function stopSpring() {
  if (pollenInterval === null) return;

  clearInterval(pollenInterval);
  pollenInterval = null;

  document.querySelectorAll(".pollen").forEach(e => e.remove());
}

function stopAutumn() {
  if (autumnInterval === null) return;

  clearInterval(autumnInterval);
  autumnInterval = null;

  document.querySelectorAll(".leaf").forEach(e => e.remove());
}

function stopSummer() {
  if (summerInterval === null) return;

  clearInterval(summerInterval);
  summerInterval = null;

  document.querySelectorAll(".firefly").forEach(e => e.remove());
}

function stopValentine() {
  if (valentineInterval === null) return;

  clearInterval(valentineInterval);
  valentineInterval = null;

  document.querySelectorAll(".hearts").forEach(e => e.remove());
}

function stopAllWeather() {
  clearInterval(snowInterval); snowInterval = null;
  clearInterval(pollenInterval); pollenInterval = null;
  clearInterval(summerInterval); summerInterval = null;
  clearInterval(autumnInterval); autumnInterval = null;
  clearInterval(valentineInterval); autumnInterval = null;

  document.querySelectorAll(
    ".snowflake, .pollen, .firefly, .leaf-fall, .raindrop, .hearts"
  ).forEach(el => el.remove());
}


/* ------------------------------
   Character Script
------------------------------ */

document.addEventListener('DOMContentLoaded', () => {
  const stats = ['str', 'dex', 'con', 'int', 'wis', 'cha'];
  const preview = document.getElementById('preview');

  const statsFieldset = document.querySelector('fieldset:nth-of-type(2)'); // Statistics fieldset

  // Mode definitions with translation keys for tooltips
  const modes = [
    { id: 'manual', textKey: 'manualMode', tooltipKey: 'manualTooltip' },
    { id: 'randomDrop', textKey: 'randomDropMode', tooltipKey: 'randomDropTooltip' },
    { id: 'randomAll', textKey: 'randomAllMode', tooltipKey: 'randomAllTooltip' },
    { id: 'pointBuy', textKey: 'pointBuyMode', tooltipKey: 'pointBuyTooltip' }
  ];

  // Create mode buttons container
  const modeContainer = document.createElement('div');
  modeContainer.style.display = 'flex';
  modeContainer.style.gap = '10px';
  modeContainer.style.marginBottom = '10px';

  const modeButtons = {};

  // Create buttons
  modes.forEach(mode => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.id = mode.id + 'Btn';
    btn.style.padding = '5px 10px';
    btn.style.cursor = 'pointer';
    btn.style.whiteSpace = 'nowrap';
    btn.addEventListener('click', () => switchMode(mode.id));
    modeContainer.appendChild(btn);
    modeButtons[mode.id] = btn;
  });

  statsFieldset.insertBefore(modeContainer, statsFieldset.firstChild);

  let currentMode = 'manual';
  let pointBuyPoints = 27;

  // --- MODE SWITCHING ---
  function switchMode(mode) {
    currentMode = mode;
    clearStatInputs();

    if (mode === 'manual') enableManual();
    else if (mode === 'randomDrop') randomizeStats(true);
    else if (mode === 'randomAll') randomizeStats(false);
    else if (mode === 'pointBuy') setupPointBuy();

    updatePreview();
  }

  function clearStatInputs() {
    stats.forEach(stat => {
      const input = document.getElementById(stat);
      input.value = '';
      input.disabled = false;
      input.style.backgroundColor = '';
      input.style.color = '';
      input.min = '';
      input.max = '';
      input.removeEventListener('input', handlePointBuy);
    });
  }

  // --- MANUAL ---
  function enableManual() {
    stats.forEach(stat => {
      const input = document.getElementById(stat);
      input.disabled = false;
      input.style.backgroundColor = '';
      input.style.color = '';
    });
  }

  // --- RANDOM ---
  function randomizeStats(dropLowest) {
    stats.forEach(stat => {
      const input = document.getElementById(stat);
      input.disabled = true;
      input.value = dropLowest ? rollStatDropLowest() : rollStatAll();
    });
  }

  function rollStatDropLowest() {
    let rolls = [];
    for (let i = 0; i < 4; i++) rolls.push(Math.floor(Math.random() * 6) + 1);
    rolls.sort((a, b) => a - b);
    rolls.shift();
    return rolls.reduce((a, b) => a + b, 0);
  }

  function rollStatAll() {
    let rolls = [];
    for (let i = 0; i < 3; i++) rolls.push(Math.floor(Math.random() * 6) + 1);
    return rolls.reduce((a, b) => a + b, 0);
  }

  // --- POINT BUY ---
  function setupPointBuy() {
    stats.forEach(stat => {
      const input = document.getElementById(stat);
      input.value = 8;
      input.min = 8;
      input.max = 15;
      input.disabled = false;
      input.style.backgroundColor = '';
      input.style.color = '';
      input.addEventListener('input', handlePointBuy);
    });
  }
  
function handlePointBuy(e) {
  const input = e.target; // the input that changed
  let val = parseInt(input.value) || 8;

  // Clamp to 8–15 for safety
  if (val < 8) val = 8;
  if (val > 15) val = 15;
  input.value = val;

  // Calculate total points spent
  let total = stats.reduce((sum, stat) => {
    const statVal = parseInt(document.getElementById(stat).value) || 8;
    return sum + pointBuyCost(statVal);
  }, 0);

  if (total > pointBuyPoints) {
    alert("No more points!"); // popup
    // Reset this input to a safe value (subtract one point)
    while (total > pointBuyPoints && val > 8) {
      val--;
      input.value = val;
      total = stats.reduce((sum, stat) => {
        const statVal = parseInt(document.getElementById(stat).value) || 8;
        return sum + pointBuyCost(statVal);
      }, 0);
    }
  }

  updatePreview();
}

  function pointBuyCost(value) {
    if (value < 8) return 0;
    if (value <= 13) return value - 8;
    if (value === 14) return 7;
    if (value === 15) return 9;
    return 0;
  }

  // --- PREVIEW ---
  function updatePreview() {
    const statValues = stats.map(stat => `${stat.toUpperCase()}: ${document.getElementById(stat).value}`);
    preview.textContent = statValues.join('\n');
  }

  stats.forEach(stat => {
    document.getElementById(stat).addEventListener('input', updatePreview);
  });

  // --- LANGUAGE COMPATIBILITY ---
  function updateModeButtonTexts() {
    const t = translations[localStorage.getItem('lang') || 'en'] || {};
    const tooltips = {
      manualTooltip: 'Type any number for stats',
      randomDropTooltip: 'Roll 4d6 and drop the lowest die',
      randomAllTooltip: 'Roll 3d6 sum all dice',
      pointBuyTooltip: 'Distribute 27 points using DnD point-buy rules'
    };

    // Set text and tooltips
    modeButtons.manual.textContent = t.manualMode || 'Manual';
    modeButtons.manual.title = t.manualTooltip || tooltips.manualTooltip;

    modeButtons.randomDrop.textContent = t.randomDropMode || 'Random (4d6 drop the lowest)';
    modeButtons.randomDrop.title = t.randomDropTooltip || tooltips.randomDropTooltip;

    modeButtons.randomAll.textContent = t.randomAllMode || 'Random (3d6)';
    modeButtons.randomAll.title = t.randomAllTooltip || tooltips.randomAllTooltip;

    modeButtons.pointBuy.textContent = t.pointBuyMode || 'Point Buy';
    modeButtons.pointBuy.title = t.pointBuyTooltip || tooltips.pointBuyTooltip;
  }

  // Update on page load
  updateModeButtonTexts();

  // Also update whenever language changes
  window.setLang = function(lang) {
    localStorage.setItem("lang", lang);
    const t = translations[lang] || {};

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key && t[key] !== undefined) el.textContent = t[key];
    });

    // Update tooltips
    updateModeButtonTexts();
  }

  // Initialize manual mode
  switchMode('manual');
});

/* Lanuage */


// Randomize First Name
document.getElementById("randomFirstBtn").addEventListener("click", () => {
  const race = document.getElementById("raceSelect").value;
  const gender = document.getElementById("gender").value;
  const firstName = generateFirstName(race, gender);
  document.getElementById("firstName").value = firstName;
  updatePreview(); // optional: update preview if you have it
});

// Randomize Last Name
document.getElementById("randomLastBtn").addEventListener("click", () => {
  const race = document.getElementById("raceSelect").value;
  const gender = document.getElementById("gender").value;
  const lastName = generateSurname(race, gender);
  document.getElementById("lastName").value = lastName;
  updatePreview(); // optional
});

