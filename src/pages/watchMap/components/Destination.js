/**
 * Created by mapbar_front on 2017/7/14.
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
            <View style={[styles.bannerContainer,estyle.borderStyle]}>
                <View style={[estyle.fx1,estyle.marginLeft,estyle.clumnCenter]}>
                    <Text style={[estyle.font_h3]}>定福庄东街</Text>
                    <Text>东12km，北京市朝阳区</Text>
                </View>
                <View style={[{height:Env.screen.baseFontSize * 100},estyle.fxRow,estyle.center,estyle.borderTopStyle]}>
                    <Image style={[{width:20,height:20}]} source={require('../../../assets/images/destination.png')} />
                    <Text style={[estyle.font_base]}>设终点</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bannerContainer:{
        height:Env.screen.baseFontSize * 250,

    }
});