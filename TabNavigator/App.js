/**
 * Created by mapbar_front on 2017/6/1.
 */
import {
    Text,
} from 'react-native';

import React,{ Component } from 'react';
import { TabNavigator } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import ChatScreen from './components/ChatScreen';
const App = TabNavigator({
    Home: {screen:HomeScreen},
    Chat: {screen:ChatScreen}
});

export default  App;