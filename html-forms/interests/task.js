const interests = document.querySelectorAll('.interest__check');

for (let i = 0; i < interests.length; i++) {
    interests[i].addEventListener('click', () => {
        const parent = interests[i].closest('li');
        const highTree = parent.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
        highTree.checked = interests[i].checked;
        const lowTree = parent.childNodes[3].childNodes[3].childNodes[1].childNodes[1];
        lowTree.checked = interests[i].checked;
    });
}
