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
    TouchableOpacity
} from 'react-native';

import Env from '../../Env';

const estyle = Env.style;

import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';
/**
 * @todo:学习一下webView的使用。
 */
export default class RegisterScreen extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:"注册",
        headerTintColor: Env.color.baseColor,
        headerStyle:{
            backgroundColor: Env.color.mainColor,
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 230,

        }
    }
    render(){
        let _this = this;
        return (
            <View style={[estyle.fx1,]}>
                <InputComponent style={[estyle.marginTop]} them='手机' prompt="请输入手机"/>
                <InputComponent style={[estyle.marginTop]} them='姓名' prompt="请输入真实姓名"/>
                <InputComponent style={[estyle.marginTop]} them='密码' prompt="请输入6-20位字符"/>
                <InputComponent style={[estyle.marginTop]} them='验证码' prompt="图形验证码"/>
                <View style={[estyle.hegithBase,estyle.center]}>
                    <BtnComponent title="注册" style={[{width:Env.screen.width * 0.8,height:Env.screen.baseFontSize * 100},estyle.marginTop]} />
                </View>
                <View style={[estyle.hegithLittle,estyle.center,estyle.fxRow]}>
                    <Text>注册视为同意</Text><TouchableOpacity><Text style={[estyle.font_color_main]}>服务条款和隐私政策</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

