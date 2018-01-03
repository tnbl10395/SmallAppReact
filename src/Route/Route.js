import React from "react";
import { StackNavigator,TabNavigator,addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Login from '../src/components/LoginComponent.js';
import ModalComment from '../components/ModalComment.js';
import HomeScreen from '../src/components/HomeComponent.js';
import MyBlogScreen from '../src/components/MyBlogComponent.js';
import MyfriendsScreen from '../src/components/MyFriendsComponent.js';

export const AppNavigator = StackNavigator(
{
    Login:{
        screen: Login,
        navigationOptions:{
            header:null,
        }
    },
    HomeScreen:{
        screen: HomeScreen,
        navigationOptions:{
            header:null,
        }
    },
    MyBlogScreen:{screen: MyBlogScreen},
    ModalComment:{
        screen: ModalComment,
        mode:'modal',
        navigationOptions:{
            title:'My Blog',
            headerStyle:{
                backgroundColor:'steelblue',
                borderTopWidth:0.6,
                borderTopColor:'white',
            },
            headerTitleStyle:{
                color:'white',
            }
        }
    },
});

export const TabBar = TabNavigator(
    {
        MyblogScreen:{
            screen: MyBlogScreen
        },
        MyfriendsScreen:{
            screen: MyfriendsScreen
        }
    },{
        tabBarPosition:'top',        
        animationEnabled:true,
        tabBarOptions:{
            activeBackgroundColor:'#1E88E5',
            activeTintColor:'white',
            upperCaseLabel:false,
            labelStyle:{
                fontSize:15,
                fontWeight:'bold',
            },
            style:{
                backgroundColor:'steelblue'
            },
        }
    }
);
TabBar.navigationOptions = {
    title: "Tab"
};

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  );
    

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);


