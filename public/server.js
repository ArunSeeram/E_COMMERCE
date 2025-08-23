app.post('/api/orders', async (req, res) => {
  try {
    const { name, email, address, phone, items, total } = req.body;
    
    if (!name || !email || !address || !phone || !items || items.length === 0 || !total) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const orderId = 'ORD-' + uuidv4().slice(0, 8).toUpperCase();
    const itemsString = JSON.stringify(items);
    const createdAt = new Date(); // Only if your table has a created_at field

    const sql = `
      INSERT INTO orders 
      (order_id, name, email, address, phone, items, total, created_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      orderId,
      name,
      email,
      address,
      phone,
      itemsString,
      total,       
      createdAt
    ];

    await db.execute(sql, values);

    console.log('🧾 Order ID generated:', orderId);
    res.status(201).json({ message: '✅ Order placed successfully!', orderId });

  } catch (err) {
    console.error('❌ Error inserting order:', err);
    res.status(500).json({ message: 'Failed to place order.' });
  }
});
