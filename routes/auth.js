 /* eslint linebreak-style: ["error", "windows"] */

const express = require('express');
const validate = require('express-validation');
const validation = require('../config/validation');
const authController = require('../controllers/auth');


const router = express.Router();


// import validate from 'express-validation';

// import paramValidation from '../config/param-validation';
// import authCtrl from '../controllers/auth';
// eslint-disable-line new-cap


// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.route('/register')
.post(validate(validation.customerValidation.create))
.post(authController.CreateUser);

// @route   POST api/auth/login
// @desc    Register user
// @access  Public
router.route('/login')
.post(validate(validation.customerValidation.create))
.post(authController.UserLogin);


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
