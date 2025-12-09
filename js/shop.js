// Machine Configuration
const machineConfig = {
    1: { name: 'Machine 1 - Vegetables', icon: '🥬', category: 'Vegetables' },
    2: { name: 'Machine 2 - Fruits', icon: '🍎', category: 'Fruits' },
    3: { name: 'Machine 3 - Chocolate', icon: '🍫', category: 'Chocolate & Sweets' },
    4: { name: 'Machine 4 - Stationery', icon: '✏️', category: 'Stationery' },
    5: { name: 'Machine 5 - Washing Items', icon: '🧼', category: 'Washing Items' },
    6: { name: 'Machine 6 - Ice Cream', icon: '🍦', category: 'Ice Cream' },
    7: { name: 'Machine 7 - Dairy', icon: '🥛', category: 'Dairy Products' },
    8: { name: 'Machine 8 - Kitchen Items', icon: '🍳', category: 'Kitchen & Cooking' }
};

// Shopping cart
let cart = [];
let currentMachineId = null;

// Check login status
function checkLogin() {
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// Load page
window.addEventListener('DOMContentLoaded', () => {
    if (!checkLogin()) return;
    
    currentMachineId = sessionStorage.getItem('selectedMachine');
    if (!currentMachineId) {
        window.location.href = 'index.html';
        return;
    }

    // Load cart from sessionStorage
    const savedCart = sessionStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }

    loadMachineInfo();
    loadProducts();
});

// Load machine information
function loadMachineInfo() {
    const machine = machineConfig[currentMachineId];
    document.getElementById('machineIcon').textContent = machine.icon;
    document.getElementById('machineTitle').textContent = machine.name;
}

// Load products
function loadProducts() {
    const products = getProductsByMachine(parseInt(currentMachineId));
    displayProducts(products);
}

// Display products
function displayProducts(products) {
    const productsSection = document.getElementById('productsSection');
    
    if (products.length === 0) {
        productsSection.innerHTML = '<p style="text-align: center; color: #9ca3af; padding: 40px;">No products available</p>';
        return;
    }

    productsSection.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p class="product-price">₹${product.price.toFixed(2)}</p>
            <p class="product-stock">Stock: ${product.stock} ${product.unit}</p>
            
            <div class="quantity-controls">
                <button onclick="changeQuantity(${product.id}, -1)">-</button>
                <input type="number" id="qty-${product.id}" value="1" min="1" max="${product.stock}" readonly>
                <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join('');
}

// Change quantity
function changeQuantity(productId, change) {
    const input = document.getElementById(`qty-${productId}`);
    let newValue = parseInt(input.value) + change;
    
    if (newValue < 1) newValue = 1;
    if (newValue > parseInt(input.max)) newValue = parseInt(input.max);
    
    input.value = newValue;
}

// Add to cart
function addToCart(productId) {
    const products = getProductsByMachine(parseInt(currentMachineId));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const qtyInput = document.getElementById(`qty-${productId}`);
    const quantity = parseInt(qtyInput.value);
    
    if (quantity > product.stock) {
        alert('❌ Not enough stock available!');
        return;
    }

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            unit: product.unit
        });
    }

    // Save cart to sessionStorage
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartDisplay();
    qtyInput.value = 1;
    
    // Show feedback
    alert(`✅ ${product.name} added to cart!`);
}

// Update cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalAmount.textContent = '0.00';
        return;
    }

    // Display cart items
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-header">
                <span class="cart-item-name">${item.name}</span>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
            <div class="cart-item-details">
                <span>${item.quantity} ${item.unit} × ₹${item.price.toFixed(2)}</span>
                <span>₹${(item.quantity * item.price).toFixed(2)}</span>
            </div>
        </div>
    `).join('');

    // Calculate total
    const total = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    totalAmount.textContent = total.toFixed(2);
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
}

// Clear cart
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
    }
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

// Generate bill
function generateBill() {
    if (cart.length === 0) {
        alert('❌ Cart is empty! Please add items first.');
        return;
    }

    // Save cart for bill page
    sessionStorage.setItem('billCart', JSON.stringify(cart));
    sessionStorage.setItem('billMachine', currentMachineId);
    
    // Clear cart
    cart = [];
    sessionStorage.setItem('cart', JSON.stringify(cart));
    
    // Redirect to bill page
    window.location.href = 'bill.html';
}

// Filter products by search
function filterProducts() {
    const searchQuery = document.getElementById('searchInput').value;
    const products = searchProducts(parseInt(currentMachineId), searchQuery);
    displayProducts(products);
}
