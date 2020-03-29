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
  isLoggedIn, 
  postCtrl.postLike);

router.delete('/:id/like', 
  isLoggedIn, 
  postCtrl.deletePostLike);

router.post('/:id/like/comment', 
  isLoggedIn, 
  postCtrl.commentLike);

router.delete('/:id/like/comment', 
  isLoggedIn, 
  postCtrl.deleteCommentLike);

module.exports = router;
