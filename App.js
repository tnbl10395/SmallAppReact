import React from "react";
import { StackNavigator } from 'react-navigation';
import Login from './components/Login.js';
import Hello from './components/Hello.js';
import ModalComment from './components/ModalComment.js';
import HomeScreen from './components/Home.js';
import MyBlogScreen from './components/Myblog.js';

const App = StackNavigator(
  {
  Login:{screen: Login},
  // HelloScreen:{screen: Hello},
  HomeScreen:{screen: HomeScreen},
  MyBlogScreen:{screen: MyBlogScreen},
  ModalComment:{screen: ModalComment},
  
  },
  {
    headerMode:'none',
  }
);

export default App;

