const root = document.querySelector(':root')
const div = document.getElementById('webTheme')
const themeSwitch = document.getElementById('themeSwitcher')
const themeIcon = document.getElementById('themeIcon')

themeSwitch.addEventListener('click', function(){
    if (div.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#F4F3F2')
        root.style.setProperty('--bg-color-2', '#e6e6e6')
        root.style.setProperty('--font-color', '#2C3E50')
        div.dataset.theme = 'light'
        themeIcon.className = 'fa-solid fa-moon'
    } else {
        root.style.setProperty('--bg-color', '#0C1015')
        root.style.setProperty('--bg-color-2', '#14171F')
        root.style.setProperty('--font-color', '#b8a554')
        div.dataset.theme = 'dark'
        themeIcon.className = 'fa-solid fa-sun'
    }
})