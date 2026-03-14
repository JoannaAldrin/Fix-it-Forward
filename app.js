
const products = [
    {
        id: 1,
        name: "Liquid Chrome Lip",
        description: "Hyper-reflective metallic pigment with 12h wear.",
        price: 34.00,
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", 
        badge: "NEW",
        stock: 12
    },
    {
        id: 2,
        name: "Neon-Pulse Palette",
        description: "12 UV-reactive pressed pigments for the future.",
        price: 58.00,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=800",
        badge: "BESTSELLER",
        stock: 5
    },
    {
        id: 3,
        name: "Glitch Gloss",
        description: "Holographic high-shine finish with plumping tech.",
        price: 28.00,
        image: "https://images.unsplash.com/photo-1599733594230-6b823276abcc?auto=format&fit=crop&q=80&w=800",
        badge: "LIMITED",
        stock: 20
    }
];

let cart = [];

const productGrid = document.getElementById('product-grid');
const productTemplate = document.getElementById('product-card-template');
const cartPanel = document.getElementById('cart-panel');
const cartItemsList = document.getElementById('cart-items');
const cartCountLabel = document.querySelector('.header-cart__count');
const subtotalDisplay = document.getElementById('cart-subtotal');
const totalDisplay = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    setupEventListeners();
    updateYear();
});


function renderProducts(productsToRender) {
    productGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const clone = productTemplate.content.cloneNode(true);
        
    
        clone.querySelector('.product').dataset.productId = product.id;
        clone.querySelector('.product__title').textContent = product.name;
        clone.querySelector('.product__image').src = product.image;
        clone.querySelector('.product__image').alt = product.name;
        clone.querySelector('.product__price').textContent = `$${product.price.toFixed(2)}`;
        clone.querySelector('.product__badge').textContent = product.badge;

    
        clone.querySelector('.product__add').addEventListener('click', () => {
            addToCart(product.id);
        });

        productGrid.appendChild(clone);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    openCart();
}

function updateCartUI() {

    cartItemsList.innerHTML = '';
    
    let subtotal = 0;
    let count = 0;

    cart.forEach(item => {
        subtotal += item.price * item.quantity;
        count += item.quantity;

        const li = document.createElement('li');
        li.className = 'cart__item';
        li.innerHTML = `
            <div>
                <div class="cart__item-title"><strong>${item.name}</strong></div>
                <div class="cart__item-meta">${item.quantity} x $${item.price}</div>
            </div>
            <div class="cart__item-actions">
                <button onclick="removeFromCart(${item.id})" style="border:none; background:none; cursor:pointer;">✕</button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });


    cartCountLabel.textContent = count;
    subtotalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    totalDisplay.textContent = `$${subtotal.toFixed(2)}`;
    

    document.getElementById('cart-empty-msg').style.display = cart.length ? 'none' : 'block';
    checkoutBtn.disabled = cart.length === 0;
}

window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};


function setupEventListeners() {
   
    document.querySelector('[data-open-cart]').addEventListener('click', openCart);
    document.querySelector('[data-close-cart]').addEventListener('click', closeCart);

 
    document.getElementById('search-input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.description.toLowerCase().includes(term)
        );
        renderProducts(filtered);
    });


    checkoutBtn.addEventListener('click', () => {
        const status = document.getElementById('checkout-status');
        status.textContent = "Processing secure transaction...";
        setTimeout(() => {
            status.textContent = "Success! Your future arrived.";
            cart = [];
            updateCartUI();
        }, 2000);
    });
}

function openCart() {
    cartPanel.classList.remove('cart--hidden');
  
    cartPanel.style.transform = "translateX(0)";
}

function closeCart() {
    cartPanel.classList.add('cart--hidden');
    cartPanel.style.transform = "translateX(110%)";
}

function updateYear() {
    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
}