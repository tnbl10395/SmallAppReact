import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Myblog from '../components/Myblog.js';
import Myfriends from '../components/Myfriends.js';

const tabBar = TabNavigator(
    {
        MyblogScreen:{
            screen: Myblog
        },
        MyfriendsScreen:{
            screen: Myfriends
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
tabBar.navigationOptions = {
    title: "Tab"
}
export default tabBar;