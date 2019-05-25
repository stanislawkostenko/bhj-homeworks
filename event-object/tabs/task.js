const tab = Array.from(document.getElementsByClassName('tab'));
const content = Array.from(document.getElementsByClassName('tab__content'));

tab[0].onclick = () => { if (tab[0].classList.contains('tab_active')) {
                           return false;
                         } else {
                           tab[0].classList.add('tab_active');
                           tab[1].classList.remove('tab_active');
                           tab[2].classList.remove('tab_active');
                           content[0].classList.add('tab__content_active');
                           content[1].classList.remove('tab__content_active');
                           content[2].classList.remove('tab__content_active');
                         }
                         return false;
                       }


tab[1].onclick = () => { if (tab[1].classList.contains('tab_active')) {
                           return false;
                         } else {
                           tab[1].classList.add('tab_active');
                           tab[0].classList.remove('tab_active');
                           tab[2].classList.remove('tab_active');
                           content[1].classList.add('tab__content_active');
                           content[0].classList.remove('tab__content_active');
                           content[2].classList.remove('tab__content_active');
                         }
                         return false;
                      }

tab[2].onclick = () => { if (tab[2].classList.contains('tab_active')) {
                           return false;
                         } else {
                           tab[2].classList.add('tab_active');
                           tab[0].classList.remove('tab_active');
                           tab[1].classList.remove('tab_active');
                           content[2].classList.add('tab__content_active');
                           content[0].classList.remove('tab__content_active');
                           content[1].classList.remove('tab__content_active');
                         }
                         return false;
                       }
