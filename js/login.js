// Machine Configuration (same as main.js)
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

// Load machine info on page load
window.addEventListener('DOMContentLoaded', () => {
    const machineId = sessionStorage.getItem('selectedMachine');
    
    if (!machineId) {
        window.location.href = 'index.html';
        return;
    }

    const machine = machineConfig[machineId];
    document.getElementById('machineIcon').textContent = machine.icon;
    document.getElementById('machineTitle').textContent = machine.name;
    document.getElementById('machineCategory').textContent = machine.category;
});

// Handle login form submission
function handleLogin(event) {
    event.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const pin = document.getElementById('pin').value;
    
    // Simple validation (in real app, this would be server-side)
    if (cardNumber === '1234' && pin === '1234') {
        // Store login session
        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('cardNumber', cardNumber);
        
        // Redirect to shop
        window.location.href = 'shop.html';
    } else {
        alert('❌ Invalid card number or PIN! Try: 1234 / 1234');
    }
}
