import { LOGIN } from '../actions/TypeAction.js';
import { AppNavigator } from '../Route.js';
import { NavigationActions } from 'react-navigation';

const appState = { 
    username:'lewis',
    password:'123456',
}
const defaultState = {
    checkAuth: false,
    username: '',
    password: ''
};

const initialNavState = AppNavigator.router.getStateForAction(NavigationActions.init());

export const loginReducers = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case LOGIN:
            nextState = AppNavigator.router.getStateForAction(
            NavigationActions.back(),
            state
            );
            break;
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;   
}
