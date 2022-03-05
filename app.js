const express = require('express');
const app = express();
const connection = require('./config/connection')
const indexRoutes = require("./routes/indexRouter");
const path = require('path');
const bodyParser = require('body-parser')


// Definindo caminho da views
app.set('views', path.join(__dirname, 'views'));

//configuracao do engine para o front-end - main é template padrao da aplicacao
// app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
// app.set('views engine','handlebars');

app.set("view engine", "ejs");

//body-parser para pegar dados do formulario
// com ele podemos usar o req.body.nomedataghtml
// app.use(express.urlencoded({extended: true}));
// app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

//Configuracao do diretório publico
app.use(express.static(__dirname + '/public'));



//conexao com o banco de dados mysql
connection.databaseConnection.authenticate();

//Rotas
 app.use("/",indexRoutes);
// app.get('/', (req, res) => {
//     res.render('formulario.handlebars')
// })


app.listen(3000,() => {
    console.log("Servidor rodando");
})