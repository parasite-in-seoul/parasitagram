const express= require('express');
const router = express.Router();
const postCtrl = require('../controllers/posts');

router.get('/:id', 
  postCtrl.getPostsByUserId);

module.exports = router;
