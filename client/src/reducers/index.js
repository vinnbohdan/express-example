import { combineReducers } from 'redux'; /* eslint linebreak-style: ["error", "windows"] */
import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

