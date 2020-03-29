const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');
const { isLoggedIn } = require('./middleware');

router.get('/:id', 
  isLoggedIn, 
  postCtrl.getPostsByUserId);

module.exports = router;
