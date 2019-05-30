const interest = Array.from(document.querySelectorAll('.interest__check'));

interest.addEventListener('click', () => {
    for (let i of interest) {
        if (interest.checked) {
            interest.children.checked = true;
        }

    }
});
