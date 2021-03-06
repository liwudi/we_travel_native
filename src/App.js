/**
 * Created by mapbar_front on 2017/6/1.
 */
import {
    Text,
} from 'react-native';

import React,{ Component } from 'react';
import { StackNavigator,TabNavigator } from "react-navigation";

import HomeScreen from './pages/home/HomeScreen';
import SearchScreen from './pages/search/SearchScreen';
import SearchResultScreen from './pages/searchResult/SearchResultScreen';
import WatchMapScreen from './pages/watchMap/WatchMapScreen';
import DestinationScreen from './pages/destination/DestinationScreen';
import SetPageScreen from './pages/setPage/SetPageScreen';
import ChatPageScreen from './pages/chatpage/ChatPageScreen';

import LoginScreen from './pages/login/LoginScreen';
import OtherLoginScreen from './pages/login/OtherLoginScreen';
import RegisterScreen from './pages/register/RegisterScreen';


import Env from './Env';
const estyle = Env.style;
//这是路由配置
var Apps = StackNavigator({
    Home: {
        screen:HomeScreen
    },
    Search: {
        screen:SearchScreen
    },
    SearchResult:{
        screen:SearchResultScreen
    },
    WatchMap:{
        screen:WatchMapScreen
    },
    Destination:{
        screen:DestinationScreen
    },
    SetPage:{
        screen:SetPageScreen
    },
    ChatPage:{
        screen:ChatPageScreen
    }
});


const MyApp = TabNavigator({
    Login:{
        screen:LoginScreen
   },
    OtherLogin:{
        screen:OtherLoginScreen
    }
},{
    tabBarOptions:{

        inactiveTintColor: '#000',
        activeTintColor: Env.color.mainColor,
        style:{
            backgroundColor:"#fff",
        },
        labelStyle:{
            fontSize: Env.screen.baseFontSize * 30
        }
    }
});
/**
 * @todo,目前这个没搞明白，测试中
 */
var App = StackNavigator({
    Login:{screen:MyApp},
    Register:{screen:RegisterScreen},
    Home: {
        screen:HomeScreen
    },
    Search: {
        screen:SearchScreen
    },
    SearchResult:{
        screen:SearchResultScreen
    },
    WatchMap:{
        screen:WatchMapScreen
    },
    Destination:{
        screen:DestinationScreen
    },
    SetPage:{
        screen:SetPageScreen
    },
    ChatPage:{
        screen:ChatPageScreen
    }
},{
    headerStyle:{
        height:0
    },
});

/**
 * @todo:还需要嵌入redux的使用，用来管理用户数据
 * @todo:需要检查所有的js文件的类名
 */
/**
 * @todo,第一步，ui检查和设计，包括组件分离，公共组件提取；第二步，路由梳理，提取公共元素；第三步，数据处理，添加假数据。并且封装服务。第四步，redux数据监管。
 *
 */
export default  App;
