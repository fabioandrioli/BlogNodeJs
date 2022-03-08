const router = require("./router")
const passport = require("passport");

router.get("/user.login",(req,res) => {
    res.render("user/login")
})

router.post('/user.login', passport.authenticate('local', {
    successRedirect: '/admin/posts',
    failureRedirect: '/auth/user.login',
}))

router.get("/user.logout",(req,res) => {
    req.logout()
    res.redirect("user.login")
})

module.exports = router;