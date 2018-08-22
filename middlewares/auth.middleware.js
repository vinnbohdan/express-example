import passport from 'passport';

export default
function authMiddleware(req, res, next) {
  passport.authenticate('jwt', (err, user) => {
    if (err) return next(err);

    req.user = user || {};

    return next();
  })(req, res, next);
}
