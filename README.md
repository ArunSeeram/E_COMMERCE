# 🛍️ Narayanisilks - Saree E-Commerce Platform

Narayanisilks is a full-stack e-commerce web application built for selling sarees online. It features a user-friendly frontend, a secure backend with a MySQL database, and dynamic product management.

---

## 🚀 Features

### 🖥️ Frontend (HTML + Bootstrap + Vanilla JS)
- Product catalog with images, descriptions, and prices
- Add-to-cart functionality
- Responsive layout for mobile and desktop
- Customer order form with validation
- Dynamic cart updates without page reload

### 🛠️ Backend (Node.js + Express.js + MySQL)
- REST API for:
  - Fetching products
  - Submitting orders
- Stores order data in a MySQL database
- Sanitized input and proper error handling

---

## 📦 Tech Stack

| Frontend        | Backend         | Database |
|----------------|----------------|----------|
| HTML/CSS       | Node.js        | MySQL    |
| Bootstrap 5    | Express.js     |          |
| Vanilla JS     | Nodemon (dev)  |          |

---

## 📁 Folder Structure

narayanisilks/
├── backend/
│ ├── server.js
│ ├── db.js
│ └── routes/
│ └── products.js
├── frontend/
│ ├── index.html
│ ├── styles.css
│ ├── products.js
│ └── cart.js
├── public/
│ └── saree-images/
├── .env
├── package.json
└── README.md
