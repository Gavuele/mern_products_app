const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();
const port = 5001;
app.use(cors())
const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
];

// Serve static files
app.use(express.static(path.join(__dirname, '../frontend/public')));

// API endpoint to fetch products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
