const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// MySQL Connection using MYSQL_URL from Railway
let db;
mysql.createConnection(process.env.MYSQL_URL)
  .then(connection => {
    db = connection;
    console.log("🟢 Connected to MySQL");
  })
  .catch(err => {
    console.error("❌ MySQL connection error:", err);
  });

// Serve HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'store.html'));
});

// Handle Order Submission
app.post('/api/orders', async (req, res) => {
  const { name, email, address, phone, items, total } = req.body;

  if (!name || !email || !address || !items || !Array.isArray(items)) {
    return res.status(400).json({ message: 'Invalid order data' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO orders (name, email, address, phone, items, total) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, address, phone, JSON.stringify(items), total]
    );

    const orderId = result.insertId;
    res.status(201).json({ message: 'Order placed successfully!', orderId });
  } catch (err) {
    console.error('❌ Error placing order:', err);
    res.status(500).json({ message: 'Failed to place order' });
  }
});

// Start Server
app.listen(port, "0.0.0.0", () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
