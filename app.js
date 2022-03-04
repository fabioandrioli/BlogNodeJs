express = require('express');
const app = express();
const databaseConnection = require('./config/sequelize')

databaseConnection.authenticate().then(
    console.log("Conectado com sucesso")
).catch(error => console.log(error));

app.get("/", (req, res) => {
    res.send("Olá, Mundo!");
})

app.listen(3000,() => {
    console.log("Servidor rodando");
})