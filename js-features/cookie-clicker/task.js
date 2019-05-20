const image = document.getElementById('cookie');
const number = document.getElementById('clicker__counter');

const changeWidthAndNumber = function() {
    number.textContent = parseInt(number.textContent) + 1;
    if (number.textContent % 2 !== 0) {
      image.width = 250;
    } else {
      image.width = 200;
    }
}

image.onclick = changeWidthAndNumber;
