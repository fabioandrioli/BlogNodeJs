const router = require("./router")

const PostController = require("../controllers/PostController")

router.get('/posts',PostController.index);

router.get('/post.create',PostController.create)

router.post("/post.store",PostController.store);

router.get("/post.delete/:id",PostController.delete);

module.exports = router;