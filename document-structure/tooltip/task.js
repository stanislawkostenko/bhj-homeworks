const buttons = document.querySelectorAll('.has-tooltip');

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const tooltipActive = document.querySelector('.tooltip_active');
        if (tooltipActive) {
            tooltipActive.classList.remove('tooltip_active');
        }
        event.target.nextSibling.classList.add('tooltip_active');
    });
    const tooltip = `<div class="tooltip">${button.title}</div>`;
    button.insertAdjacentHTML('afterEnd', tooltip);
}
