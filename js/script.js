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