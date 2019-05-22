//const openPopup = document.getElementById('modal_main').classList.add('modal_active');
const openPopup = document.getElementById('modal_main');
openPopup.className = 'modal modal_active';
const closeButton = document.getElementsByClassName('modal__close');

const closePopup = function() {
    //const penPopup = document.getElementById('modal_main').classList.remove('modal_active');
    openPopup.className = 'modal';
}
closeButton.onclick = closePopup;

//НЕ МОГУ ПОНЯТЬ КАК ЗАКРЫТЬ ОКНО. ДОЛГО ПЫТАЛСЯ, НИЧЕГО НЕ ПОМОГЛО. ЗАПУТАЛСЯ
