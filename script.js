// ����� ��������
const loadingScreen = document.getElementById('loadingScreen');
const humanButton = document.getElementById('humanButton');
const mainScreen = document.getElementById('mainScreen');
const playButton = document.getElementById('playButton');
const menu = document.getElementById('menu');

// ������������� ������ "� �������" � ��������� �����
function setRandomPosition() {
    const x = Math.random() * (window.innerWidth - humanButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - humanButton.offsetHeight);
    humanButton.style.left = `${x}px`;
    humanButton.style.top = `${y}px`;
}

// ������� �� �������� �����
humanButton.addEventListener('click', () => {
    loadingScreen.style.display = 'none';
    mainScreen.style.display = 'block';
});

// �������� ���� ��� ������� �� "������ ������"
playButton.addEventListener('click', () => {
    menu.style.display = 'block';
});

// �������� ���� ��� ����� ��� ��� �������
document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target); // ���������, ��� �� ���� ������ ����
    const isClickOnPlayButton = event.target === playButton; // ���������, ��� �� ���� �� ������ "������ ������"

    if (!isClickInsideMenu && !isClickOnPlayButton) {
        menu.style.display = 'none'; // ��������� ����, ���� ���� ��� ��� ���
    }
});

// �������������
setRandomPosition();