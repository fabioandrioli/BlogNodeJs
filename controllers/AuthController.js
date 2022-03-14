const passport = require("passport");

module.exports = {
    formLogin(req,res){
        if(!req.isAuthenticated())
            res.render("user/login")
        else{
            res.redirect("/admin")
        }
    },

    verifyCredentials(){
        return passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
        })
    },

    logout(req,res){
        req.logout()
        res.redirect("/login")
    },
}