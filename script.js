
document.addEventListener('DOMContentLoaded', () => {
    // 1. Отримання інформації про браузер та операційну систему
    const browserInfo = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: navigator.languages,
        online: navigator.onLine,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };

    // Зберігаємо інформацію у localStorage
    localStorage.setItem('browserInfo', JSON.stringify(browserInfo));

    // Отримуємо збережену інформацію
    const savedInfo = JSON.parse(localStorage.getItem('browserInfo'));

    // Відображаємо інформацію у футері
    const infoElement = document.getElementById('browser-info');

    if (infoElement) {
        infoElement.innerHTML = `
            <h3>Інформація про систему та браузер</h3>
            <p><strong>Браузер і система:</strong> ${savedInfo.userAgent}</p>
            <p><strong>Платформа:</strong> ${savedInfo.platform}</p>
            <p><strong>Мова браузера:</strong> ${savedInfo.language}</p>
            <p><strong>Доступні мови:</strong> ${savedInfo.languages.join(', ')}</p>
            <p><strong>Підключення до мережі:</strong> ${savedInfo.online ? 'Є' : 'Немає'}</p>
            <p><strong>Роздільна здатність екрана:</strong> ${savedInfo.screenWidth} × ${savedInfo.screenHeight}</p>
            <p><strong>Глибина кольору:</strong> ${savedInfo.colorDepth} біт</p>
            <p><strong>Масштабування екрана:</strong> ${savedInfo.pixelRatio}</p>
            <p><strong>Часовий пояс:</strong> ${savedInfo.timezone}</p>
        `;
    }

    // 2. Завантаження коментарів із JSONPlaceholder
    const commentsList = document.getElementById('comments-list');

    if (commentsList) {
        fetch('https://jsonplaceholder.typicode.com/posts/13/comments')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Не вдалося отримати коментарі');
                }

                return response.json();
            })
            .then(comments => {
                commentsList.innerHTML = '';

                comments.forEach(comment => {
                    const commentElement = document.createElement('article');
                    commentElement.classList.add('comment');

                    const name = document.createElement('h3');
                    name.textContent = comment.name;

                    const email = document.createElement('p');
                    email.textContent = comment.email;

                    const body = document.createElement('p');
                    body.textContent = comment.body;

                    commentElement.append(name, email, body);
                    commentsList.appendChild(commentElement);
                });
            })
            .catch(error => {
                commentsList.textContent = 'Не вдалося завантажити коментарі.';
                console.error(error);
            });
    }

    // 3. Модальне вікно з формою зворотного зв'язку
    const modal = document.getElementById('feedback-modal');
    const closeButton = document.getElementById('close-modal');

    if (modal && closeButton) {
        // При завантаженні сторінки форма прихована
        modal.classList.remove('is-visible');
        modal.setAttribute('aria-hidden', 'true');

        // Показуємо форму через 60 секунд
        setTimeout(() => {
            modal.classList.add('is-visible');
            modal.setAttribute('aria-hidden', 'false');
        }, 60000);

        // Закриття кнопкою ×
        closeButton.addEventListener('click', () => {
            modal.classList.remove('is-visible');
            modal.setAttribute('aria-hidden', 'true');
        });

        // Закриття натисканням поза формою
        modal.addEventListener('click', event => {
            if (event.target === modal) {
                modal.classList.remove('is-visible');
                modal.setAttribute('aria-hidden', 'true');
            }
        });

        // Закриття клавішею Escape
        document.addEventListener('keydown', event => {
            if (
                event.key === 'Escape' &&
                modal.classList.contains('is-visible')
            ) {
                modal.classList.remove('is-visible');
                modal.setAttribute('aria-hidden', 'true');
            }
        });
    }
});

// 4. Перемикання денної та нічної теми
const themeToggle = document.getElementById('theme-toggle');

function setTheme(theme) {
    document.body.classList.remove('day-theme', 'night-theme');
    document.body.classList.add(`${theme}-theme`);

    if (themeToggle) {
        themeToggle.textContent =
            theme === 'day' ? '☀️ Денна тема' : '🌙 Нічна тема';
    }
}

function setThemeByTime() {
    const now = new Date();
    const hour = now.getHours();

    // Денна тема: 07:00–20:59
    // Нічна тема: 21:00–06:59
    const theme = hour >= 7 && hour < 21 ? 'day' : 'night';

    setTheme(theme);
}

// Спочатку встановлюємо тему за поточним часом
setThemeByTime();

// Автоматично перевіряємо час щохвилини
setInterval(setThemeByTime, 60000);

// Ручне перемикання теми
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDay = document.body.classList.contains('day-theme');
        setTheme(isDay ? 'night' : 'day');
    });
}