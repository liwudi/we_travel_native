/**
 * Created by mapbar_front on 2017/7/13.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import Env from '../../../Env';

const estyle = Env.style;

export default class HomeTop extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[styles.homeTop]}>
                <View style={[styles.titleContainer,estyle.center]}>
                    <Text style={[estyle.font_color_white,estyle.font_h1]}>设置群目的地</Text>
                </View>
                <View style={[styles.searchContainer,estyle.rowCenter]}>
                    <TouchableOpacity onPress={()=>{this.props.OnClick();}} style={[styles.searchBox,estyle.paddingLeft]}>
                        <Image style={[styles.icon]} source={require('../../../assets/images/searched.png')} />
                        <TextInput style={[estyle.fx1,styles.input]} underlineColorAndroid='transparent' placeholder="请输入您要搜索的地点" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeTop: {
        width: Env.screen.width,
        height: Env.screen.width * 0.4,
        backgroundColor: "#3c78ff"
    },
    titleContainer: {
        width: Env.screen.width,
        height: Env.screen.width * 0.15,
    },
    searchContainer: {
        width: Env.screen.width,
        height: Env.screen.width * 0.25,
    },
    searchBox: {
        width: Env.screen.width * 0.7,
        height: Env.screen.width * 0.1,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Env.screen.baseFontSize * 10,
    },
    icon: {
        width: Env.screen.width * 0.08,
        height: Env.screen.width * 0.08,
    },
    input: {
        borderBottomWidth: 0
    },
});