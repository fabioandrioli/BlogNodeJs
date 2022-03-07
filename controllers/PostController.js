const Post = require('../models/Post')

module.exports = {
    async index(req,res){
    //    Post.findAll().then(posts =>{
    //     res.render("posts/post.handlebars",{posts:posts})
    //    })

        const posts = await Post.findAll({order: [['id','DESC']]});
        console.log(posts)
        res.render("posts/post",{posts:posts})
       
    },

    create(req,res){
        res.render('posts/create')
    },

    store(req,res){
        Post.create(req.body).then(respnse => {
            res.send("Post criado com sucesso")
        }).catch(error => {
            console.log(error);
        })
    },

    delete(req,res){
        
        Post.destroy({where: {'id':req.params.id}}).then(
            res.redirect("/posts")
        ).catch(error => console.log(error));
    }
}