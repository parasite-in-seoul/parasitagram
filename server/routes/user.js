const express= require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');
const { isLoggedIn } = require('./middleware');

router.get('/:id/followings', 
  isLoggedIn, 
  userCtrl.getFollowings);

router.get('/:id/followers', 
  isLoggedIn, 
  userCtrl.getFollowers);

router.delete('/:id/follow', 
  isLoggedIn, 
  userCtrl.unFollow);

router.post('/:id/follow', 
  isLoggedIn, 
  userCtrl.follow);

module.exports = router;
