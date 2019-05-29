const tabs = Array.from(document.querySelectorAll('.tab'));
const contents = document.querySelectorAll('.tab__content');

for (let tab in tabs) {
    tabs[tab].addEventListener('click', function(event) {
        for (let i in tabs) {
            tabs[i].classList.remove('tab_active');
            contents[i].classList.remove('tab__content_active');
        }
        event.target.classList.add('tab_active');
        contents[tabs.indexOf(event.target)].classList.add('tab__content_active');
    });
}
