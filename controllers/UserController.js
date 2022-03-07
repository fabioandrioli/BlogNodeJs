const User = require('../models/User')
module.exports = {
    async index(req,res){
    //    Post.findAll().then(posts =>{
    //     res.render("posts/post.handlebars",{posts:posts})
    //    })

        const posts = await User.findAll({order: [['id','DESC']]});
        res.render("posts/post",{posts:posts})
       
    },

    create(req,res){
        res.render('posts/create')
    },

    store(req,res){
        var erros = [];

        if(!req.body.title || typeof req.body.title === 'undefined' || req.body.title == null){
            erros.push({texto:"Nome invalido"});
        }

        if(erros.length > 0){
            res.render('posts/create',{errors:erros});
        }else{
            
            Post.create(req.body).then(respnse => {
                req.flash('message_sucess','Post criado com sucesso!')
                res.redirect("/posts");
            }).catch(error => {
                req.flash('message_error','Houve um erro ao criar!')
                console.log(error);
            })
        }

    },

    delete(req,res){
        
        Post.destroy({where: {'id':req.params.id}}).then(
            res.redirect("/posts")
        ).catch(error => console.log(error));
    }
}