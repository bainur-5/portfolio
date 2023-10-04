const cube = document.getElementById('cube');
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
