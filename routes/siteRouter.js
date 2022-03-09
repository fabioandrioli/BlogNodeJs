const router = require("./router")

const SiteController = require("../controllers/SiteController")
const UserController = require("../controllers/UserController")

router.get('/',SiteController.index);

router.get('/show',SiteController.show);

router.get('/login',SiteController.formLogin);

router.get('/register',SiteController.formRegister);

router.post('/register',UserController.store);

module.exports = router;