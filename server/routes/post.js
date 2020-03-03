const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/post');
const multer = require('multer');
const path = require('path');

router.post('/', 
  postCtrl.upload.array('image'),  
  postCtrl.savePost);

router.get('/:id', 
  postCtrl.getPostById);

module.exports = router;
