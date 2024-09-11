const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send("Hello World!");
})

app.listen(8080, () => {
    console.log("Backend executando...");
})