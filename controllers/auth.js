const jwt = require('jsonwebtoken');
const pwd = require('pwd');
const models = require('../models');

const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.js`)[env].db;

pwd.iterations(10);
pwd.length(16);

function login(req, res) {
  const { email, password } = req.body;
  return models.Customer.findOne({ email }).then((account) => {
    if (!account) {
      return incorectEmailOrPassword();
    }
    // if (account.removed) {
    //   return res.fieldsError({ message: 'Account has been disabled, please contact your teacher to restore access.' });
    // }

    // return pwd.hash(password, account.salt, (err, hash) => {
      // if (err) { return next(err); }
      // if (account.password !== hash) {
      //   return incorectEmailOrPassword();
      // }
    if (account.password !== password) {
      return incorectEmailOrPassword();
    }

    const token = jwt.sign({ _id: account.id }, config.jwtSecret, { expiresIn: config.jwtExpiresIn });

      // return account.update({ loginDate: Date.now() }, (error) => {
        // if (error) { return next(error); }

    res.cookie('token', token, { maxAge: config.jwtExpiresIn * 1000 });

    return res.json({
      token,
    });
      // });
    // });
  });

  function incorectEmailOrPassword() {
    res.fieldsError({ email: 'Incorrect email or password' });
  }
}

function getAuth(req, res) {
  res.json(req.user || {});
}

// function logout(req, res) {
//   res.clearCookie('token');
//   res.status(200);
//   res.end();
// }

module.exports = {
  login,
  getAuth,
};
