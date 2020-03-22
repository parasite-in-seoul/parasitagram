const express= require('express');
const router = express.Router();
const authCtrl = require('../../controllers/sys/auth');

router.post('/signUp', 
  authCtrl.signUp
  );

router.post('/signIn',
  authCtrl.signIn
);

router.get('/logOut',
  authCtrl.logOut
);

router.get('/logInTest',
  authCtrl.logInTest
);

module.exports = router;