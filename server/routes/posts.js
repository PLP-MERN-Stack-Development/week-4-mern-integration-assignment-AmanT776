const express = require('express');
const router = express.Router();
const {getAllPosts,getPost,createPost,updatePost,deletePost} = require("../controllers/postsController");

router.get('/',getAllPosts);
router.get('/:id',getpost);
router.post('/',createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);

module.exports = router;