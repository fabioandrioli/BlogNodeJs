const express = require('express');
const connection = require('./config/connection')
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('./config/session');
const flash = require('connect-flash');
const middleware = require('./middleware')
const passport = require('passport');
require('./config/auth')(passport)
const {cors} = require('./config/cors');
const routers = require("./config/router")

//Inicio de tudo usado o express
const app = express();


//Sessão - é muito importante que fique nessa ordem
app.use(session);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//middleware
app.use(middleware.messages)

//cors
app.use(cors);

// Definindo caminho da views
app.set('views', path.join(__dirname, 'views'));

//configuracao do engine para o front-end - main é template padrao da aplicacao
// app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
// app.set('views engine','handlebars');

app.set("view engine", "ejs");

//body-parser para pegar dados do formulario
// com ele podemos usar o req.body.nomedataghtml
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

//Configuracao do diretório publico
app.use(express.static(__dirname + '/public'));


//conexao com o banco de dados mysql
connection.databaseConnection.authenticate();

//Rotas
routers(app);

app.listen(3000,() => {
    console.log("Servidor rodando");
})