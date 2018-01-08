import React from 'react';
import { StackNavigator, addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import TodoContainer from '../containers/TodoContainer';
import DoneContainer from '../containers/DoneContainer';
import RegisterContainer from '../containers/RegisterContainer';
import ModalContainer from '../containers/ModalContainer';

export const AppNavigator = StackNavigator({
    Login: {
        screen: LoginContainer,
        navigationOptions:{
            header: null
        }
    },
    Home: {
        screen: HomeContainer,
        navigationOptions:{
            header: null
        }
    },
    Register: {
        screen: RegisterContainer,
        navigationOptions:{
            header: null
        }
    },
    Modal: {
        screen: ModalContainer,
        navigationOptions:{
            header:null
        },
        mode:{
            card:true,
        },
        headerMode:{
            screen: true
        },
        cardStyle: {
            backgroundColor:"transparent",
            opacity:0.99
        }
    }
});

export const Tabbar = TabNavigator(
    {
        Todo: {
            screen: TodoContainer
        },
        Done: {
            screen: DoneContainer
        },
        // Done: {
        //     screen: DoneContainer
        // }
    },
    {
        tabBarPosition:'top',        
        animationEnabled:true,
        tabBarOptions:{
            activeBackgroundColor:'#4CAF50',
            activeTintColor:'white',
            upperCaseLabel:false,
            labelStyle:{
                fontSize:15,
                fontWeight:'bold',
            },
            style:{
                backgroundColor:'#4CAF50'
            },
        }
    }
);

const AppWithNavigationState = ({dispatch,nav}) => (
    <AppNavigator
        navigation={addNavigationHelpers(
            {
                dispatch,
                state: nav
            }
        )}
    />
)

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);