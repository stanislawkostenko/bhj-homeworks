const blocks = document.querySelectorAll('.reveal');

const scrollBlocks = function () {
    for (let el of blocks) {
        const topOfBlock = el.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (topOfBlock < viewportHeight) {
            el.classList.add('reveal_active');
        }
    }
}

document.addEventListener('scroll', scrollBlocks);
