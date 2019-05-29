const dropdownList = document.querySelector('.dropdown__list');
const dropdownBtn = document.querySelector('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownBtn.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
});

for (let item of dropdownItems) {
    item.addEventListener('click', function(event) {
        dropdownBtn.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        event.preventDefault();
    });
}
