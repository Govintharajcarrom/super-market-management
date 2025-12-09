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

// Load bill on page load
window.addEventListener('DOMContentLoaded', () => {
    const billCart = sessionStorage.getItem('billCart');
    const machineId = sessionStorage.getItem('billMachine');
    
    if (!billCart || !machineId) {
        alert('No bill data found!');
        window.location.href = 'index.html';
        return;
    }

    const cart = JSON.parse(billCart);
    const machine = machineConfig[machineId];
    
    generateBillDisplay(cart, machine);
    
    // Clear bill data
    sessionStorage.removeItem('billCart');
    sessionStorage.removeItem('billMachine');
});

// Generate bill display
function generateBillDisplay(cart, machine) {
    // Generate bill number and date
    const billNo = 'BIL' + Date.now();
    const now = new Date();
    const billDate = now.toLocaleDateString('en-IN');
    const billTime = now.toLocaleTimeString('en-IN');
    
    // Update bill header
    document.getElementById('billNo').textContent = billNo;
    document.getElementById('billDate').textContent = billDate;
    document.getElementById('billTime').textContent = billTime;
    document.getElementById('billMachine').textContent = machine.name;
    
    // Generate bill items
    const billItems = document.getElementById('billItems');
    billItems.innerHTML = cart.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity} ${item.unit}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>₹${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
    `).join('');
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    const tax = subtotal * 0.05; // 5% tax
    const grandTotal = subtotal + tax;
    
    document.getElementById('billSubtotal').textContent = subtotal.toFixed(2);
    document.getElementById('billTax').textContent = tax.toFixed(2);
    document.getElementById('billGrandTotal').textContent = grandTotal.toFixed(2);
}
