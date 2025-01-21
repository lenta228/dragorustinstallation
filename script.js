// Экран загрузки
const loadingScreen = document.getElementById('loadingScreen');
const humanButton = document.getElementById('humanButton');
const mainScreen = document.getElementById('mainScreen');
const playButton = document.getElementById('playButton');
const menu = document.getElementById('menu');

// Устанавливаем кнопку "Я ЧЕЛОВЕК" в случайное место
function setRandomPosition() {
    const x = Math.random() * (window.innerWidth - humanButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - humanButton.offsetHeight);
    humanButton.style.left = `${x}px`;
    humanButton.style.top = `${y}px`;
}

// Переход на основной экран
humanButton.addEventListener('click', () => {
    loadingScreen.style.display = 'none';
    mainScreen.style.display = 'block';
});

// Открытие меню при нажатии на "Начать играть"
playButton.addEventListener('click', () => {
    menu.style.display = 'block';
});

// Закрытие меню при клике вне его области
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target); // Проверяем, был ли клик внутри меню
    const isClickOnPlayButton = event.target === playButton; // Проверяем, был ли клик на кнопке "Начать играть"

    if (!isClickInsideMenu && !isClickOnPlayButton) {
        menu.style.display = 'none'; // Закрываем меню, если клик был вне его
    }
});

// Инициализация
setRandomPosition();