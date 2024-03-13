const div = document.getElementById('webTheme')
const root = document.querySelector(':root')
const themeSwitch = document.getElementById('themeSwitcher')
const themeIcon = document.getElementById('themeIcon')
const sectionImg = document.querySelector(".section-img")
const carouselIndicators = document.getElementById('carouselIndicators')

themeSwitch.addEventListener('click', function(){
    if (div.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#F4F3F2')
        root.style.setProperty('--bg-color-2', '#e6e6e6')
        root.style.setProperty('--font-color', '#2C3E50')
        sectionImg.src = 'assets/tela-principal-light.png'
        carouselIndicators.dataset.bsTheme = 'dark'
        div.dataset.theme = 'light'
        themeIcon.className = 'fa-solid fa-moon'
    } else {
        root.style.setProperty('--bg-color', '#272725')
        root.style.setProperty('--bg-color-2', '#1F1E1c')
        root.style.setProperty('--font-color', '#b8a554')
        sectionImg.src = 'assets/tela-inicial.png'
        carouselIndicators.dataset.bsTheme = 'light'
        div.dataset.theme = 'dark'
        themeIcon.className = 'fa-solid fa-sun'
    }
})