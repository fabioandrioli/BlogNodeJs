const Post = require('../models/Post')

module.exports = {
    async index(req,res){
        var posts =  await Post.findAll();
        res.render("site/index",{posts})
    },

    async show(req,res){
        var post =  await Post.findOne({id:req.params.id}); 
        res.render("site/show",{post})
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