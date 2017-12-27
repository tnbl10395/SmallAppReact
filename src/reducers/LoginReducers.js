import { LOGIN } from '../actions/TypeAction.js';

const appState = { 
    username:'lewis',
    password:'123456',
}
const defaultState = {
    checkAuth: false,
    username: '',
    password: ''
};
export const loginReducers =  (state = defaultState, action) => {
    switch(action.type){
        case LOGIN:
            if(appState.username===action.username && appState.password===action.password){
                return { 
                    checkAuth: true,
                    username: action.username,
                    password: action.password
                };
            } 
        default:
        return state;
    }
    
}
