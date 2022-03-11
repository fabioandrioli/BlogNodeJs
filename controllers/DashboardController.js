const Post = require('../models/Post')

module.exports = {
    async index(req,res){
        const posts = await Post.findAll({order: [['id','DESC']]});
        res.render('admin/index',{posts:posts})
    },
}