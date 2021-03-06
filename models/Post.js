const connection = require('../config/connection')
const Category = require('./Category')

//Definindo a model
//Não é necessario colocar os campos id, created_at, update_at, ele cria automatico.
const Post = connection.databaseConnection.define("posts",{
    title:{
        type:connection.Sequelize.STRING,
    },
    image:{
        type:connection.Sequelize.STRING,
    },
    description:{
        type:connection.Sequelize.TEXT,
    }
})

Category.hasMany(Post);
Post.belongsTo(Category);

// Post.sync({force:true});

module.exports = Post;