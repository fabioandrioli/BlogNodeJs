const passport = require("passport");

module.exports = {
    formLogin(req,res){
        if(!req.isAuthenticated())
            res.render("user/login")
        else{
            res.redirect("/admin/posts")
        }
    },

    verifyCredentials(){
        return passport.authenticate('local', {
            successRedirect: '/admin/posts',
            failureRedirect: '/auth/user.login',
        })
    },

    logout(req,res){
        req.logout()
        res.redirect("login")
    },
}