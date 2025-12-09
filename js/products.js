// Products Database - Initialize with sample data
let productsDatabase = {
    1: [ // Vegetables
        { id: 101, name: 'Onion', price: 40, stock: 50, unit: 'kg', machine: 1 },
        { id: 102, name: 'Tomato', price: 30, stock: 45, unit: 'kg', machine: 1 },
        { id: 103, name: 'Potato', price: 25, stock: 60, unit: 'kg', machine: 1 },
        { id: 104, name: 'Green Chilli', price: 80, stock: 20, unit: 'kg', machine: 1 },
        { id: 105, name: 'Garlic', price: 120, stock: 30, unit: 'kg', machine: 1 },
        { id: 106, name: 'Ginger', price: 100, stock: 25, unit: 'kg', machine: 1 },
        { id: 107, name: 'Curry Leaves', price: 20, stock: 40, unit: 'bunch', machine: 1 },
        { id: 108, name: 'Coriander Leaves', price: 15, stock: 50, unit: 'bunch', machine: 1 },
        { id: 109, name: 'Spinach', price: 30, stock: 35, unit: 'kg', machine: 1 },
        { id: 110, name: 'Carrot', price: 45, stock: 40, unit: 'kg', machine: 1 },
        { id: 111, name: 'Beans', price: 50, stock: 30, unit: 'kg', machine: 1 },
        { id: 112, name: 'Capsicum', price: 60, stock: 25, unit: 'kg', machine: 1 },
        { id: 113, name: 'Brinjal', price: 35, stock: 40, unit: 'kg', machine: 1 },
        { id: 114, name: 'Ladies Finger', price: 40, stock: 35, unit: 'kg', machine: 1 },
        { id: 115, name: 'Cucumber', price: 30, stock: 45, unit: 'kg', machine: 1 }
    ],
    2: [ // Fruits
        { id: 201, name: 'Apple', price: 150, stock: 40, unit: 'kg', machine: 2 },
        { id: 202, name: 'Banana', price: 50, stock: 60, unit: 'dozen', machine: 2 },
        { id: 203, name: 'Orange', price: 80, stock: 45, unit: 'kg', machine: 2 },
        { id: 204, name: 'Grapes', price: 120, stock: 30, unit: 'kg', machine: 2 },
        { id: 205, name: 'Guava', price: 60, stock: 35, unit: 'kg', machine: 2 },
        { id: 206, name: 'Papaya', price: 40, stock: 40, unit: 'kg', machine: 2 },
        { id: 207, name: 'Pineapple', price: 50, stock: 25, unit: 'pc', machine: 2 },
        { id: 208, name: 'Watermelon', price: 30, stock: 20, unit: 'kg', machine: 2 },
        { id: 209, name: 'Mango', price: 180, stock: 35, unit: 'kg', machine: 2 },
        { id: 210, name: 'Pomegranate', price: 200, stock: 25, unit: 'kg', machine: 2 },
        { id: 211, name: 'Strawberry', price: 250, stock: 15, unit: 'kg', machine: 2 },
        { id: 212, name: 'Kiwi', price: 300, stock: 10, unit: 'kg', machine: 2 }
    ],
    3: [ // Chocolate
        { id: 301, name: 'Dark Chocolate Bar', price: 120, stock: 50, unit: 'pc', machine: 3 },
        { id: 302, name: 'Milk Chocolate', price: 100, stock: 60, unit: 'pc', machine: 3 },
        { id: 303, name: 'White Chocolate', price: 110, stock: 45, unit: 'pc', machine: 3 },
        { id: 304, name: 'Cocoa Powder', price: 250, stock: 30, unit: 'kg', machine: 3 },
        { id: 305, name: 'Chocolate Syrup', price: 180, stock: 35, unit: 'bottle', machine: 3 },
        { id: 306, name: 'Oreo Cookies', price: 50, stock: 70, unit: 'pack', machine: 3 },
        { id: 307, name: 'Chocolate Chips', price: 200, stock: 40, unit: 'kg', machine: 3 },
        { id: 308, name: 'Brownie Mix', price: 150, stock: 25, unit: 'box', machine: 3 }
    ],
    4: [ // Stationery
        { id: 401, name: 'HB Pencil', price: 5, stock: 100, unit: 'pc', machine: 4 },
        { id: 402, name: 'Blue Pen', price: 10, stock: 80, unit: 'pc', machine: 4 },
        { id: 403, name: 'Notebook', price: 40, stock: 60, unit: 'pc', machine: 4 },
        { id: 404, name: 'Eraser', price: 5, stock: 100, unit: 'pc', machine: 4 },
        { id: 405, name: 'Sharpener', price: 5, stock: 100, unit: 'pc', machine: 4 },
        { id: 406, name: 'Scale 30cm', price: 15, stock: 50, unit: 'pc', machine: 4 },
        { id: 407, name: 'Highlighter', price: 25, stock: 60, unit: 'pc', machine: 4 },
        { id: 408, name: 'Marker Pen', price: 30, stock: 50, unit: 'pc', machine: 4 },
        { id: 409, name: 'A4 Papers', price: 250, stock: 40, unit: 'pack', machine: 4 },
        { id: 410, name: 'Glue Stick', price: 20, stock: 70, unit: 'pc', machine: 4 },
        { id: 411, name: 'Stapler', price: 80, stock: 30, unit: 'pc', machine: 4 },
        { id: 412, name: 'Scissors', price: 50, stock: 45, unit: 'pc', machine: 4 }
    ],
    5: [ // Washing Items
        { id: 501, name: 'Surf Excel Powder', price: 350, stock: 40, unit: 'kg', machine: 5 },
        { id: 502, name: 'Ariel Liquid', price: 450, stock: 35, unit: 'ltr', machine: 5 },
        { id: 503, name: 'Vim Bar', price: 20, stock: 80, unit: 'pc', machine: 5 },
        { id: 504, name: 'Vim Liquid', price: 120, stock: 50, unit: 'bottle', machine: 5 },
        { id: 505, name: 'Lizol Floor Cleaner', price: 200, stock: 45, unit: 'ltr', machine: 5 },
        { id: 506, name: 'Harpic Toilet Cleaner', price: 180, stock: 50, unit: 'bottle', machine: 5 },
        { id: 507, name: 'Dettol Hand Wash', price: 150, stock: 60, unit: 'bottle', machine: 5 },
        { id: 508, name: 'Comfort Fabric Softener', price: 250, stock: 30, unit: 'ltr', machine: 5 },
        { id: 509, name: 'Steel Scrubber', price: 30, stock: 100, unit: 'pack', machine: 5 },
        { id: 510, name: 'Cleaning Gloves', price: 80, stock: 50, unit: 'pair', machine: 5 }
    ],
    6: [ // Ice Cream
        { id: 601, name: 'Vanilla Ice Cream', price: 200, stock: 30, unit: 'tub', machine: 6 },
        { id: 602, name: 'Chocolate Ice Cream', price: 220, stock: 28, unit: 'tub', machine: 6 },
        { id: 603, name: 'Strawberry Ice Cream', price: 230, stock: 25, unit: 'tub', machine: 6 },
        { id: 604, name: 'Mango Ice Cream', price: 240, stock: 22, unit: 'tub', machine: 6 },
        { id: 605, name: 'Butterscotch Ice Cream', price: 250, stock: 20, unit: 'tub', machine: 6 },
        { id: 606, name: 'Coffee Ice Cream', price: 260, stock: 18, unit: 'tub', machine: 6 },
        { id: 607, name: 'Coconut Ice Cream', price: 240, stock: 20, unit: 'tub', machine: 6 },
        { id: 608, name: 'Ice Cream Cone', price: 10, stock: 100, unit: 'pc', machine: 6 },
        { id: 609, name: 'Chocolate Syrup', price: 150, stock: 40, unit: 'bottle', machine: 6 },
        { id: 610, name: 'Sprinkles', price: 80, stock: 50, unit: 'pack', machine: 6 }
    ],
    7: [ // Dairy
        { id: 701, name: 'Fresh Milk', price: 60, stock: 50, unit: 'ltr', machine: 7 },
        { id: 702, name: 'Butter', price: 500, stock: 30, unit: 'kg', machine: 7 },
        { id: 703, name: 'Cheese Slice', price: 200, stock: 40, unit: 'pack', machine: 7 },
        { id: 704, name: 'Paneer', price: 400, stock: 25, unit: 'kg', machine: 7 },
        { id: 705, name: 'Curd', price: 50, stock: 45, unit: 'kg', machine: 7 },
        { id: 706, name: 'Buttermilk', price: 30, stock: 60, unit: 'ltr', machine: 7 },
        { id: 707, name: 'Ghee', price: 600, stock: 20, unit: 'kg', machine: 7 },
        { id: 708, name: 'Cream', price: 300, stock: 30, unit: 'ltr', machine: 7 },
        { id: 709, name: 'Condensed Milk', price: 180, stock: 35, unit: 'can', machine: 7 }
    ],
    8: [ // Kitchen Items
        { id: 801, name: 'Salt', price: 20, stock: 100, unit: 'kg', machine: 8 },
        { id: 802, name: 'Sugar', price: 45, stock: 80, unit: 'kg', machine: 8 },
        { id: 803, name: 'Chilli Powder', price: 120, stock: 50, unit: 'kg', machine: 8 },
        { id: 804, name: 'Turmeric Powder', price: 150, stock: 45, unit: 'kg', machine: 8 },
        { id: 805, name: 'Coriander Powder', price: 100, stock: 50, unit: 'kg', machine: 8 },
        { id: 806, name: 'Garam Masala', price: 200, stock: 30, unit: 'kg', machine: 8 },
        { id: 807, name: 'Rice', price: 60, stock: 100, unit: 'kg', machine: 8 },
        { id: 808, name: 'Wheat Flour', price: 40, stock: 90, unit: 'kg', machine: 8 },
        { id: 809, name: 'Cooking Oil', price: 180, stock: 60, unit: 'ltr', machine: 8 },
        { id: 810, name: 'Ghee', price: 600, stock: 25, unit: 'kg', machine: 8 },
        { id: 811, name: 'Toor Dal', price: 120, stock: 50, unit: 'kg', machine: 8 },
        { id: 812, name: 'Moong Dal', price: 130, stock: 45, unit: 'kg', machine: 8 },
        { id: 813, name: 'Water Bottle', price: 500, stock: 40, unit: 'pc', machine: 8 },
        { id: 814, name: 'Steel Tumbler', price: 150, stock: 50, unit: 'pc', machine: 8 },
        { id: 815, name: 'Plastic Glass', price: 30, stock: 100, unit: 'pc', machine: 8 }
    ]
};

// Initialize localStorage if empty
function initializeProducts() {
    if (!localStorage.getItem('productsDatabase')) {
        localStorage.setItem('productsDatabase', JSON.stringify(productsDatabase));
    }
}

// Get all products
function getAllProducts() {
    initializeProducts();
    return JSON.parse(localStorage.getItem('productsDatabase'));
}

// Get products by machine
function getProductsByMachine(machineId) {
    const allProducts = getAllProducts();
    return allProducts[machineId] || [];
}

// Save products
function saveProducts(products) {
    localStorage.setItem('productsDatabase', JSON.stringify(products));
}

// Add new product
function addProduct(product) {
    const allProducts = getAllProducts();
    const machineId = product.machine;
    
    if (!allProducts[machineId]) {
        allProducts[machineId] = [];
    }
    
    // Generate new ID
    const maxId = Math.max(...allProducts[machineId].map(p => p.id), machineId * 100);
    product.id = maxId + 1;
    
    allProducts[machineId].push(product);
    saveProducts(allProducts);
    return product;
}

// Update product
function updateProduct(productId, updatedProduct) {
    const allProducts = getAllProducts();
    const machineId = updatedProduct.machine;
    
    const index = allProducts[machineId].findIndex(p => p.id === productId);
    if (index !== -1) {
        allProducts[machineId][index] = { ...allProducts[machineId][index], ...updatedProduct };
        saveProducts(allProducts);
        return true;
    }
    return false;
}

// Delete product
function deleteProduct(machineId, productId) {
    const allProducts = getAllProducts();
    
    if (allProducts[machineId]) {
        allProducts[machineId] = allProducts[machineId].filter(p => p.id !== productId);
        saveProducts(allProducts);
        return true;
    }
    return false;
}

// Search products
function searchProducts(machineId, query) {
    const products = getProductsByMachine(machineId);
    if (!query) return products;
    
    return products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
}

// Initialize on load
initializeProducts();
