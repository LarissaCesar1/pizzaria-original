const express = require('express');
const app = express(); 
const PizzasRouter = require('./routes/PizzasRouter');

app.get('/', (req, res) => {
    res.send("Olá visitante!")
    console.log("Servidor rodando na porta 3000")
})
app.use('/',PizzasRouter); 
app.listen(3000);
