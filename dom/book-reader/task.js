const text = document.getElementById('book');
const button = Array.from(document.querySelectorAll('.font-size'));

button[0].onclick = () => {
  if (button[0].classList.contains('font-size font-size_small font-size_active')) {
    return false;
  } else {
    text.classList.remove('book_fs-big');
    text.classList.add('book_fs-small');
    button[0].classList.add('font-size_active');
    button[1].classList.remove('font-size_active');
    button[2].classList.remove('font-size_active');
  }
  return false;
}

button[1].onclick = () => {
  if (button[1].classList.contains('font-size font-size_small font-size_active')) {
    return false;
  } else {
    text.classList.remove('book_fs-small');
    text.classList.remove('book_fs-big');
    button[1].classList.add('font-size_active');
    button[0].classList.remove('font-size_active');
    button[2].classList.remove('font-size_active');
  }
  return false;
}

button[2].onclick = () => {
  if (button[2].classList.contains('font-size font-size_small font-size_active')) {
    return false;
  } else {
    text.classList.remove('book_fs-small');
    text.classList.add('book_fs-big');
    button[2].classList.add('font-size_active');
    button[1].classList.remove('font-size_active');
    button[0].classList.remove('font-size_active');
  }
  return false;
}
