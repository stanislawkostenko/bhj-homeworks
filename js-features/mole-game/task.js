const hit = document.getElementById('dead');
const miss = document.getElementById('lost');

const setToZero = function() {
  hit.textContent = 0;
  miss.textContent = 0;
}

const checkHole = function(hole) {
  if (hole.target.classList.contains('hole_has-mole')) {
    hit.textContent = parseInt(hit.textContent) + 1;;
  } else {
    miss.textContent = parseInt(miss.textContent) + 1;
  }
  if (hit.textContent == 10) {
    alert('Вы победили!');
    setToZero();
  } else if (miss.textContent == 5) {
    alert('Вы проиграли!');
    setToZero();
  }
}

onclick = checkHole;
