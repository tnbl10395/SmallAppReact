import React from "react";
import { StackNavigator,TabNavigator } from 'react-navigation';
import Login from '../src/components/LoginComponent.js';
// import Hello from '../components/Hello.js';
import ModalComment from '../components/ModalComment.js';
import HomeScreen from '../src/components/HomeComponent.js';
import MyBlogScreen from '../src/components/MyBlogComponent.js';
import MyfriendsScreen from '../src/components/MyFriendsComponent.js';

export default App = StackNavigator(
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
