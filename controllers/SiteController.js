module.exports = {
    index(req,res){
        console.log(req.user)
        res.render("site/index")
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