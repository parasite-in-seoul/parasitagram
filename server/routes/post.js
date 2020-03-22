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

module.exports = router;
