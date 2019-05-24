const arrowBtnLt = document.getElementsByClassName('slider__arrow_prev').item(0);
const arrowBtnRt = document.getElementsByClassName('slider__arrow_next').item(0);

arrowBtnLt.onclick = function () {
  const slider = document.getElementsByClassName('slider__item slider__item_active').item(0);
  if (slider.previousElementSibling) {
    slider.previousElementSibling.classList.add('slider__item_active');
  } else {
    slider.parentElement.lastElementChild.classList.add('slider__item_active');
  }
  slider.classList.remove('slider__item_active');
}

arrowBtnRt.onclick = function () {
  const slider = document.getElementsByClassName('slider__item slider__item_active').item(0);
  if (slider.nextElementSibling) {
    slider.nextElementSibling.classList.add('slider__item_active');
  } else {
    slider.parentElement.firstElementChild.classList.add('slider__item_active');
  }
  slider.classList.remove('slider__item_active');
}
