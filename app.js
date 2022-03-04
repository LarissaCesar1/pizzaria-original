const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá visitante!")
    console.log("Servidor rodando na porta 3000")
})

app.listen(3000);
