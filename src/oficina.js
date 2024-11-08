import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtOFUG9pEz2hfWH-G9ls1scRGJkT5a0do",
    authDomain: "obuddy-dec8d.firebaseapp.com",
    projectId: "obuddy-dec8d",
    storageBucket: "obuddy-dec8d.appspot.com",
    messagingSenderId: "292988395222",
    appId: "1:292988395222:web:53290732584c2d27543377",
    measurementId: "G-N7T9735R39"
};

initializeApp(firebaseConfig);
const db = getFirestore();

const div = document.getElementById('webTheme');
const root = document.querySelector(':root');
const themeSwitch = document.getElementById('themeSwitcher');
const themeIcon = document.getElementById('themeIcon');
const registerButton = document.getElementById('register-button');

const form = document.getElementById('form-oficina')

// Função para alternar tema
themeSwitch.addEventListener('click', function() {
    if (div.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#F4F3F2');
        root.style.setProperty('--bg-color-2', '#e6e6e6');
        root.style.setProperty('--font-color', '#2C3E50');
        div.dataset.theme = 'light';
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        root.style.setProperty('--bg-color', '#0C1015');
        root.style.setProperty('--bg-color-2', '#14171F');
        root.style.setProperty('--font-color', '#b8a554');
        div.dataset.theme = 'dark';
        themeIcon.className = 'fa-solid fa-sun';
    }
});

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    try {
        await addDoc(collection(db, "pedidosOficinas"), {
            nome: document.getElementById('nome-oficina').value,
            informacoesContato: {
                email: document.getElementById('email-oficina').value,
                telefone: document.getElementById('telefone-oficina').value,
            },
            informacoesEndereco: {
                endereco: document.getElementById('endereco-oficina').value,
            },
            cnpj: document.getElementById('cnpj-oficina').value,
            observacoes: document.getElementById('descricao-oficina').value,
        });
        window.alert('Cadastro Realizado!');
    } catch (e) {
        window.alert('Erro ao cadastrar. Por favor, tente novamente mais tarde.');
        console.error("Erro ao cadastrar:", e);
    }
});