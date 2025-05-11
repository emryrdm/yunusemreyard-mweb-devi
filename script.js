
const siparisButonlari = document.querySelectorAll('.siparis-btn');
siparisButonlari.forEach(buton => {
    buton.addEventListener('click', () => {
        alert("Teşekkürler! Siparişiniz alındı.");
    });
});


const kahvelerBtn = document.querySelector('#kahveler-btn');
const tatlilarBtn = document.querySelector('#tatlilar-btn');
const atistirmaliklarBtn = document.querySelector('#atistirmaliklar-btn');

const kahveMenu = document.querySelectorAll('.kahve');
const tatliMenu = document.querySelectorAll('.tatli');
const atistirmalikMenu = document.querySelectorAll('.atistirmalik');

kahvelerBtn.addEventListener('click', () => {
    kahveMenu.forEach(item => item.style.display = 'block');
    tatliMenu.forEach(item => item.style.display = 'none');
    atistirmalikMenu.forEach(item => item.style.display = 'none');
});

tatlilarBtn.addEventListener('click', () => {
    kahveMenu.forEach(item => item.style.display = 'none');
    tatliMenu.forEach(item => item.style.display = 'block');
    atistirmalikMenu.forEach(item => item.style.display = 'none');
});

atistirmaliklarBtn.addEventListener('click', () => {
    kahveMenu.forEach(item => item.style.display = 'none');
    tatliMenu.forEach(item => item.style.display = 'none');
    atistirmalikMenu.forEach(item => item.style.display = 'block');
});


const modButton = document.querySelector('#mod-btn');
let isDarkMode = false;

modButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    isDarkMode = !isDarkMode;
    modButton.innerText = isDarkMode ? 'Aydınlık Mod' : 'Karanlık Mod';
});
