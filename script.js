document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('playButton');
    const menusContainer = document.querySelector('.menus-container');
    const menu = document.getElementById('menu');
    const instructionsMenu = document.getElementById('instructionsMenu');
    let isMenuVisible = false;

    // Мгновенный старт анимации кубиков
    const cubes = document.querySelectorAll('.cube');
    cubes.forEach((cube, index) => {
        // Случайная начальная позиция для каждого кубика
        cube.style.top = `${Math.random() * -50}px`;
        // Случайная начальная прозрачность
        cube.style.opacity = (0.3 + Math.random() * 0.5).toString();
        // Запуск анимации
        cube.style.animation = `moveCubes ${15 + Math.random() * 10}s linear infinite`;
    });

    // Анимация появления кнопки
    setTimeout(() => {
        playButton.style.opacity = '1';
        playButton.style.transform = 'translateY(0)';
    }, 500);

    // Обработка клика по кнопке
    playButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        showMenu();
    });

    // Показ меню
    function showMenu() {
        if (!isMenuVisible) {
            menusContainer.style.display = 'flex';
            
            // Даем браузеру время на применение display: flex
            requestAnimationFrame(() => {
                menusContainer.classList.add('visible');
            });
            
            isMenuVisible = true;
        }
    }

    // Скрытие меню
    function hideMenu() {
        if (isMenuVisible) {
            menusContainer.classList.remove('visible');
            
            setTimeout(() => {
                menusContainer.style.display = 'none';
            }, 300);
            
            isMenuVisible = false;
        }
    }

    // Обработка клика вне меню
    document.addEventListener('click', (event) => {
        if (isMenuVisible) {
            const isClickInsideMenu = menu.contains(event.target) || 
                                    instructionsMenu.contains(event.target) ||
                                    menusContainer.contains(event.target);
            const isClickOnPlayButton = playButton.contains(event.target);

            if (!isClickInsideMenu && !isClickOnPlayButton) {
                hideMenu();
            }
        }
    });

    // Обработка клавиши Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isMenuVisible) {
            hideMenu();
        }
    });

    // Обработка наведения на кнопки меню
    const menuButtons = document.querySelectorAll('.menu-button:not(.soon-button)');
    menuButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateX(8px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateX(0)';
        });
    });

    // Предзагрузка иконок
    const iconUrls = [
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.woff2',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2'
    ];
    
    iconUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'font';
        link.type = 'font/woff2';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });

    // Функционал копирования промокода
    const copyButton = document.getElementById('copyButton');
    const promoCode = document.getElementById('promoCode');

    copyButton.addEventListener('click', async () => {
        const code = 'START';
        try {
            await navigator.clipboard.writeText(code);
            
            // Визуальный фидбек
            const originalIcon = copyButton.innerHTML;
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            copyButton.style.color = '#00b074';
            
            // Возвращаем оригинальную иконку через 2 секунды
            setTimeout(() => {
                copyButton.innerHTML = originalIcon;
                copyButton.style.color = '';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    });

    // Анимация при наведении на промокод
    promoCode.addEventListener('mouseenter', () => {
        copyButton.style.transform = 'scale(1.1)';
    });

    promoCode.addEventListener('mouseleave', () => {
        copyButton.style.transform = 'scale(1)';
    });

    // Функционал закрытия виджета с промокодом
    const closePromoWidget = document.getElementById('closePromoWidget');
    const promoWidget = document.getElementById('promoWidget');

    closePromoWidget.addEventListener('click', () => {
        promoWidget.style.opacity = '0';
        promoWidget.style.transform = 'translateX(20px)';
        
        // Удаляем виджет после анимации
        setTimeout(() => {
            promoWidget.style.display = 'none';
        }, 500);
    });
});
