const adversity = document.querySelectorAll('rotator__case');

const changeAds = function() {
    const parentElement = this.closest('.rotator__case');
    for (let el of adversity) {
        if (parentElement.firstElementChild.classList.contains('rotator__case_active')) {
            parentElement.firstElementChild.classList.remove('rotator__case_active');
            parentElement.firstElementChild.nextElementSibling.classList.add('rotator__case_active');
        } else if (el.classList.contains('rotator__case_active')) {
            el.classList.remove('rotator__case_active');
            el.nextElementSibling.classList.add('rotator__case_active');
        } else if (parentElement.lastElementChild.classList.contains('rotator__case_active')) {
            parentElement.lastElementChild.classList.remove('rotator__case_active');
            parentElement.firstElementChild.classList.add('rotator__case_active');
        }
    }
}

setInterval(1000, changeAds());
