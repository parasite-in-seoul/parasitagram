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

module.exports = router;
