const Post = require('../models/Post')
const Category = require('../models/Category')


module.exports = {
    async index(req,res){
        const posts =  await Post.findAll();
    
        res.render("site/index",{posts})
    },

    async show(req,res){
        const post =  await Post.findOne({ where: { id: req.params.id } }); 
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