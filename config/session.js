const session = require('express-session')

module.exports = session({
    secret:"blognodejs",
    resave:false,
    saveUninitialized:false,
    cookie:{maxAge:30 * 60 * 1000}
});