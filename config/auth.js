const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const passport = require('passport')

const users = [{
    id:1,
    name:"Fabio",
    email:"fabio.drioli@gmail.com",
    password:"$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW"//hash da senha 123
}]

module.exports = function (passport) {
    function findUser (email){
        return users.find(item => item.email === email)
    }

    function findUserById(id){
        return users.find(item => item.id === id)
    }

    passport.serializeUser((user,done) => {
        done(null,user.id);
    })

    passport.deserializeUser((id,done) => {
        try {
            const user = findUserById(id);
            done(null,user)
        } catch (error) {
            console.log(error)
            return done(error,null)
        }
    })

    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },(email,password,done) => {
        try {
            const user = findUser(email);
            if(!user){
                return done(null,false)
            }
            const isValid = bcrypt.compareSync(password,user.password)
            if(!isValid){
                return done(null,false)
            }
            return done(null,user)
        } catch (error) {
            console.log(error)
            return done(error,false)
        }
    }))
}
