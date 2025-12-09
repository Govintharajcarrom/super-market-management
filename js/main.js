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

// Navigate to machine login
function goToMachine(machineId) {
    sessionStorage.setItem('selectedMachine', machineId);
    window.location.href = 'login.html';
}
