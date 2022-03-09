const Post = require('../models/Post')

module.exports = {
    async index(req,res){
        var posts;// =  await Post.findAll();
        res.render("site/index",{posts})
    },

    show(req,res){
        
    },

    formLogin(req,res){
        if(!req.isAuthenticated())
            res.render('site/login');
        else
            res.redirect('/');
    },

    formRegister(req,res){
        res.render('site/register');
    },
}