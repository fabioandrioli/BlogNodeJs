const User = require('../models/User');
const bcrypt = require('bcryptjs');
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
        bcrypt.genSalt(10, (erro,salt) => {
            var password = req.body.password
            console.log(req.body);
            bcrypt.hash(password,salt, (erro,hash) => {
                req.body.password = password;
                if(erro){
                    res.send("Houve um erro");
                }else{
                    User.create(req.body).then(response => {
                       if(req.isAuthenticated())
                         res.redirect("/admin/posts")
                       else{
                          res.redirect("/login")
                       }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        })
        


    },

    delete(req,res){
        
        Post.destroy({where: {'id':req.params.id}}).then(
            res.redirect("/posts")
        ).catch(error => console.log(error));
    }
}