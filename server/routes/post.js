const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');

router.post('/', 
  postCtrl.upload.array('image'),  
  postCtrl.savePost);

router.get('/:id', 
  postCtrl.getPostById);

router.post('/:id/comment', 
  postCtrl.postComment);

router.post('/:id/comment/child',
  postCtrl.postChildComment);

router.post('/:id/like', 
  postCtrl.postLike);

router.delete('/:id/like', 
  postCtrl.deletePostLike);

router.post('/:id/like/comment', 
  postCtrl.commentLike);

router.delete('/:id/like/comment', 
  postCtrl.deleteCommentLike);

module.exports = router;
