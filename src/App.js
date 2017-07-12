/**
 * Created by mapbar_front on 2017/6/1.
 */
import {
    Text,
} from 'react-native';

import React,{ Component } from 'react';
import { StackNavigator } from "react-navigation";

import HomeScreen from './pages/home/HomeScreen';
import ChatScreen from './pages/ChatScreen';
const App = StackNavigator({
    Home: {screen:HomeScreen},
    Chat: {screen:ChatScreen}
},{

});

export default  App;