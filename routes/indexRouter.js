const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController")
const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User")

router.get('/posts',PostController.index);

router.get('/post.create',PostController.create)

router.post("/post.store",PostController.store);

router.get("/post.delete/:id",PostController.delete);

router.get("/user.login",(req,res) => {
    res.render("user/login")
})

router.get("/user.create",(req,res) => {

    bcrypt.genSalt(10, (erro,salt) => {
            bcrypt.hash("12345678",salt, (erro,hash) => {
                if(erro){
                    res.send("Houve um erro");
                }else{
                    User.create({
                        'name': 'Fabio Gilberto',
                        'email':'fabio.drioli@gmail.com',
                        'password': hash,
                    }).then(response => {
                        res.send("Usuario criado")
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
        })

    
})


router.post('/user.done', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user.login',
}))

module.exports = router;