const middleware = require('../middleware')
const postRoutes = require("../routes/postRouter");
const authRoutes = require("../routes/authRouter");
const siteRoutes = require("../routes/siteRouter");
const dashboardRouter = require("../routes/dashboardRouter");

module.exports = (app) => {
    app.use("/",siteRoutes);
    app.use("/admin",middleware.authenticate,dashboardRouter);
    app.use("/admin/posts",middleware.authenticate,postRoutes);
    app.use("/auth",authRoutes);
    app.use(function(req, res, next) {
        if (!req.route)
           res.render("errors/404");
    });

    // app.get('/', (req, res) => {
    //     res.render('formulario.handlebars')
    // })
}