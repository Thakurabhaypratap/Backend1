// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Thakur Abhay Paratap Singh');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
