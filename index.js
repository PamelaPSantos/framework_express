const express = require('express');
const app = express();

app.use('/', (req, res) => {
    // res.send("Hello World!");
        res.json({
            data: [
                {id: 1, name: "João"},
                {id: 2, name: "Maria"},
                {id: 3, name: "Pedro"},
            ],
            count: 30,
            skip: 0,
            limit: 3,
            status: 200
        })
})

app.listen(8080, () => {
    console.log("Backend executando...");
})