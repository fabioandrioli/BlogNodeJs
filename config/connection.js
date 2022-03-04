//Criando a conexão com o banco de dados
const Sequelize = require("Sequelize");
const databaseConnection = new Sequelize("blog","root","",{
    host: "localhost",
    dialect: "mysql",
})

module.exports = databaseConnection;