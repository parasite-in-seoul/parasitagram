const express= require('express');
const router = express.Router();
const hashtagCtrl = require('../controllers/hashtag');
const { isLoggedIn } = require('./middleware');

router.get('/posts', 
  isLoggedIn, 
  hashtagCtrl.getPostCountGroupByHashtag);

router.get('/:tag', 
  isLoggedIn, 
  hashtagCtrl.getPostListByHashtag);
  
module.exports = router;
