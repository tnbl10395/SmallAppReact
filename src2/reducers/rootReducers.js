import { combineReducers } from "redux";
import nav from '../reducers/nav';
import TodoReducer from '../reducers/TodoReducer';
import DoneReducer from '../reducers/DoneReducer';

export default rootReducers = combineReducers({
    nav,
    TodoReducer,
    DoneReducer
});