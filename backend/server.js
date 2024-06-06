const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const app = express();
const port = 5000;

// Проксирование запросов к фронтенду
app.use('/', createProxyMiddleware({ target: 'http://localhost:5173', changeOrigin: true }));


// Разрешение доступа к статическим файлам фронтенда
app.use(express.static(path.join(__dirname, '../frontend/public')));

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
