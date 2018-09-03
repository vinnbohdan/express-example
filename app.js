const express = require('express');   /* eslint linebreak-style: ["error", "windows"] */
const path = require('path');
const httpStatus = require('http-status');
const expressValidation = require('express-validation');
const passport = require('passport');

// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const cors = require('cors');

// const passport = require('passport');
// const { Strategy as JwtStrategy } = require('passport-jwt');
 // const authMiddleware = require('./middlewares/auth.middleware');
const APIError = require('./helpers/APIError');

const routes = require('./routes/index');
const users = require('./routes/users');
const orders = require('./routes/orders');
const products = require('./routes/products');
const categories = require('./routes/categories');
const customers = require('./routes/customers');
const orderDetails = require('./routes/orderdetails');
const subcategories = require('./routes/subcategories');

const app = express();

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// passport.use(
//   new JwtStrategy(
//     {
//       jwtFromRequest: (req) => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//           return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//           return req.query.token;
//         } else if (req.cookies && req.cookies.token) {
//           return req.cookies.token;
//         }
//         return null;
//       },
//       secretOrKey: config.jwtSecret,
//     },
//     (token, cb) => {
//       if (!token || !token._id) return cb(null, false);
//
//       return Account
//         .findById(token._id)
//         .then((user) => {
//           if (!user) {
//             return cb();
//           }
//
//           return cb(null, user);
//         }, cb);
//     }
//   )
// );
//
// app.use(passport.initialize());
 // enable CORS - Cross Origin Resource Sharing
const allowedDomains = [
  'http://localhost',
  'http://localhost:3000',
  'http://localhost:4040/api',
  'https://eliftech-school-react.herokuapp.com',
];
app.use(cors({
  origin: (origin1, callback) => {
    if (!origin1 || allowedDomains.indexOf(origin1) !== -1) {
      callback(null, true);
    } else {
      callback(new Error(`Not allowed by CORS: ${origin1}`));
    }
  },
}));
 // app.use(authMiddleware);
app.use((req, res, next) => { // put it after authorization
  res.summaryError = summaryError; // eslint-disable-line no-param-reassign
  res.fieldsError = fieldsError; // eslint-disable-line no-param-reassign
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api/users', users);
app.use('/orders', orders);
app.use('/products', products);
app.use('/customers', customers);
app.use('/categories', categories);
app.use('/orderdetails', orderDetails);
app.use('/subcategories', subcategories);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic);
    return next(apiError);
  }
  return next(err);
});

app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => // eslint-disable-line no-unused-vars
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status],
    stack: app.get('env') === 'development' ? err.stack : {},
  })
);

function summaryError(message) {
  this
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .json({ errors: message });
}
function fieldsError(fieldsErrors) {
  this
    .status(httpStatus.UNPROCESSABLE_ENTITY)
    .json(fieldsErrors);
}

module.exports = app;
