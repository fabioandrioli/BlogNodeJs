const flash = require('connect-flash');
module.exports = {
    messages(req, res, next){
        res.locals.message_sucess = req.flash("message_sucess")
        res.locals.message_error = req.flash("message_error")
        res.locals.error = req.flash("errors")
        next();
    }
}