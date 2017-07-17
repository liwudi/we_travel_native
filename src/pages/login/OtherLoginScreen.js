/**
 * Created by mapbar_front on 2017/7/17.
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
import { NavigationActions } from 'react-navigation';

import Env from '../../Env';

const estyle = Env.style;

import InputComponent from '../../components/InputComponent';
import BtnComponent from '../../components/BtnComponent';

export default class RegisterScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            islogin:false
        }
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
        tabBarLabel:"手机快捷登录",
    };
    login(){
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]
        })
        this.props.navigation.dispatch(resetAction)

    }
    render(){
        let _this = this;
        return (
            <View style={[estyle.fx1,estyle.paddingTop]}>
                <InputComponent them="账号" prompt="请输入账号" />
                <InputComponent them="验证码" prompt="短信验证码" tag = '验证码'/>
                <View style={[estyle.hegithLittle,estyle.clumnCenter,estyle.marginRight,{alignItems:'flex-end'}]}>

                </View>

                <View style={[estyle.hegithBase,estyle.rowCenter]}>
                    <BtnComponent OnClick={()=>{
                        this.login();
                    }} style={[{width:Env.screen.width * 0.8,height:Env.screen.baseFontSize * 100}]} />
                </View>
                <View style={[estyle.hegithLittle,estyle.clumnCenter,estyle.fxRow]}>
                    <Text>注册视为同意</Text><TouchableOpacity><Text style={[estyle.font_color_main]}>服务条款和隐私政策</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
