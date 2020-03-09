const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/hashtag');

router.get('/posts', 
  postCtrl.getPostCountGroupByHashtag);

module.exports = router;
