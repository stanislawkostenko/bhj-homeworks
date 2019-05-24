const firstPopup = document.getElementById('modal_main');
firstPopup.className = 'modal modal_active';

const successPoppup = document.getElementById('modal_success');

const secondPopup = document.querySelector('div a.btn_danger');
secondPopup.onclick = function () { firstPopup.className = 'modal';
                                    successPoppup.className = 'modal modal_active'; }

const closePopup = document.getElementsByClassName('modal__close_times');
closePopup[0].onclick = function () { firstPopup.className = 'modal'; }
closePopup[1].onclick = function () { successPoppup.className = 'modal'; }
