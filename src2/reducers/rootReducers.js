import { combineReducers } from "redux";
import nav from '../reducers/nav';
import TodoReducer from '../reducers/TodoReducer';
import InprogressReducer from '../reducers/InprogressReducer';

export default rootReducers = combineReducers({
    nav,
    TodoReducer,
    InprogressReducer
});