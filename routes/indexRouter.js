const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController")

router.get('/posts',PostController.index);

router.get('/create.post',(req, res) => {
    res.render('posts/create')
})


router.post("/post.store",PostController.store);

module.exports = router;