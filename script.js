const playButton = document.getElementById('playButton');
const menu = document.getElementById('menu');

playButton.addEventListener('click', () => {
    menu.style.display = 'block';
});

document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnPlayButton = event.target === playButton;

    if (!isClickInsideMenu && !isClickOnPlayButton) {
        menu.style.display = 'none';
    }
});