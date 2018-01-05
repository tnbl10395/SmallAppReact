import { combineReducers } from "redux";
import nav from '../reducers/nav';
import LoadDataReducer from '../reducers/LoadDataReducer';
import LoadFavoriteReducer from '../reducers/LoadFavoriteReducer';

export default rootReducers = combineReducers({
    nav,
    LoadDataReducer,
    LoadFavoriteReducer
});