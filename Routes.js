import React, { Component } from 'react';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { StackNavigator } from 'react-navigation';

export const routes = StackNavigator(
    {
        Login:{
            screen:Login
        },
        Home:{
            screen:Home
        }
    },{
        headerMode:'none'
    }
)