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

let allProducts = {};

// Load page
window.addEventListener('DOMContentLoaded', () => {
    allProducts = getAllProducts();
    showSection('dashboard');
    loadDashboard();
});

// Show section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).classList.add('active');
    
    // Add active to clicked button
    event.target.classList.add('active');
    
    // Load data based on section
    if (sectionName === 'dashboard') {
        loadDashboard();
    } else if (sectionName === 'products') {
        loadProductsTable();
    }
}

// Load Dashboard
function loadDashboard() {
    // Calculate total products
    let totalProducts = 0;
    for (let machineId in allProducts) {
        totalProducts += allProducts[machineId].length;
    }
    
    document.getElementById('totalProducts').textContent = totalProducts;
    
    // Machine summary
    const machineSummary = document.getElementById('machineSummary');
    let summaryHTML = '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">';
    
    for (let machineId in machineConfig) {
        const machine = machineConfig[machineId];
        const count = allProducts[machineId] ? allProducts[machineId].length : 0;
        
        summaryHTML += `
            <div style="background: #f3f4f6; padding: 15px; border-radius: 10px; text-align: center;">
                <div style="font-size: 2rem;">${machine.icon}</div>
                <div style="font-weight: bold; margin: 10px 0;">${machine.category}</div>
                <div style="color: #2563eb; font-size: 1.5rem; font-weight: bold;">${count}</div>
                <div style="font-size: 0.9rem; color: #6b7280;">Products</div>
            </div>
        `;
    }
    
    summaryHTML += '</div>';
    machineSummary.innerHTML = summaryHTML;
}

// Load Products Table
function loadProductsTable() {
    allProducts = getAllProducts();
    filterAdminProducts();
}

// Filter admin products
function filterAdminProducts() {
    const machineFilter = document.getElementById('machineFilter').value;
    const searchQuery = document.getElementById('adminSearch').value.toLowerCase();
    const tbody = document.getElementById('productsTableBody');
    
    let filteredProducts = [];
    
    if (machineFilter === 'all') {
        // Get all products
        for (let machineId in allProducts) {
            filteredProducts = filteredProducts.concat(
                allProducts[machineId].map(p => ({ ...p, machineId: parseInt(machineId) }))
            );
        }
    } else {
        const machineId = parseInt(machineFilter);
        if (allProducts[machineId]) {
            filteredProducts = allProducts[machineId].map(p => ({ ...p, machineId }));
        }
    }
    
    // Apply search filter
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(p => 
            p.name.toLowerCase().includes(searchQuery)
        );
    }
    
    // Display products
    if (filteredProducts.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #9ca3af;">No products found</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredProducts.map(product => `
        <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${machineConfig[product.machineId].category}</td>
            <td>₹${product.price.toFixed(2)}</td>
            <td>${product.stock} ${product.unit}</td>
            <td>
                <button class="action-btn edit-btn" onclick="editProduct(${product.machineId}, ${product.id})">Edit</button>
                <button class="action-btn delete-btn" onclick="deleteProductConfirm(${product.machineId}, ${product.id})">Delete</button>
            </td>
        </tr>
    `).join('');
}

// Edit product
function editProduct(machineId, productId) {
    const product = allProducts[machineId].find(p => p.id === productId);
    
    if (!product) return;
    
    // Switch to add section
    showSectionDirect('add');
    
    // Fill form
    document.getElementById('editProductId').value = productId;
    document.getElementById('productName').value = product.name;
    document.getElementById('productMachine').value = machineId;
    document.getElementById('productPrice').value = product.price;
    document.getElementById('productStock').value = product.stock;
    document.getElementById('productUnit').value = product.unit;
    
    document.getElementById('formTitle').textContent = 'Edit Product';
}

// Delete product
function deleteProductConfirm(machineId, productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        deleteProduct(machineId, productId);
        allProducts = getAllProducts();
        loadProductsTable();
        loadDashboard();
        alert('✅ Product deleted successfully!');
    }
}

// Save product (Add or Update)
function saveProduct(event) {
    event.preventDefault();
    
    const productId = document.getElementById('editProductId').value;
    const name = document.getElementById('productName').value;
    const machine = parseInt(document.getElementById('productMachine').value);
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);
    const unit = document.getElementById('productUnit').value || 'pc';
    
    const productData = {
        name,
        machine,
        price,
        stock,
        unit
    };
    
    if (productId) {
        // Update existing product
        productData.id = parseInt(productId);
        updateProduct(parseInt(productId), productData);
        alert('✅ Product updated successfully!');
    } else {
        // Add new product
        addProduct(productData);
        alert('✅ Product added successfully!');
    }
    
    allProducts = getAllProducts();
    resetForm();
    loadDashboard();
    showSectionDirect('products');
    loadProductsTable();
}

// Reset form
function resetForm() {
    document.getElementById('productForm').reset();
    document.getElementById('editProductId').value = '';
    document.getElementById('formTitle').textContent = 'Add New Product';
}

// Show section directly (without event)
function showSectionDirect(sectionName) {
    // Hide all sections
    document.querySelectorAll('.admin-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${sectionName}-section`).classList.add('active');
    
    // Add active to corresponding button
    const buttons = document.querySelectorAll('.nav-btn');
    if (sectionName === 'dashboard') buttons[0].classList.add('active');
    else if (sectionName === 'products') buttons[1].classList.add('active');
    else if (sectionName === 'add') buttons[2].classList.add('active');
}
