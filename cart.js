let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item) {
    cart.push(item);
    saveCartToLocalStorage();
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    displayCart();
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function displayCart() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    for(let i = 0; i < cart.length; i++) {
        let item = document.createElement('li');
        item.textContent = cart[i];
        
        let removeButton = document.createElement('button');
        removeButton.style.color = 'white';
        removeButton.textContent = '제거';
        
        (function(index) {
            removeButton.addEventListener('click', function() {
                removeFromCart(index);
            });
        })(i);

        item.appendChild(removeButton);
        cartList.appendChild(item);
    }
}

// 처음 페이지 로드 시 장바구니 출력
displayCart();
