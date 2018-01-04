import { GO_HOME, GO_LOGIN, REGISTER, GO_REGISTER, LOGIN, OPEN_MODAL } from '../actions/TypeActions';
import { AppNavigator } from '../route/Route';
import { NavigationActions } from 'react-navigation';

const firstScreen = AppNavigator.router.getActionForPathAndParams('Login');
const secondScreen = AppNavigator.router.getActionForPathAndParams('Home');
const initialState = AppNavigator.router.getStateForAction(
    firstScreen,
    // AppNavigator.router.getStateForAction(secondScreen)
);

const nav = (state = initialState, action) => {
    let nexState;
    switch (action.type) {
        case GO_HOME: 
            nexState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Home'}),
            );
            break;
        
        case GO_REGISTER: 
            nexState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Register'}),
            );
            break;

        case GO_LOGIN: 
            nexState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Login'}),
            );
            break;

        case REGISTER:
            if(action.checkRegister===true){
                alert('Successfully!')                
                nexState = AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({routeName:'Login'}),
                );
            }
            break;

        case LOGIN: 
            if(action.checkAuth===true){
                alert('Successfully!')
                nexState = AppNavigator.router.getStateForAction(
                    NavigationActions.navigate({routeName:'Home'}),
                );
            }
            break;

        case OPEN_MODAL: 
            nexState = AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName:'Modal'}),
            );
            break;
        }

    return nexState || state;
}

export default nav;