const express = require("express");
const router = express.Router();

const upload = require("../config/file")

const PostController = require("../controllers/PostController")

router.get('/',PostController.index);

router.get('/post.create',PostController.create)

router.post("/post.store",upload.single('image'),PostController.store);

router.get("/post.edit/:id",PostController.edit);

router.post("/post.update",upload.single('image'),PostController.update);

router.get("/post.delete/:id",PostController.delete);

module.exports = router;