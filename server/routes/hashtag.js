const express= require('express');
const router = express.Router();
const hashtagCtrl = require('../controllers/hashtag');

router.get('/posts', 
  hashtagCtrl.getPostCountGroupByHashtag);

router.get('/:tag', 
  hashtagCtrl.getPostListByHashtag);
  
module.exports = router;
