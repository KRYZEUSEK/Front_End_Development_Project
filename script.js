/* Chara Generator script
 - Obsługa języka (pl/en)
 - Motyw (light/dark/colorblind/system)
 - Zapis postaci w cookie
 - Eksport / import pliku .txt
 - Podgląd
*/

(() => {
    // ----- utilities -----
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
  
    // ----- translations -----
    const T = {
      pl: {
        title: "Kreator postaci",
        subtitle: "Stwórz postać — zapisz, wyeksportuj lub zaimportuj.",
        legendBasic: "Podstawowe",
        legendStats: "Statystyki",
        legendExtra: "Dodatkowe",
        saveLocal: "Zapisz (cookie)",
        export: "Eksportuj (Pobierz)",
        import: "Importuj",
        reset: "Resetuj",
        previewTitle: "Podgląd postaci",
      },
      en: {
        title: "Character Creator",
        subtitle: "Create a character — save, export or import.",
        legendBasic: "Basic",
        legendStats: "Statistics",
        legendExtra: "Extra",
        saveLocal: "Save (cookie)",
        export: "Export (Download)",
        import: "Import",
        reset: "Reset",
        previewTitle: "Character Preview",
      }
    };
  
    // ----- theme handling -----
    function applyTheme(theme) {
      // theme: system/light/dark/colorblind
      const root = document.documentElement;
      root.classList.remove('dark','colorblind');
      if (theme === 'system' || !theme) {
        const preferDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (preferDark) root.classList.add('dark');
      } else if (theme === 'dark') {
        root.classList.add('dark');
      } else if (theme === 'colorblind') {
        root.classList.add('colorblind');
      }
      // save
      setCookie('cg_theme', theme);
    }
  
    function getSavedTheme() {
      return getCookie('cg_theme') || 'system';
    }
  
    // ----- language handling -----
    function detectLang() {
      const saved = getCookie('cg_lang');
      if (saved) return saved;
      const nav = navigator.languages && navigator.languages[0] || navigator.language || 'pl';
      return nav.startsWith('en') ? 'en' : 'pl';
    }
    function applyLanguage(lang) {
      // set elements text if present
      const strings = T[lang] || T.pl;
      document.getElementById('page-title')?.textContent = strings.title;
      document.getElementById('subtitle')?.textContent = strings.subtitle;
      document.getElementById('legend-basic')?.textContent = strings.legendBasic;
      document.getElementById('legend-stats')?.textContent = strings.legendStats;
      document.getElementById('legend-extra')?.textContent = strings.legendExtra;
      document.getElementById('saveLocal')?.textContent = strings.saveLocal;
      document.getElementById('exportBtn')?.textContent = strings.export;
      document.getElementById('previewTitle')?.textContent = strings.previewTitle;
      document.getElementById('resetBtn')?.textContent = strings.reset;
      // also set html lang
      document.documentElement.lang = lang === 'en' ? 'en' : 'pl';
      setCookie('cg_lang', lang);
    }
  
    // Utility to apply translations on pages that are not generator
    window.applyTranslations = (lang) => applyLanguage(lang);
  
    // Init global controls present on index.html
    window.initGlobalControls = function() {
      const lang = detectLang();
      const theme = getSavedTheme();
      const langSelect = document.getElementById('site-lang');
      const themeSelect = document.getElementById('site-theme');
      if (langSelect) langSelect.value = lang;
      if (themeSelect) themeSelect.value = theme;
      applyTheme(theme);
      applyLanguage(lang);
  
      if (langSelect) langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
      if (themeSelect) themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
    };
  
    // ----- Generator page -----
    window.initGeneratorPage = function() {
      // elements
      const langSelect = document.getElementById('lang-select');
      const themeSelect = document.getElementById('theme-select');
      const raceSelect = document.getElementById('raceSelect');
      const customRaceLabel = document.getElementById('custom-race-label');
      const customRaceInput = document.getElementById('customRace');
      const form = document.getElementById('chara-form');
  
      // fields
      const fields = {
        firstName: document.getElementById('firstName'),
        lastName: document.getElementById('lastName'),
        age: document.getElementById('age'),
        height: document.getElementById('height'),
        weight: document.getElementById('weight'),
        str: document.getElementById('str'),
        dex: document.getElementById('dex'),
        con: document.getElementById('con'),
        int: document.getElementById('int'),
        wis: document.getElementById('wis'),
        cha: document.getElementById('cha'),
        alignment: document.getElementById('alignment'),
        notes: document.getElementById('notes'),
        raceSelect,
        customRaceInput
      };
  
      // preview & controls
      const preview = document.getElementById('preview');
      const previewTitle = document.getElementById('previewTitle');
      const saveLocalBtn = document.getElementById('saveLocal');
      const exportBtn = document.getElementById('exportBtn');
      const importFile = document.getElementById('importFile');
      const resetBtn = document.getElementById('resetBtn');
  
      // language & theme initial
      const currentLang = detectLang();
      langSelect.value = currentLang;
      applyLanguage(currentLang);
      themeSelect.value = getSavedTheme();
      applyTheme(themeSelect.value);
  
      // wire top controls
      langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));
      themeSelect.addEventListener('change', (e) => applyTheme(e.target.value));
  
      // show/hide custom race
      function toggleCustomRace() {
        if (raceSelect.value === 'Custom') {
          customRaceLabel.style.display = 'block';
        } else {
          customRaceLabel.style.display = 'none';
        }
      }
      raceSelect.addEventListener('change', toggleCustomRace);
      toggleCustomRace();
  
      // show range values
      const ranges = ['str','dex','con','int','wis','cha'];
      ranges.forEach(k => {
        const el = document.getElementById(k);
        const label = document.getElementById(k+'Val');
        el.addEventListener('input', () => label.textContent = el.value);
        label.textContent = el.value;
      });
  
      // load saved chara from cookie
      function loadSaved() {
        const raw = getCookie('cg_chara');
        if (!raw) return null;
        try {
          return JSON.parse(raw);
        } catch(e) {
          return null;
        }
      }
      function saveToCookie(obj) {
        setCookie('cg_chara', JSON.stringify(obj), 365);
        showTempNotice('Zapisano lokalnie (cookie).');
      }
      function clearSaved() {
        delCookie('cg_chara');
        showTempNotice('Usunięto zapis lokalny.');
      }
  
      // preview build
      function buildCharacterObject() {
        const raceVal = raceSelect.value === 'Custom' ? (customRaceInput.value || 'Custom') : raceSelect.value;
        return {
          firstName: fields.firstName.value.trim(),
          lastName: fields.lastName.value.trim(),
          race: raceVal,
          age: fields.age.value || '',
          height: fields.height.value || '',
          weight: fields.weight.value || '',
          stats: {
            STR: Number(fields.str.value),
            DEX: Number(fields.dex.value),
            CON: Number(fields.con.value),
            INT: Number(fields.int.value),
            WIS: Number(fields.wis.value),
            CHA: Number(fields.cha.value),
          },
          alignment: fields.alignment.value,
          notes: fields.notes.value,
          savedAt: (new Date()).toISOString()
        };
      }
  
      function updatePreview() {
        const obj = buildCharacterObject();
        const nameLine = obj.firstName + (obj.lastName ? (' ' + obj.lastName) : '');
        let out = `Name: ${nameLine || '(unnamed)'}\nRace: ${obj.race}\nAge: ${obj.age}\nHeight: ${obj.height}\nWeight: ${obj.weight}\n\nStats:\n`;
        for (const [k,v] of Object.entries(obj.stats)) out += `  ${k}: ${v}\n`;
        out += `\nAlignment: ${obj.alignment}\n\nNotes:\n${obj.notes || '(none)'}\n\nSaved: ${obj.savedAt}`;
        preview.textContent = out;
      }
  
      // attach input/change listeners to update preview & autosave
      form.querySelectorAll('input,textarea,select').forEach(node => {
        node.addEventListener('input', () => {
          updatePreview();
        });
      });
  
      // save and export
      saveLocalBtn.addEventListener('click', () => {
        const obj = buildCharacterObject();
        saveToCookie(obj);
      });
  
      exportBtn.addEventListener('click', () => {
        const obj = buildCharacterObject();
        // create file content (readable)
        const lines = [];
        lines.push(`Name: ${obj.firstName}`);
        lines.push(`LastName: ${obj.lastName}`);
        lines.push(`Race: ${obj.race}`);
        lines.push(`Age: ${obj.age}`);
        lines.push(`Height: ${obj.height}`);
        lines.push(`Weight: ${obj.weight}`);
        lines.push('');
        lines.push('Stats:');
        for (const [k,v] of Object.entries(obj.stats)) lines.push(`${k}: ${v}`);
        lines.push('');
        lines.push(`Alignment: ${obj.alignment}`);
        lines.push('');
        lines.push('Notes:');
        lines.push(obj.notes || '');
        lines.push('');
        lines.push(`SavedAt: ${obj.savedAt}`);
  
        const content = lines.join('\n');
        const blob = new Blob([content], {type: 'text/plain;charset=utf-8'});
        // filename Imię_Nazwisko_Rasa.txt
        const namepart = sanitizeFilename((obj.firstName || 'Unnamed') + '_' + (obj.lastName || '') + '_' + (obj.race || 'Unknown'));
        const filename = `${namepart}.txt`.replace(/__+/g,'_');
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
      });
  
      // import
      importFile.addEventListener('change', (ev) => {
        const f = ev.target.files && ev.target.files[0];
        if (!f) return;
        const reader = new FileReader();
        reader.onload = function(e) {
          parseImported(e.target.result);
        };
        reader.readAsText(f, 'utf-8');
        // clear input so same file can be imported again if needed
        importFile.value = '';
      });
  
      function parseImported(txt) {
        // simple line parser "Key: Value"
        const lines = txt.split(/\r?\n/);
        const obj = { stats: {} };
        for (const raw of lines) {
          const line = raw.trim();
          if (!line) continue;
          const parts = line.split(':');
          if (parts.length < 2) continue;
          const key = parts[0].trim();
          const val = parts.slice(1).join(':').trim();
          if (/^STR|DEX|CON|INT|WIS|CHA$/i.test(key)) {
            obj.stats[key.toUpperCase()] = Number(val) || 0;
          } else if (key.toLowerCase() === 'name') obj.firstName = val;
          else if (key.toLowerCase() === 'lastname') obj.lastName = val;
          else if (key.toLowerCase() === 'race') obj.race = val;
          else if (key.toLowerCase() === 'age') obj.age = val;
          else if (key.toLowerCase() === 'height') obj.height = val;
          else if (key.toLowerCase() === 'weight') obj.weight = val;
          else if (key.toLowerCase() === 'alignment') obj.alignment = val;
          else if (key.toLowerCase() === 'notes') obj.notes = val;
          else if (key.toLowerCase() === 'savedat') obj.savedAt = val;
        }
        // apply to form
        if (obj.firstName) fields.firstName.value = obj.firstName;
        if (obj.lastName) fields.lastName.value = obj.lastName || '';
        if (obj.race) {
          const rLower = obj.race.toLowerCase();
          const known = ['human','elf','dwarf','orc'];
          const match = known.find(k => rLower.includes(k));
          if (match) {
            raceSelect.value = match.charAt(0).toUpperCase() + match.slice(1);
            customRaceLabel.style.display = 'none';
          } else {
            raceSelect.value = 'Custom';
            customRaceLabel.style.display = 'block';
            customRaceInput.value = obj.race;
          }
        }
        fields.age.value = obj.age || '';
        fields.height.value = obj.height || '';
        fields.weight.value = obj.weight || '';
        ['STR','DEX','CON','INT','WIS','CHA'].forEach(k => {
          if (obj.stats[k] !== undefined) {
            document.getElementById(k.toLowerCase()).value = obj.stats[k];
            document.getElementById(k.toLowerCase()+'Val').textContent = obj.stats[k];
          }
        });
        fields.alignment.value = obj.alignment || '';
        fields.notes.value = obj.notes || '';
        updatePreview();
        saveToCookie(buildCharacterObject());
        showTempNotice('Zaimportowano postać i zapisano lokalnie.');
      }
  
      // reset
      resetBtn.addEventListener('click', () => {
        if (!confirm('Na pewno zresetować formularz i usunąć lokalny zapis?')) return;
        form.reset();
        // reset ranges display
        ranges.forEach(k => document.getElementById(k+'Val').textContent = document.getElementById(k).value);
        delCookie('cg_chara');
        updatePreview();
      });
  
      // temp notice
      function showTempNotice(text, t = 2200) {
        const el = document.createElement('div');
        el.textContent = text;
        el.style.position = 'fixed';
        el.style.right = '12px';
        el.style.bottom = '12px';
        el.style.background = 'rgba(0,0,0,0.7)';
        el.style.color = 'white';
        el.style.padding = '10px 12px';
        el.style.borderRadius = '8px';
        el.style.zIndex = 9999;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), t);
      }
  
      // on load: if cookie exists, populate
      const saved = loadSaved();
      if (saved) {
        // fill values (best-effort)
        fields.firstName.value = saved.firstName || '';
        fields.lastName.value = saved.lastName || '';
        if (saved.race) {
          const known = ['Human','Elf','Dwarf','Orc'];
          if (known.includes(saved.race)) {
            raceSelect.value = saved.race;
            customRaceLabel.style.display = 'none';
          } else {
            raceSelect.value = 'Custom';
            customRaceLabel.style.display = 'block';
            customRaceInput.value = saved.race;
          }
        }
        fields.age.value = saved.age || '';
        fields.height.value = saved.height || '';
        fields.weight.value = saved.weight || '';
        if (saved.stats) {
          ['STR','DEX','CON','INT','WIS','CHA'].forEach(k => {
            if (saved.stats[k] !== undefined) {
              document.getElementById(k.toLowerCase()).value = saved.stats[k];
              document.getElementById(k.toLowerCase()+'Val').textContent = saved.stats[k];
            }
          });
        }
        fields.alignment.value = saved.alignment || '';
        fields.notes.value = saved.notes || '';
      }
  
      updatePreview();
  
      // expose helper for other pages
      window.buildCharacterObject = buildCharacterObject;
    };
  
  })();
  