const image = document.getElementById('cookie');
const number = Number(document.getElementById('clicker__counter'));
//const number = Number.parseInt(document.getElementById('clicker__counter'));
//При клике получается не суммирование а строковая склейка. Преобразование в число не работает

const changeWidthAndNumber = function() {
    number.textContent += 1;
    if (number.textContent % 2 !== 0) {
      image.width = 250;
    }
    image.width = 200;
}

image.onclick = changeWidthAndNumber;
