const Post = require('../models/Post')
const Category = require('../models/Category')

module.exports = {
    async index(req,res){
        const posts = await Post.findAll({include:Category,order: [['id','DESC']]});
        res.render('admin/index',{posts:posts})
    },
}