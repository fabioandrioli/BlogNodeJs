const Post = require('../models/Post')
const Category = require('../models/Category')
const {loremIpsumTitleGenerator, loremIpsumTextGenerator} = require('../utils/LoremContentGenerator')
const LoremImage = require('../utils/LoremImageGenerator')


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

