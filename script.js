/* ------------------------------
   GLOBAL MODE SWITCHER
------------------------------ */

// Load mode on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);
});

// Mode switcher
function setMode(mode) {
  const root = document.documentElement;

  // Remove all mode classes
  root.classList.remove("light-mode", "dark-mode", "colorblind-mode");

  if (mode === "dark") {
    root.classList.add("dark-mode");
  } else if (mode === "colorblind") {
    root.classList.add("colorblind-mode");
  } else {
    root.classList.add("light-mode");
  }

  localStorage.setItem("uiMode", mode);
}

/* ------------------------------
   GLOBAL LANGUAGE SWITCHER
------------------------------ */

// This function is called by buttons
function setLanguage(lang) {
  // Save selection
  localStorage.setItem("lang", lang);

  // Call translation function from lan.js
  if (typeof setLang === "function") {
    setLang(lang);
  }
}
/* ------------------------------
   GLOBAL MODE & LANGUAGE APPLY
------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved mode
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);

  // Apply saved language
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});
