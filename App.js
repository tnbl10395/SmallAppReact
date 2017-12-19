import React from "react";
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login.js';
import Hello from './components/Hello.js';

const App = StackNavigator(
  {
  Home:{screen: Login},
  HelloScreen:{screen: Hello}
  },
  {
    headerMode:'none',
  }
);
export default App;

