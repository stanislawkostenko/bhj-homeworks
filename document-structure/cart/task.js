const minus = document.getElementsByClassName('product__quantity-control_dec');
const plus = document.getElementsByClassName('product__quantity-control_inc');
const count = document.getElementsByClassName('product__quantity-value');
const add = document.getElementsByClassName('product__add');
const cart = document.getElementsByClassName('cart__products').item(0);


const minusItem = (event) => {
    if (parseInt(count.item(event).textContent) > 1) {
        count.item(event).textContent = parseInt(count.item(event).textContent) - 1;
    }
}

const plusItem = (event) => {
    count.item(event).textContent = parseInt(count.item(event).textContent) + 1;
}


const addProduct = (event) => {
    if (document.getElementById(`${event}`) != null) {
        let cartItem = document.getElementById(`${event}`);
        cartItem.textContent = parseInt(cartItem.textContent) + parseInt(count.item(event).textContent);
        return;
    } else {
        cart.insertAdjacentHTML('beforeend',
        `<div class="cart__product-${event}" data-id="${event}">
            <img class="cart__product-image" src="${document.getElementsByClassName('product__image').item(event).src}">
            <div class="cart__product-count" id="${event}">${count.item(event).textContent}</div>
        </div>`);
    }
}


for (let i = 0; minus.length > i; i++) {
    let l = i;
    minus.item(i).onclick = () => {
        minusItem(l);
    };
    plus.item(i).onclick = () => {
        plusItem(l);
    };
    add.item(i).onclick = () => {
        addProduct(l);
    };
}
