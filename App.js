import LoginReducer from './src/reducers/LoginReducers.js'
import Route from './src/Route.js'
import { createStore, combineReducers } from 'redux';

export const store = createStore(
    combineReducers({
        LoginReducer
    })
);