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
        // Змінюємо позицію хедера, щоб навігаційна панель залишалась зверху
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
