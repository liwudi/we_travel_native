/**
 * Created by mapbar_front on 2017/7/14.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';

import Env from '../../Env';

const estyle = Env.style;


export default class LoginScreen extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:"用户登录",
        headerTintColor: Env.color.baseColor,
        headerStyle:{
            backgroundColor: Env.color.mainColor,
            height:0,
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 200,

        },
    }
    render(){
        let _this = this;
        return (
            <View>
                <Text>登录界面</Text>
            </View>
        )
    }
}
