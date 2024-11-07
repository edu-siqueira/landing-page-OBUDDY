import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtOFUG9pEz2hfWH-G9ls1scRGJkT5a0do",
    authDomain: "obuddy-dec8d.firebaseapp.com",
    projectId: "obuddy-dec8d",
    storageBucket: "obuddy-dec8d.firebasestorage.app",
    messagingSenderId: "292988395222",
    appId: "1:292988395222:web:53290732584c2d27543377",
    measurementId: "G-N7T9735R39"
  };
  
initializeApp(firebaseConfig);

const div = document.getElementById('webTheme')
const root = document.querySelector(':root')
const themeSwitch = document.getElementById('themeSwitcher')
const themeIcon = document.getElementById('themeIcon')
const telaInicial = document.getElementById('telaInicial')
const telaDeDados = document.getElementById('telaDeDados')
const telaDeErros = document.getElementById('telaDeErros')
const carouselIndicators = document.getElementById('carouselIndicators')
const backgroundImage = document.querySelector('.img-section')

themeSwitch.addEventListener('click', function(){
    if (div.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#F4F3F2')
        root.style.setProperty('--bg-color-2', '#e6e6e6')
        root.style.setProperty('--font-color', '#2C3E50')
        backgroundImage.style.setProperty('background-image', "url('./assets/background02.png')")
        telaInicial.src = './assets/tela-principal-light.png'
        telaDeDados.src = './assets/tela-de-dados-light.png'
        telaDeErros.src = './assets/tela-de-erros-light.png'
        carouselIndicators.dataset.bsTheme = 'dark'
        div.dataset.theme = 'light'
        themeIcon.className = 'fa-solid fa-moon'
    } else {
        root.style.setProperty('--bg-color', '#0C1015')
        root.style.setProperty('--bg-color-2', '#14171F')
        root.style.setProperty('--font-color', '#b8a554')
        backgroundImage.style.setProperty('background-image', "url('./assets/background01.png')")
        telaInicial.src = './assets/tela-principal.png'
        telaDeDados.src = './assets/tela-de-dados.png'
        telaDeErros.src = './assets/tela-de-erros.png'
        carouselIndicators.dataset.bsTheme = 'light'
        div.dataset.theme = 'dark'
        themeIcon.className = 'fa-solid fa-sun'
    }
})