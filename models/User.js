const connection = require('../config/connection')

//Definindo a model
//Não é necessario colocar os campos id, created_at, update_at, ele cria automatico.
const User = connection.databaseConnection.define("users",{
    name:{
        type:connection.Sequelize.STRING,
    },
    email:{
        type:connection.Sequelize.STRING,
    },
    password:{
        type:connection.Sequelize.STRING,
    },
    role:{
        type:connection.Sequelize.STRING,
    }
})

//Post.sync({force:true});

module.exports = User;