const Post = require('../models/Post')

module.exports = {
    async index(req,res){
    //    Post.findAll().then(posts =>{
    //     res.render("posts/post.handlebars",{posts:posts})
    //    })

        const posts = await Post.findAll();
        res.render("posts/post",{posts:posts})
       
    },

    create(req,res){

    },

    store(req,res){
        Post.create(req.body).then(respnse => {
            res.send("Post criado com sucesso")
        }).catch(error => {
            console.log(error);
        })
    }
}