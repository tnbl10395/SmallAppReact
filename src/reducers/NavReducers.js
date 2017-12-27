import App from '../Route.js';
import { addNavigationHelpers } from 'react-navigation';

export const navReducers = (state,action) => {
    const newState = App.router.getStateForAction(action,state);
    return newState || state;
}