const buttons = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        event.preventDefault();const title = event.target.getAttribute('title');
        const y = event.target.getBoundingClientRect().top;
	      const x = event.target.getBoundingClientRect().left;
	      tooltip.textContent = title;
	      tooltip.style.display = 'block';
	      tooltip.style.top = `${y + 20}px`;
	      tooltip.style.left = `${x}px`;
     });
   }

document.addEventListener('scroll', () => {
	tooltip.style.display = 'none';
});
