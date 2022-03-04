express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const databaseConnection = require('./config/connection')

//configuracao do engine para o front-end - main é template padrao da aplicacao
var handle = handlebars.create({defaultLayout:'main'})
app.engine('handlebars',handle.engine)
app.set('views engine','handlebars');

//conexao com o banco de dados mysql
databaseConnection.authenticate();


app.listen(3000,() => {
    console.log("Servidor rodando");
})