const hole = document.getElementsByClassName('hole');
const holeOnclick = document.getElementsByClassName('hole_has-mole');
const hit = document.getElementById('dead');
const miss = document.getElementById('lost');

if (hole.onclick == holeOnclick) {
  hit.textcontent += 1;
  if (hit.textcontent == 10) {
    alert('Выь победили!');
    hit.textcontent = 0;
    miss.textcontent = 0;
  }
} else {
  miss.textcontent += 1;
  if (miss.textcontent == 10) {
    alert('Выь проиграли!');
    hit.textcontent = 0;
    miss.textcontent = 0;
  }
}
