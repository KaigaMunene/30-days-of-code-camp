const colorThemes = document.querySelectorAll('[name="theme"]')

// store theme
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme)
}

// apply theme
const retrieveTheme = function(){
    const activeTheme = localStorage.getItem("theme")
    colorThemes.forEach((themeSelected) => {
        if (themeSelected.id === activeTheme) {
            themeSelected.checked = true;
        }
    });
};

colorThemes.forEach(themeSelected => {
    themeSelected.addEventListener('click', () => {
        storeTheme(themeSelected.id);
    });
});

document.onload = retrieveTheme();