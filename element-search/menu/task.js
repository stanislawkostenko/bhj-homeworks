const menuItems = document.getElementsByClassName('menu_sub');
const linkItems = Array.from(document.querySelectorAll('li a.menu__link'));

linkItems[1].onclick = () => { menuItems[0].className = 'menu menu_sub menu_active';
                               menuItems[1].className = 'menu menu_sub';
                               return false;
                             }


linkItems[5].onclick = () => { menuItems[1].className = 'menu menu_sub menu_active';
                               menuItems[0].className = 'menu menu_sub';
                               return false;
                             }
