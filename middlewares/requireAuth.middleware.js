import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

export default function (req, res, next) {
  if (!req.user || !req.user._id) {
    return next(new APIError('Authentication error', httpStatus.FORBIDDEN));
  }

  return next();
}
