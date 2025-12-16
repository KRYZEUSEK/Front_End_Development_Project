/* ------------------------------
   GLOBAL MODE SWITCHER
------------------------------ */

// Load mode on startup
document.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("uiMode") || "light";
  setMode(savedMode);
});

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
function setLanguage(lang) {
  localStorage.setItem("lang", lang);

  // Your pages handle their own translation
  if (typeof updateLanguage === "function") {
    updateLanguage(lang);  
  }
}

// Load language if needed
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang");
  if (saved && typeof updateLanguage === "function") {
    updateLanguage(saved);
  }
});
