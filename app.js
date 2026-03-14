const products = [
    { id: 1, name: "Liquid Chrome Lip", price: 34.00, image: "https://images.unsplash.com/photo-1555050455-f96634b5cba6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Nude-glow Palette", price: 58.00, image: "https://images.unsplash.com/photo-1768983224486-b4dcd179b4a5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Glitch Gloss", price: 28.00, image: "https://images.unsplash.com/photo-1643168186368-c42359c82573?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Cyber Blush", price: 42.00, image: "https://images.unsplash.com/photo-1625093525885-282384697917?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Aura Highlighter", price: 45.00, image: "https://images.unsplash.com/photo-1501728636520-11c972bd5e2e?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Meta Mascara", price: 30.00, image: "https://images.unsplash.com/photo-1725792826131-2c597a38dde6?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupCoreListeners();
    setupCursor();
    setupChatBot();
});

function renderProducts() {
    const grid = document.getElementById('product-grid');
    const template = document.getElementById('product-card-template');

    products.forEach(p => {
        const clone = template.content.cloneNode(true);
        const discountPrice = (p.price * 0.7).toFixed(2); // 30% Off logic

        clone.querySelector('.product__title').textContent = p.name;
        clone.querySelector('.price--discount').textContent = `$${discountPrice}`;
        clone.querySelector('.price--original').textContent = `$${p.price.toFixed(2)}`;
        clone.querySelector('.product__image').src = p.image;
        clone.querySelector('.product__add').onclick = () => addToCart(p, discountPrice);
        grid.appendChild(clone);
    });
}

function addToCart(product, discountedPrice) {
    cart.push({ ...product, price: parseFloat(discountedPrice) });
    updateCartUI();
    document.getElementById('cart-panel').classList.remove('cart--hidden');
    // Add a "pop" animation to the bag button
const bag = document.querySelector('.header-cart');
bag.style.transform = "scale(1.2)";
setTimeout(() => {
    bag.style.transform = "scale(1)";
}, 200);
}

function updateCartUI() {
    const list = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');
    const countDisplay = document.querySelector('.header-cart__count');
    
    list.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement('li');
        li.style.cssText = "display:flex; justify-content:space-between; margin-bottom:15px; font-size:0.9rem;";
        li.innerHTML = `<span>${item.name}</span> <b>$${item.price.toFixed(2)}</b>`;
        list.appendChild(li);
    });

    totalDisplay.textContent = `$${total.toFixed(2)}`;
    countDisplay.textContent = cart.length;
    document.getElementById('checkout-btn').disabled = cart.length === 0;
    document.getElementById('cart-empty-msg').style.display = cart.length ? 'none' : 'block';
    document.getElementById('checkout-btn').onclick = () => {
    // 1. Alert the user
    alert("Eid Mubarak! Your order is placed. ✨");
    
    // 2. Trigger the confetti
    throwConfetti();
    
    // 3. Clear the bag
    cart = [];
    updateCartUI();
    document.getElementById('cart-panel').classList.add('cart--hidden');
};

    }

function setupChatBot() {
    const chat = document.getElementById('ai-chat');
    const helpBtn = document.getElementById('help-trigger');
    const closeBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('chat-send');
    const input = document.getElementById('chat-input');
    const msgBox = document.getElementById('chat-messages');

    helpBtn.onclick = () => chat.classList.remove('chat--hidden');
    closeBtn.onclick = () => chat.classList.add('chat--hidden');

    sendBtn.onclick = () => {
        if (!input.value) return;
        msgBox.innerHTML += `<div class="user-msg">${input.value}</div>`;
        const val = input.value.toLowerCase();
        input.value = '';

        setTimeout(() => {
            let reply = "Our 30% off Eid sale is live! Use code **EID30**.";
            if (val.includes("lip") || val.includes("gloss")) reply = "The Liquid Chrome Lip is our #1 Eid pick!";
            if (val.includes("discount") || val.includes("sale")) reply = "Everything is 30% off automatically! ✨";
            
            msgBox.innerHTML += `<div class="bot-msg">${reply}</div>`;
            msgBox.scrollTop = msgBox.scrollHeight;
        }, 600);
    };
}

function setupCursor() {
    const glow = document.getElementById('cursor-glow');
    window.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX - 17}px, ${e.clientY - 17}px)`;
    });
}

function setupCoreListeners() {
    document.querySelector('[data-open-cart]').onclick = () => document.getElementById('cart-panel').classList.remove('cart--hidden');
    document.querySelector('[data-close-cart]').onclick = () => document.getElementById('cart-panel').classList.add('cart--hidden');
    document.getElementById('explore-btn').onclick = () => document.getElementById('catalog').scrollIntoView({behavior: 'smooth'});
    document.getElementById('footer-year').textContent = new Date().getFullYear();
    // Add this inside setupCoreListeners()
const modal = document.getElementById('welcome-modal');
const modalBtn = document.getElementById('close-modal-btn');

if (modalBtn) {
    modalBtn.onclick = () => {
        // Add a smooth fade out
        modal.style.transition = "opacity 0.5s ease";
        modal.style.opacity = "0";
        
        // Wait for animation to finish, then remove from view
        setTimeout(() => {
            modal.style.display = "none";
        }, 500);
    };
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

// Apply to all products after they are rendered
document.querySelectorAll('.product').forEach(p => observer.observe(p));
}