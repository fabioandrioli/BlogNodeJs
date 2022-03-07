const session = require('express-session')

module.exports = session({
    secret:"blognodejs",
    resave:true,
    saveUninitialized:true,
});