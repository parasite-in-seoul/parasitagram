const express= require('express');
const router = express.Router();
const authCtrl = require('../controllers/auth');
const { isLoggedIn } = require('./middleware');

router.post('/signUp', 
  authCtrl.signUp
  );

router.post('/signIn',
  authCtrl.signIn
);

router.get('/logOut',
  isLoggedIn, 
  authCtrl.logOut
);

router.get('/logInTest',
  authCtrl.logInTest
);

router.get('/',
  isLoggedIn, (req, res) => {
    res.send('hello world');
  }
);

module.exports = router;