import httpStatus from 'http-status';  /* eslint linebreak-style: ["error", "windows"] */
import APIError from '../helpers/APIError';

export default function (req, res, next) {
  if (!req.user) {
    return next(new APIError(req.__('Authentication error'), httpStatus.FORBIDDEN));
  }

  req.body.createdBy = req.user._id.toString();

  return next();
}
