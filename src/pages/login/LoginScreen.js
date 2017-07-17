/**
 * Created by mapbar_front on 2017/7/14.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Env from '../../Env';

const estyle = Env.style;

import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';
export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        _this = this;
    }
    static navigationOptions = {
        title:"账号登录",
        headerRight:<TouchableOpacity onPress={()=>{
            _this.props.navigation.navigate('Register')
        }}><Text style={[estyle.font_base,estyle.font_color_white,estyle.marginRight]}>注册</Text></TouchableOpacity>,
        headerTintColor: Env.color.baseColor,

        headerStyle:{
            backgroundColor: Env.color.mainColor,
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 250,
        },
        tabBarLabel:"账号密码登录",
    };

    render(){
        let _this = this;
        return (
            <View style={[estyle.fx1,estyle.paddingTop]}>
                <InputComponent them="手机" prompt="请输入手机"/>
                <InputComponent them="密码" prompt="请输入密码"/>
                <View style={[estyle.hegithLittle,estyle.clumnCenter,estyle.marginRight,{alignItems:'flex-end'}]}>
                    <Text style={[estyle.font_note,estyle.font_color_note]}>忘记密码</Text>
                </View>

                <View style={[estyle.hegithBase,estyle.rowCenter]}>
                    <BtnComponent style={[{width:Env.screen.width * 0.8,height:Env.screen.baseFontSize * 100}]} />
                </View>
            </View>
        )
    }
}
