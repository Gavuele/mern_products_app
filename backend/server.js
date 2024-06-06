const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware
app.use(cors());

// Static files
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Existing API endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'http://localhost:5000/'));
});

// Existing API endpoint
app.get('/api/someendpoint', (req, res) => {
    // Handle some endpoint logic
});

// New API endpoint to fetch products
const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
