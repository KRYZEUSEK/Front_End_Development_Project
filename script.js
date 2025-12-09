// Słownik tłumaczeń
const translations = {
    pl: {
        pageTitle: "Moja Strona",
        mainTitle: "Witamy na stronie!",
        menuHome: "Strona główna",
        menuAbout: "O nas",
        menuContact: "Kontakt",
        welcomeText: "To jest przykładowa treść strony z obsługą wielu języków i trybów kolorystycznych."
    },
    en: {
        pageTitle: "My Website",
        mainTitle: "Welcome to the website!",
        menuHome: "Home",
        menuAbout: "About us",
        menuContact: "Contact",
        welcomeText: "This is a sample website content with language switching and color themes."
    }
};

// Zmiana języka
document.querySelectorAll(".lang-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        changeLanguage(lang);
    });
});

function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
}

// Zmiana trybu kolorów
document.querySelectorAll(".theme-switch button").forEach(btn => {
    btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme");
        document.body.className = theme;
    });
});
