# 🛒 Vistora Shopping Cart

A simple ReactJS-based shopping cart application built for the **Vistora AI Web Development Assignment**.  
This app allows users to browse products, add them to a cart, update quantities, remove items, and view total prices dynamically — all with a clean, responsive UI.

---

## 📌 Features

### Product List
- Displays products with **name, price, image, and stock availability**
- "Add to Cart" button for each product

### Shopping Cart
- Displays **product name, price, quantity, and total**
- Quantity update option with instant price recalculation
- Remove item button
- Shows **total price** for all cart items
- "Checkout" button with mock confirmation

### State Management
- **React Context API** + `useReducer` for global state
- Actions:
  - `ADD_TO_CART`
  - `REMOVE_FROM_CART`
  - `UPDATE_QUANTITY`

### UI & Styling
- Fully responsive layout
- Custom `global.css` styling
- No external UI libraries

---

## 📂 Folder Structure

