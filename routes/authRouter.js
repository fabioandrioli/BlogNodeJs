const router = require("./router")

const AuthController = require('../controllers/AuthController')

router.get("/login",AuthController.formLogin)

router.post('/login',AuthController.verifyCredentials())

router.get("/logout",AuthController.logout)

module.exports = router;