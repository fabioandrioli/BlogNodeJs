const express = require("express");
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs");

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