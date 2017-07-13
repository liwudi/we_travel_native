/**
 * Created by mapbar_front on 2017/6/1.
 */
import {
    Text,
} from 'react-native';

import React,{ Component } from 'react';
import { StackNavigator } from "react-navigation";

import HomeScreen from './pages/home/HomeScreen';
import SearchScreen from './pages/search/SearchScreen';
const App = StackNavigator({
    Home: {screen:HomeScreen},
    Search: {screen:SearchScreen}
},{


});
/**
 * @todo:还需要嵌入redux的使用，用来管理用户数据
 */
export default  App;