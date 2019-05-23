const slider = Array.from(document.querySelectorAll('.slider__item'));
const arrowBtn = Array.from(document.querySelectorAll('.slider__arrow'));
const dottBtn = Array.from(document.querySelectorAll('.slider__dot'));

arrowBtn[1].onclick = () => {
  if (slider[0].className === 'slider__item slider__item_active') {
    slider[0].className = 'slider__item';
    slider[1].className = 'slider__item slider__item_active';
  } else if (slider[1].className === 'slider__item slider__item_active') {
    slider[1].className = 'slider__item';
    slider[2].className = 'slider__item slider__item_active';
  } else if (slider[2].className === 'slider__item slider__item_active') {
    slider[2].className = 'slider__item';
    slider[3].className = 'slider__item slider__item_active';
  } else if (slider[3].className === 'slider__item slider__item_active') {
    slider[3].className = 'slider__item';
    slider[4].className = 'slider__item slider__item_active';
  } else if (slider[4].className === 'slider__item slider__item_active') {
    slider[4].className = 'slider__item';
    slider[0].className = 'slider__item slider__item_active';
  }
}

arrowBtn[0].onclick = () => {
  if (slider[0].className === 'slider__item slider__item_active') {
    slider[0].className = 'slider__item';
    slider[4].className = 'slider__item slider__item_active';
  } else if (slider[4].className === 'slider__item slider__item_active') {
    slider[4].className = 'slider__item';
    slider[3].className = 'slider__item slider__item_active';
  } else if (slider[3].className === 'slider__item slider__item_active') {
    slider[3].className = 'slider__item';
    slider[2].className = 'slider__item slider__item_active';
  } else if (slider[2].className === 'slider__item slider__item_active') {
    slider[2].className = 'slider__item';
    slider[1].className = 'slider__item slider__item_active';
  } else if (slider[1].className === 'slider__item slider__item_active') {
    slider[1].className = 'slider__item';
    slider[0].className = 'slider__item slider__item_active';
  }
}

dottBtn[0].onclick = () => {
  if (slider[0].className !== 'slider__item slider__item_active') {
    slider[0].className = 'slider__item slider__item_active';
    slider[1].className = 'slider__item';
    slider[2].className = 'slider__item';
    slider[3].className = 'slider__item';
    slider[4].className = 'slider__item';
  }
}

dottBtn[1].onclick = () => {
  if (slider[1].className !== 'slider__item slider__item_active') {
    slider[1].className = 'slider__item slider__item_active';
    slider[2].className = 'slider__item';
    slider[3].className = 'slider__item';
    slider[4].className = 'slider__item';
    slider[0].className = 'slider__item';
  }
}

dottBtn[2].onclick = () => {
  if (slider[2].className !== 'slider__item slider__item_active') {
    slider[2].className = 'slider__item slider__item_active';
    slider[3].className = 'slider__item';
    slider[4].className = 'slider__item';
    slider[0].className = 'slider__item';
    slider[1].className = 'slider__item';
  }
}

dottBtn[3].onclick = () => {
  if (slider[3].className !== 'slider__item slider__item_active') {
    slider[3].className = 'slider__item slider__item_active';
    slider[4].className = 'slider__item';
    slider[0].className = 'slider__item';
    slider[1].className = 'slider__item';
    slider[2].className = 'slider__item';
  }
}

dottBtn[4].onclick = () => {
  if (slider[4].className !== 'slider__item slider__item_active') {
    slider[4].className = 'slider__item slider__item_active';
    slider[0].className = 'slider__item';
    slider[1].className = 'slider__item';
    slider[2].className = 'slider__item';
    slider[3].className = 'slider__item';
  }
}
