const session = require('express-session')

module.exports = session({
    secret:"blognodejs",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:(60 * 24) * 60 * 1000}
});