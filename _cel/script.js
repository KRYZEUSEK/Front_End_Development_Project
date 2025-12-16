/* Chara Generator script
 - Language (pl/en)
 - Theme (system/light/dark/colorblind)
 - Ambient forest effects toggle
 - Save character (localStorage + cookie fallback)
 - Export / import .txt
 - Live preview
 - D&D 5e helpers (modifiers, point-buy)
*/

(() => {

  /* ---------- utilities ---------- */
  function setCookie(name, value, days = 365) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const pair = document.cookie.split('; ').find(row => row.startsWith(encodeURIComponent(name) + '='));
    return pair ? decodeURIComponent(pair.split('=')[1]) : null;
  }

  function delCookie(name) {
    document.cookie = `${encodeURIComponent(name)}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
  }

  function sanitizeFilename(s) {
    return s.replace(/\s+/g, '_').replace(/[^\w\.-ąćęłńóśżźĄĆĘŁŃÓŚŻŹ-]/g, '');
  }

  function abilityModifier(score) {
    return Math.floor((score - 10) / 2);
  }

  function pointBuyCost(score) {
    const costs = { 8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9 };
    return costs[score] ?? 0;
  }

  /* ---------- translations ---------- */
  const T = {
    pl: {
      title: "Kreator postaci",
      subtitle: "Stwórz postać — zapisz, wyeksportuj lub zaimportuj.",
      legendBasic: "Podstawowe",
      legendStats: "Statystyki",
      legendExtra: "Dodatkowe",
      saveLocal: "Zapisz lokalnie",
      export: "Eksportuj",
      import: "Importuj",
      reset: "Resetuj",
      previewTitle: "Podgląd postaci",
      ambient: "Efekty ambientowe"
    },
    en: {
      title: "Character Creator",
      subtitle: "Create a character — save, export or import.",
      legendBasic: "Basic",
      legendStats: "Statistics",
      legendExtra: "Extra",
      saveLocal: "Save locally",
      export: "Export",
      import: "Import",
      reset: "Reset",
      previewTitle: "Character Preview",
      ambient: "Ambient effects"
    }
  };

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    const root = document.documentElement;
    root.classList.remove('dark','colorblind');
    if (theme === 'system' || !theme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) root.classList.add('dark');
    } else if (theme === 'dark') root.classList.add('dark');
    else if (theme === 'colorblind') root.classList.add('colorblind');
    setCookie('cg_theme', theme);
  }

  function getSavedTheme() {
    return getCookie('cg_theme') || 'system';
  }

  /* ---------- ambient ---------- */
  function applyAmbient(enabled) {
    document.documentElement.classList.toggle('ambient', enabled);
    setCookie('cg_ambient', enabled ? '1' : '0');
  }

  function getAmbient() {
    return getCookie('cg_ambient') === '1';
  }

  /* ---------- language ---------- */
  function detectLang() {
    return getCookie('cg_lang') ||
      ((navigator.language || 'pl').startsWith('en') ? 'en' : 'pl');
  }

  function applyLanguage(lang) {
    const s = T[lang] || T.pl;
    document.getElementById('page-title')?.textContent = s.title;
    document.getElementById('subtitle')?.textContent = s.subtitle;
    document.getElementById('legend-basic')?.textContent = s.legendBasic;
    document.getElementById('legend-stats')?.textContent = s.legendStats;
    document.getElementById('legend-extra')?.textContent = s.legendExtra;
    document.getElementById('saveLocal')?.textContent = s.saveLocal;
    document.getElementById('exportBtn')?.textContent = s.export;
    document.getElementById('resetBtn')?.textContent = s.reset;
    document.getElementById('previewTitle')?.textContent = s.previewTitle;
    document.getElementById('ambientLabel')?.textContent = s.ambient;
    document.documentElement.lang = lang;
    setCookie('cg_lang', lang);
  }

  window.initGeneratorPage = function() {

    /* ---------- elements ---------- */
    const form = document.getElementById('chara-form');
    const langSelect = document.getElementById('lang-select');
    const themeSelect = document.getElementById('theme-select');
    const ambientToggle = document.getElementById('ambientToggle');

    const fields = {
      firstName: document.getElementById('firstName'),
      lastName: document.getElementById('lastName'),
      race: document.getElementById('raceSelect'),
      customRace: document.getElementById('customRace'),
      age: document.getElementById('age'),
      height: document.getElementById('height'),
      weight: document.getElementById('weight'),
      alignment: document.getElementById('alignment'),
      notes: document.getElementById('notes'),
      stats: ['str','dex','con','int','wis','cha']
    };

    const preview = document.getElementById('preview');
    const saveBtn = document.getElementById('saveLocal');
    const exportBtn = document.getElementById('exportBtn');
    const importFile = document.getElementById('importFile');
    const resetBtn = document.getElementById('resetBtn');

    /* ---------- init ---------- */
    const lang = detectLang();
    applyLanguage(lang);
    langSelect.value = lang;
    themeSelect.value = getSavedTheme();
    applyTheme(themeSelect.value);

    if (ambientToggle) {
      ambientToggle.checked = getAmbient();
      applyAmbient(ambientToggle.checked);
    }

    langSelect.addEventListener('change', e => applyLanguage(e.target.value));
    themeSelect.addEventListener('change', e => applyTheme(e.target.value));
    ambientToggle?.addEventListener('change', e => applyAmbient(e.target.checked));

    /* ---------- save / load ---------- */
    function saveCharacter(obj) {
      localStorage.setItem('cg_chara', JSON.stringify(obj));
      setCookie('cg_chara', JSON.stringify(obj), 365);
      notice("Character saved.");
    }

    function loadCharacter() {
      const raw = localStorage.getItem('cg_chara') || getCookie('cg_chara');
      if (!raw) return null;
      try { return JSON.parse(raw); }
      catch { return null; }
    }

    /* ---------- build object ---------- */
    function buildCharacterObject() {
      const stats = {};
      fields.stats.forEach(k => stats[k.toUpperCase()] = Number(document.getElementById(k).value));
      return {
        firstName: fields.firstName.value,
        lastName: fields.lastName.value,
        race: fields.race.value === 'Custom' ? fields.customRace.value : fields.race.value,
        age: fields.age.value,
        height: fields.height.value,
        weight: fields.weight.value,
        alignment: fields.alignment.value,
        notes: fields.notes.value,
        stats,
        savedAt: new Date().toISOString()
      };
    }

    /* ---------- preview ---------- */
    function updatePreview() {
      const c = buildCharacterObject();
      let pb = 0;
      let out = `Name: ${c.firstName} ${c.lastName}\nRace: ${c.race}\n\nStats:\n`;
      for (const [k,v] of Object.entries(c.stats)) {
        pb += pointBuyCost(v);
        const m = abilityModifier(v);
        out += ` ${k}: ${v} (${m>=0?'+':''}${m})\n`;
      }
      out += `\nPoint Buy: ${pb}/27\n\nNotes:\n${c.notes || '(none)'}`;
      preview.textContent = out;
    }

    form.querySelectorAll('input,textarea,select').forEach(e =>
      e.addEventListener('input', updatePreview)
    );

    saveBtn.addEventListener('click', () => saveCharacter(buildCharacterObject()));
    exportBtn.addEventListener('click', () => {
      const c = buildCharacterObject();
      const text = preview.textContent;
      const blob = new Blob([text], {type:'text/plain'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = sanitizeFilename(`${c.firstName}_${c.lastName}_${c.race}.txt`);
      a.click();
    });

    resetBtn.addEventListener('click', () => {
      if (!confirm('Reset character?')) return;
      form.reset();
      localStorage.removeItem('cg_chara');
      delCookie('cg_chara');
      updatePreview();
    });

    /* ---------- load saved ---------- */
    const saved = loadCharacter();
    if (saved) {
      fields.firstName.value = saved.firstName || '';
      fields.lastName.value = saved.lastName || '';
      fields.age.value = saved.age || '';
      fields.height.value = saved.height || '';
      fields.weight.value = saved.weight || '';
      fields.alignment.value = saved.alignment || '';
      fields.notes.value = saved.notes || '';
      fields.stats.forEach(k => {
        if (saved.stats?.[k.toUpperCase()] !== undefined)
          document.getElementById(k).value = saved.stats[k.toUpperCase()];
      });
    }

    updatePreview();
  };

  function notice(text, t=2000) {
    const d = document.createElement('div');
    d.textContent = text;
    Object.assign(d.style, {
      position:'fixed',bottom:'12px',right:'12px',
      background:'rgba(0,0,0,.75)',color:'#fff',
      padding:'10px',borderRadius:'8px',zIndex:9999
    });
    document.body.appendChild(d);
    setTimeout(()=>d.remove(), t);
  }

})();
