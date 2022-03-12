const connection = require('../config/connection')
const Category = require('../models/Category')
const {loremIpsumTitleGenerator, loremIpsumTextGenerator} = require('../utils/LoremContentGenerator')
const LoremImage = require('../utils/LoremImageGenerator')




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

Post.sync({force:true});

Category.findOne({where:{id:1}}).then(category => {
      
        for (let i =0; i < 5; i++){
        Post.create({
            title:loremIpsumTitleGenerator,
            description:loremIpsumTextGenerator,
            image:LoremImage,
            categoryId: category.id
        })
    }
})

