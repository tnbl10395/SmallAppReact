import React from "react";
import { StackNavigator,TabNavigator } from 'react-navigation';
import Login from '../src/containers/LoginContainer.js';
// import Hello from '../components/Hello.js';
import ModalComment from '../components/ModalComment.js';
import HomeScreen from '../components/Home.js';
import MyBlogScreen from '../components/MyBlog2.js';
import MyfriendsScreen from '../components/Myfriends.js';

export default App = StackNavigator(
{
    // Login:{
    //     screen: Login,
    //     navigationOptions:{
    //         header:null,
    //     }
    // },
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