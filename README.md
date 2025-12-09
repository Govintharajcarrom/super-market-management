# Smart Supermarket System

A modern, frontend-only smart supermarket management system with 8 separate machine interfaces, similar to ATM card-based systems.

## 🎯 Features

### User Features
- **8 Separate Machine Interfaces**
  - Machine 1: Vegetables 🥬
  - Machine 2: Fruits 🍎
  - Machine 3: Chocolate & Sweets 🍫
  - Machine 4: Stationery ✏️
  - Machine 5: Washing Items 🧼
  - Machine 6: Ice Cream 🍦
  - Machine 7: Dairy Products 🥛
  - Machine 8: Kitchen & Cooking Items 🍳

- **Card-Based Login System**
  - Each machine requires card number and PIN
  - Demo credentials: Card `1234`, PIN `1234`

- **Shopping Interface**
  - Browse products by machine category
  - Search functionality for quick item lookup
  - Add items to cart with quantity controls
  - Real-time cart updates

- **Bill Generation**
  - Detailed bill with all items
  - Automatic tax calculation (5%)
  - Print-ready format
  - Unique bill number with timestamp

### Admin Features
- **Dashboard**
  - Total products overview
  - Products count by machine
  - Visual statistics

- **Product Management (CRUD)**
  - ✅ **Create**: Add new products
  - 📖 **Read**: View all products with filters
  - ✏️ **Update**: Edit existing products
  - 🗑️ **Delete**: Remove products

- **Filtering & Search**
  - Filter by machine category
  - Real-time search across products

## 🗂️ Project Structure

```
Govind java project/
├── index.html          # Main landing page (machine selection)
├── login.html          # Login page for each machine
├── shop.html           # Shopping interface
├── bill.html           # Bill generation page
├── admin.html          # Admin panel
├── css/
│   └── style.css       # Complete styling
└── js/
    ├── main.js         # Main navigation logic
    ├── login.js        # Login authentication
    ├── products.js     # Product database management
    ├── shop.js         # Shopping cart logic
    ├── bill.js         # Bill generation
    └── admin.js        # Admin CRUD operations
```

## 🚀 How to Run

1. **Open the project**
   - Navigate to: `c:\Govind java project\`

2. **Launch in browser**
   - Right-click `index.html` → Open with → Browser
   - Or simply double-click `index.html`

3. **Start shopping**
   - Select any machine (1-8)
   - Login with: Card `1234`, PIN `1234`
   - Browse and add items to cart
   - Generate bill

4. **Admin Access**
   - Click "Admin Login" on home page
   - Manage products (Add/Edit/Delete)

## 💾 Data Storage

- Uses **localStorage** for persistent product data
- Uses **sessionStorage** for cart and login sessions
- All data stored in browser (no backend required)

## 🎨 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern design
- **JavaScript (Vanilla)** - All functionality
- **LocalStorage/SessionStorage** - Data persistence

## 📦 Pre-loaded Products

The system comes with **100+ pre-loaded products** across all 8 machines:
- Vegetables (15 items)
- Fruits (12 items)
- Chocolate (8 items)
- Stationery (12 items)
- Washing Items (10 items)
- Ice Cream (10 items)
- Dairy (9 items)
- Kitchen Items (15 items)

## 🔑 Default Credentials

**User Login:**
- Card Number: `1234`
- PIN: `1234`

**Admin Access:**
- Click "Admin Login" button on home page
- No password required (can be added if needed)

## 📱 Responsive Design

- Works on desktop, tablet, and mobile
- Adaptive grid layouts
- Touch-friendly buttons
- Mobile-optimized cart sidebar

## 🎯 Key Functionalities

### Shopping Flow
1. Select Machine → Login → Browse → Add to Cart → Generate Bill

### Admin Flow
1. Dashboard → View Stats → Manage Products → Add/Edit/Delete

### Features Implemented
✅ Multi-machine system (8 machines)
✅ Card-based authentication
✅ Product search and filtering
✅ Shopping cart with quantity controls
✅ Bill generation with tax
✅ Admin CRUD operations
✅ LocalStorage persistence
✅ Responsive design
✅ Print-ready bills

## 🔧 Customization

### Adding More Products
1. Go to Admin Panel
2. Click "Add Product"
3. Fill in details and save

### Changing Login Credentials
Edit `js/login.js`:
```javascript
if (cardNumber === 'YOUR_CARD' && pin === 'YOUR_PIN') {
    // Login logic
}
```

### Modifying Machine Categories
Edit `machineConfig` in any JS file:
```javascript
const machineConfig = {
    1: { name: 'Your Category', icon: '🎯', category: 'Category Name' }
    // ...
};
```

## 📄 License

This project is for educational purposes.

## 👨‍💻 Author

Govind - Smart Supermarket System

---

**Enjoy shopping! 🛒✨**
