const cube = document.getElementById("cube");
let rotateX = 10;
let rotateY = 10;

function rotateLeft() {
  rotateY -= 10;
  updateRotation();
}

function rotateRight() {
  rotateY += 10;
  updateRotation();
}

function rotateUp() {
  rotateX -= 10;
  updateRotation();
}

function rotateDown() {
  rotateX += 10;
  updateRotation();
}

function updateRotation() {
  console.log(rotateX, rotateY);
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

//
// Открываем модальное окно
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Закрываем модальное окно
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Отправка сообщения
const emailForm = document.getElementById("emailForm");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Здесь вы можете добавить код для отправки сообщения на электронную почту
  // Например, с использованием fetch() или отправки на сервер

  // После отправки сообщения можно закрыть модальное окно
  modal.style.display = "none";
});
const resources = {
  ru: {
    translation: {
      greeting: "Привет, меня зовут <span>Байнур</span>",
      "web-developer":
        "Я креативный <span>Web-разработчик</span> из Кыргызстана",
      about_title: "Обо мне",
      about_description1:
        "Я Frontend разработчик, который занимается веб-разработкой в некотором качестве с 2021 года.",
      about_description2:
        "Моя мечта в разработке сделать свой ИИ, сделать галаграмму как у Тони Старка (Marvel). Сейчас я изучаю three.js (3D Анимации).",
      about_description3:
        "С хорошим бэкграундом в виде опыта коммерческой разработки иностранных финтех проектов, в составе команды из 8 и более человек с использованием Scrum/Agile/Jira.",
      "projects-title": "Проекты",
      "my-skils": "Мои скилы",
      "experience-title": "Опыт работы",
      "experience-item1":
        "Написал логику личного кабинета с возможностью редактирования данных.",
      "experience-item2": "Работал над генерацией документов.",
      "experience-item3": "Сделал регистрационную панель.",
      "experience-item4":
        "Работал над функциями публикации контента, такими как посты и статьи, включая возможности редактирования и удаления.",
      "experience-item5":
        "Написал логику публикации, редактирование и взаимодействие с ней.",
      "experience-item6": "Разработка коммерческого проекта с нуля.",
      "experience-item7": "Работал в команде по методологии Agile Scrum.",
      "experience-item8":
        "Участвовал в ежедневных стендапах, предоставлял ежедневные отчёты.",
      "freelance-title": "Фриланс - настоящее время",
      "freelance-item1": "Работал над многостраничной версткой.",
      "freelance-item2": "Доработка и исправление сайтов.",
      "my-social": "Мои соцсети:",
    },
  },
  en: {
    translation: {
      greeting: "Hello, my name is <span>Bainur</span>",
      "web-developer":
        "I am a creative <span>Web Developer</span> from Kyrgyzstan",
      about_title: "About Me",
      about_description1:
        "I am a Frontend developer who has been involved in web development in some capacity since 2021.",
      about_description2:
        "My dream in development is to create my own AI, to make a hologram like Tony Stark's (Marvel). Currently, I am studying three.js (3D Animations).",
      about_description3:
        "With a good background in the form of experience in commercial development of foreign fintech projects, as part of a team of 8 or more people using Scrum/Agile/Jira.",
      "projects-title": "Projects",
      "my-skils": "My Skills",
      "experience-title": "Work Experience",
      "experience-item1":
        "Wrote the logic for the personal account with the ability to edit data.",
      "experience-item2": "Worked on document generation.",
      "experience-item3": "Created the registration panel.",
      "experience-item4":
        "Worked on content publishing functions such as posts and articles, including editing and deletion capabilities.",
      "experience-item5":
        "Wrote the logic for publication, editing, and interaction.",
      "experience-item6": "Developed a commercial project from scratch.",
      "experience-item7": "Worked in a team using Agile Scrum methodology.",
      "experience-item8":
        "Participated in daily stand-ups, provided daily reports.",
      "freelance-title": "Freelance - Present",
      "freelance-item1": "Worked on multi-page layout.",
      "freelance-item2": "Improvement and correction of websites.",
      "my-social": "My Social Media:",
    },
  },
};
i18next.init(
  {
    lng: "en", // язык, который нужно использовать
    debug: true,
    resources: resources,
    interpolation: {
      escapeValue: false, // отключаем экранирование, так как мы уже используем HTML в переводах
    },
  },
  function (err, t) {
    if (err) return console.error(err);
    // инициализировано и готово к работе!
    updateContent();
  }
);
function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    const key = element.getAttribute("data-i18n");
    element.innerHTML = i18next.t(key);
  });
}
function changeLanguage(lng) {
  i18next.changeLanguage(lng, function (err, t) {
    if (err) return console.error(err);
    updateContent();
  });
}
