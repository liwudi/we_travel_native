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


export default class SetPageScreen extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:"东直门桥",
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: '#3c78ff',
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 180,
        },
    };
    render(){
        let _this = this;
        return (
            <View>
                <Text>设置界面</Text>
            </View>
        )
    }
}
