const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const { isLoggedIn } = require('./middleware');

router.post('/', 
  isLoggedIn, 
  postCtrl.upload.array('image'),  
  postCtrl.savePost);

router.get('/:id', 
  isLoggedIn, 
  postCtrl.getPostById);

router.post('/:id/comment', 
  isLoggedIn, 
  postCtrl.postComment);

router.post('/:id/comment/child',
  isLoggedIn, 
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
