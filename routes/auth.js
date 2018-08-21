const { Router } = require('express');
// import validate from 'express-validation';

// import paramValidation from '../config/param-validation';
// import authCtrl from '../controllers/auth';

const router = Router(); // eslint-disable-line new-cap


// router.route('/')
//   .get(authCtrl.getAuth)
//
// router.route('/logout')
//   .post(authCtrl.logout);
//
// router.route('/sign-up')
//   .post(validate(paramValidation.signUp))
//   .post(authCtrl.signUp);
//
// router.route('/login')
//   .post(validate(paramValidation.login), authCtrl.login);

module.exports = router;
