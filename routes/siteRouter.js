const router = require("./router")
const Category = require('../models/Category')

const SiteController = require("../controllers/SiteController")
const UserController = require("../controllers/UserController")

router.use(async (req, res, next) => {
    res.locals.categories = await Category.findAll({limit: 5,order: [['id','DESC']]});
    next();
})

router.get('/',SiteController.index);

router.get('/show/:id',SiteController.show);

router.get('/login',SiteController.formLogin);

router.get('/register',SiteController.formRegister);

router.post('/register',UserController.store);

module.exports = router;