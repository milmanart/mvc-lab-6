const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const errorRoutes = require('./routes/error');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/book');

const app = express();

// Настройка каталога статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Настройка движка представлений
app.set('view engine', 'ejs');

// Настройка сессии
app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: true,
    })
);

// Добавление промежуточного ПО bodyParser
app.use(bodyParser.urlencoded({ extended: false }));

// Добавление маршрутизации
app.use('/user', userRoutes);
app.use('/books', bookRoutes);
app.use('*', errorRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
