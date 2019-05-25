const dropdownList = document.querySelector('.dropdown__list');
const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

const handler1 = () => { dropdownList.classList.add('dropdown__list_active'); }
dropdownBtn.addEventListener('click', handler1);

const fnc = (event) => {
  if (dropdownItem[0].onclick) {
    dropdownList.classList.remove('dropdown__list_active');
    dropdownBtn.textContent = 'JavaScript';
    return false;
  } else if (dropdownItem[1].onclick) {
    dropdownList.classList.remove('dropdown__list_active');
    dropdownBtn.textContent = 'PHP';
    return false;
  } else if (dropdownItem[2].onclick) {
    dropdownList.classList.remove('dropdown__list_active');
    dropdownBtn.textContent = 'Python';
    return false;
  } else if (dropdownItem[3].onclick) {
    dropdownList.classList.remove('dropdown__list_active');
    dropdownBtn.textContent = 'Fortran';
    return false;
  }
}

dropdownItem.addEventListener('click', fnc);
