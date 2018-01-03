import React from 'react';
import { StackNavigator, addNavigationHelpers, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import ListContainer from '../containers/ListContainer';
import FavoriteContainer from '../containers/FavoriteContainer';
import RegisterContainer from '../containers/RegisterContainer';

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
    }
});

export const Tabbar = TabNavigator(
    {
        List: {
            screen: ListContainer
        },
        Favorite: {
            screen: FavoriteContainer
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