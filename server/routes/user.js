const express= require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');

router.get('/:id/followings', 
  userCtrl.getFollowings);

router.get('/:id/followers', 
  userCtrl.getFollowers);

router.delete('/:id/follow', 
  userCtrl.unFollow);

router.post('/:id/follow', 
  userCtrl.follow);

module.exports = router;
