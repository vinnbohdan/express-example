const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const models = require('../models');
const passport = require('passport');

function CreateUser(req, res) {
  const errors = {};
  models.Customer.findOne({ email: req.body.email }).then((user) => {
    if (req.body.email === user.email) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    } else {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          req.body.password = hash;
            models.Customer.create(req.body)
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
}

function UserLogin(req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const errors = {};
   // Find user by email
  models.Customer.findOne({ email }).then((user) => {
    // Check for user
    if (user.email !== email) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, email: user.email }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
}


module.exports = {
  CreateUser,
  UserLogin,
};

// const jwt = require('jsonwebtoken');
// const pwd = require('pwd');
//
// const env = process.env.NODE_ENV || 'development';
// const config = require(`${__dirname}/../config/config.js`)[env];
//
// function login(req, res, next) {
//   const { email, password } = req.body;
//
//   return Account.findOne({ email }).then((account) => {
//     if (!account) {
//       return incorectEmailOrPassword();
//     }
//     if (account.removed) {
//       return res.fieldsError({ message: 'Account has been disabled, please contact your teacher to restore access.' });
//     }
//
//     return pwd.hash(password, account.salt, (err, hash) => {
//       if (err) { return next(err); }
//       if (account.password !== hash) {
//         return incorectEmailOrPassword();
//       }
//
//       const token = jwt.sign({ _id: account._id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });
//
//       return account.update({ loginDate: Date.now() }, (error) => {
//         if (error) { return next(error); }
//
//         res.cookie('token', token, { maxAge: config.jwtExpiresIn * 1000 });
//
//         return res.json({
//           token,
//         });
//       });
//     });
//   });
//
//   function incorectEmailOrPassword() {
//     res.fieldsError({ email: 'Incorrect email or password' });
//   }
// }
//
// function getAuth(req, res) {
//   res.json(req.user || {});
// }
// function logout(req, res) {
//   res.clearCookie('token');
//   res.status(200);
//   res.end();
// }
