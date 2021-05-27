import {combineReducers} from 'redux';

// import { authentication } from './authentication.reducer';
// import { registration } from './registration.reducer';
// import { alert } from './alert.reducer';
import { users } from './user.reducer';
import { quiz } from './quiz.reducer';

const rootReducer = combineReducers({
//   authentication,
//   registration,
//   alert,
  users,
  quiz
});

export default rootReducer;