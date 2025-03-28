let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'flex justify-between items-center bg-gray-800 p-4 rounded-lg mb-4';
        itemDiv.innerHTML = `
            <span>${item.name} - KSh ${item.price} x ${item.quantity}</span>
            <button class="text-red-400 remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });

    cartTotal.textContent = `Total: KSh ${total}`;
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            saveCart();
            updateCartDisplay();
        });
    });
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const name = e.target.dataset.name;
        const price = parseInt(e.target.dataset.price);
        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        saveCart();
        alert(`${name} added to cart!`);
    });
});

if (document.getElementById('cart-items')) {
    updateCartDisplay();
}

document.getElementById('checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    window.location.href = `https://www.paypal.com/cgi-bin/webscr?cmd=_cart&business=YOUR_PAYPAL_EMAIL&currency_code=KES`;    // Add payment gateway redirect here
});