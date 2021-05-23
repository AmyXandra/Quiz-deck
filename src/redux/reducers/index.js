import {combineReducers} from 'redux';

// import { authentication } from './authentication.reducer';
// import { registration } from './registration.reducer';
// import { alert } from './alert.reducer';
import { users } from './user.reducer';
// import { admin } from './admin.reducer';

const rootReducer = combineReducers({
//   authentication,
//   registration,
//   alert,
  users,
//   admin
});

export default rootReducer;