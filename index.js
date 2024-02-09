const express = require('express'); 
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log("Server is working on 3000 PORT!");
});
