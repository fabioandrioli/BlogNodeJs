const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const User = require('../models/User')


// const users = [{
//     id:1,
//     name:"Fabio",
//     email:"fabio.drioli@gmail.com",
//     password:"$2a$06$HT.EmXYUUhNo3UQMl9APmeC0SwoGsx7FtMoAWdzGicZJ4wR1J8alW"//hash da senha 123
// }]

module.exports = function (passport) {
    async function findUser (email){
        return await User.findOne({email:email})
        // return users.find(item => item.email === email)
    }

    async function findUserById(id){
        // return users.find(item => item.id === id)
       
        return await User.findOne({id:id})
    }

    passport.serializeUser((user,done) => {
        done(null,user.id);
    })

    passport.deserializeUser(async (id,done) => {
        try {
            const user =  await findUserById(id);
            done(null,user)
        } catch (error) {
            return done(error,null)
        }
    })

    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password'
    },async (email,password,done) => {
        try {
            const user = await findUser(email)
                      
            if(!user){
                return done(null,false)
            }
            const isValid = bcrypt.compareSync(password,user.password)
            if(!isValid){
                return done(null,false)
            }
            return done(null,user)
        } catch (error) {
            return done(error,false)
        }
    }))
}
