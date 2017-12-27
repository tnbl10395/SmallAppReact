import { combineReducers } from 'redux';
import { loginReducers } from './reducers/LoginReducers.js';
import { navReducers } from './reducers/NavReducers.js';

const rootReducer = combineReducers({
    loginReducers,
    // navReducers,
});
 
export default rootReducer;