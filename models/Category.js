const connection = require('../config/connection')

//Definindo a model
//Não é necessario colocar os campos id, created_at, update_at, ele cria automatico.
const Category = connection.databaseConnection.define("categories",{
    name:{
        type:connection.Sequelize.STRING,
    },
    description:{
        type:connection.Sequelize.TEXT,
    }
})
// Category.sync({force:true});

module.exports = Category;