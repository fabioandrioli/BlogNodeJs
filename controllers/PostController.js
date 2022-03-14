const Post = require('../models/Post')
const Category = require('../models/Category')
const Path = "/images/"

module.exports = {
    async index(req,res){
    //    Post.findAll().then(posts =>{
    //     res.render("posts/post.handlebars",{posts:posts})
    //    })

        const posts = await Post.findAll({order: [['id','DESC']], 
            include: [{
                model: Category,
            }]
        });
        res.render("posts/post",{posts:posts})
       
    },

    async create(req,res){
        const categories = await Category.findAll();
        res.render('admin/posts/create',{categories})
    },

    store(req,res){
        var erros = [];

        if(!req.body.title || typeof req.body.title === 'undefined' || req.body.title == null){
            erros.push({texto:"Nome invalido"});
        }

        if(erros.length > 0){
            res.render('posts/create',{errors:erros});
        }else{
          
            req.body.image = Path + req.filename
           
            Post.create(req.body).then(respnse => {
                req.flash('message_sucess','Post criado com sucesso!')
                res.redirect("/admin");
            }).catch(error => {
                req.flash('message_error','Houve um erro ao criar!')
                console.log(error);
            })
        }

    },

    show(req,res){
        res.render('admin/posts/create')
    },

    async edit(req,res){
        const post = await Post.findOne({include:Category,where:{id:req.params.id}});
        const categories = await Category.findAll();
        res.render('admin/posts/edit',{categories,post})
    },

    async update(req,res){
        req.body.image = Path + req.filename
        
        const post = await Post.findOne({where:{id:req.body.id}})
        delete req.body.id
        if(typeof req.file === 'undefined') delete req.body.image
        post.set(req.body)
        post.save();
        res.redirect("/admin");
    },

    delete(req,res){
        
        Post.destroy({where: {'id':req.params.id}}).then(
            res.redirect("/admin")
        ).catch(error => console.log(error));
    }
}