// Функція для відображення секцій
function showSection(sectionId) {
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Показуємо основну секцію при завантаженні сторінки
window.onload = () => {
    showSection('main');
};

// Обробка прокрутки сторінки
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    const nav = document.querySelector('header nav');
    const h1 = document.getElementById('siteTitle');
    const threshold = 100; // Поріг прокрутки в пікселях
    
    // Якщо прокрутили більше ніж на поріг
    if (window.scrollY > threshold) {
        nav.classList.add('fixed'); // Закріплюємо тільки nav
        h1.style.opacity = '0'; // Заголовок ховається (лише текст)
        header.style.backgroundColor = 'transparent'; // Ховаємо фон хедера
    } 
    // Якщо прокрутили назад
    else {
        nav.classList.remove('fixed'); // Видаляємо закріплену позицію для nav
        h1.style.opacity = '1'; // Заголовок знову з'являється
        header.style.backgroundColor = 'rgba(44, 62, 80, 0.58)'; // Повертаємо прозорий фон хедера
    }
});

const menuIcon = document.getElementById('menuIcon');
const mobileMenu = document.getElementById('mobileMenu');

// Перемикання меню
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); // Перемикаємо клас hidden
});

// Закриття меню при кліку на пункт меню
function handleMenuClick(section) {
    showSection(section); // Виклик функції для зміни секції
    mobileMenu.classList.add('hidden'); // Закриваємо меню після кліку
}

// Перевірка видимості елемента desktopNav
function toggleMenuIconVisibility() {
    var desktopNav = document.getElementById('desktopNav');
    var menuIcon = document.getElementById('menuIcon');
    
    if (desktopNav && menuIcon) {
        if (desktopNav.style.display === 'none' || window.getComputedStyle(desktopNav).display === 'none') {
            // Якщо desktopNav приховано, показуємо іконку меню
            menuIcon.style.display = 'block';
        } else {
            // Якщо desktopNav видно, приховуємо іконку меню
            menuIcon.style.display = 'none';
        }
    }
}

// Викликаємо функцію при завантаженні сторінки
window.onload = toggleMenuIconVisibility;

// Викликаємо функцію при зміні видимості desktopNav (якщо потрібно)
window.addEventListener('resize', toggleMenuIconVisibility);



// Отримуємо елементи форми та повідомлення
const petitionForm = document.getElementById('petitionForm');
const successMessage = document.getElementById('successMessage');
const petitionTitle = document.getElementById('petitionTitle');
const petitionDescription = document.getElementById('petitionDescription');
const petitionAuthor = document.getElementById('petitionAuthor');

// Обробник події на відправлення форми
petitionForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Зупиняємо стандартну поведінку форми

    // Сховуємо форму
    petitionForm.reset(); // Очищаємо форму

    // Показуємо повідомлення про успіх
    successMessage.classList.add('show');

    // Сховати повідомлення через кілька секунд
    setTimeout(function () {
        successMessage.classList.remove('show');
    }, 3000); // Через 3 секунди повідомлення зникає
});

// Автоматичне розширення textarea в залежності від кількості тексту
petitionDescription.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px'; // Підлаштовуємо висоту за кількістю тексту
});


document.querySelectorAll('.ministry-title').forEach(function(title) {
    title.addEventListener('click', function() {
        var ministry = title.parentElement;
        var allMinistries = document.querySelectorAll('.ministry');

        // Закриваємо всі інші міністерства
        allMinistries.forEach(function(otherMinistry) {
            if (otherMinistry !== ministry) {
                otherMinistry.classList.remove('open');
            }
        });

        // Перемикаємо стан поточного міністерства
        ministry.classList.toggle('open');
    });
});

// Отримуємо елементи
const audioPlayer = document.querySelector('audio');
const anthemContainer = document.querySelector('.anthem-container');

// Додаємо слухач для події відтворення
audioPlayer.addEventListener('play', () => {
    // Додаємо клас для анімації фону
    anthemContainer.classList.add('playing');
});

// Додаємо слухач для події паузи або завершення відтворення
audioPlayer.addEventListener('pause', () => {
    // Видаляємо клас для зупинки анімації
    anthemContainer.classList.remove('playing');
});

audioPlayer.addEventListener('ended', () => {
    // Видаляємо клас по завершенню відтворення
    anthemContainer.classList.remove('playing');
});
