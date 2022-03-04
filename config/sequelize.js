const Sequelize = require("Sequelize");
const databaseConnection = require("./connection")



//Definindo a model
//Não é necessario colocar os campos id, created_at, update_at, ele cria automatico.
const Post = databaseConnection.define("posts",{
    title:{
        type:Sequelize.STRING,
    },
    image:{
        type:Sequelize.STRING,
    },
    description:{
        type:Sequelize.TEXT,
    }
})

const User = databaseConnection.define("users",{
    name:{
        type:Sequelize.STRING,
    },
    image:{
        type:Sequelize.STRING,
    },
    email:{
        type:Sequelize.STRING,
    },
    password:{
        type:Sequelize.STRING,
    },
    role:{
        type:Sequelize.STRING,
    },
})


//Comando para criação das tabelas
// Post.sync({force:true})
// User.sync({force:true})



module.exports = databaseConnection



