/* ------------------------------
   GLOBAL MODE SWITCHER
------------------------------ */

let snowInterval = null; 
let rainInterval = null; 

// Load mode on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uiMode") || "light";
  
    const now = new Date();
    const isWinter = now.getMonth() === 11 || now.getMonth() === 0 || now.getMonth() === 1;

    const winterBtn = document.getElementById("winter-btn");

    if (isWinter) {
      // Show winter button
      winterBtn.style.display = "inline-block";
		const savedMode = localStorage.getItem("uiMode") || "winter";
    }else{
		const savedMode = localStorage.getItem("uiMode") || "light";
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
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);

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
    "colorblind-mode",
    "winter-mode"
  );

  if (mode === "dark") root.classList.add("dark-mode");
  else if (mode === "colorblind") root.classList.add("colorblind-mode");
  else if (mode === "rain") {
    root.classList.add("rain-mode");
    startRain();
  } else if (mode === "winter") {
    root.classList.add("winter-mode");
    startSnow();
  } else {
    root.classList.add("light-mode");
  }

  if (mode !== "winter") stopSnow();
  if (mode !== "rain") stopRain();

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
  firstName.value = data.firstName || "";
  lastName.value = data.lastName || "";
  raceSelect.value = data.race || "Human";
  customRace.value = data.race || "";
  alignment.value = data.alignment || "";

  if (data.stats) {
    str.value = data.stats.str;
    dex.value = data.stats.dex;
    con.value = data.stats.con;
    int.value = data.stats.int;
    wis.value = data.stats.wis;
    cha.value = data.stats.cha;
  }

  age.value = data.age || "";
  height.value = data.height || "";
  weight.value = data.weight || "";
  notes.value = data.notes || "";

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
   Winter and Rain Theme
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

