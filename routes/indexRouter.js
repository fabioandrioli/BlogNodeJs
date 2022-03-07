const express = require("express");
const router = express.Router();
const PostController = require("../controllers/PostController")

router.get('/posts',PostController.index);

router.get('/create.post',PostController.create)

router.post("/post.store",PostController.store);

router.get("/post.delete/:id",PostController.delete);

module.exports = router;