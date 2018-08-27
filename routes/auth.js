const validate = require('express-validation');
const paramValidation = require('../config/param-validation');
const authCtrl = require('../controllers/auth');
const { Router } = require('express');

const router = Router(); // eslint-disable-line new-cap

router.route('/')
  .get(authCtrl.getAuth);

// router.route('/logout')
//   .post(authCtrl.logout);
//
// router.route('/sign-up')
//   .post(validate(paramValidation.signUp))
//   .post(authCtrl.signUp);
//
router.route('/login')
  .post(validate(paramValidation.login), authCtrl.login);

module.exports = router;
