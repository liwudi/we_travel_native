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

export default class MySelfInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[styles.mySelfContainer,estyle.fxRow,estyle.borderBottomStyle]}>
                <View style={[estyle.center,{height:Env.screen.baseFontSize * 150,width:Env.screen.baseFontSize * 150}]}>
                    <Image style={[{width:50,height:50}]} source={require('../../../assets/images/grouped.png')} />
                </View>
                <View style={[estyle.fx1,estyle.paddingTop]}>
                    <View style={[estyle.fxRow,{alignItems:'center'}]}>
                        <Text style={[estyle.padding,estyle.font_base]}>山花烂漫时</Text>
                        <Text style={[estyle.padding]}>目的地<Text style={[estyle.font_color_main]}>定福庄东街</Text></Text>
                    </View>

                    <View style={[estyle.fxRow,{justifyContent:'space-between'}]}>
                        <Text style={[estyle.paddingBottom,estyle.paddingLeft]}>距目的地<Text style={[estyle.font_color_main]}>17.66公里</Text>，<Text style={[estyle.font_color_main]}>19分钟</Text></Text>
                        <Text style={[estyle.marginRight,estyle.font_color_main]}>0km/h</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mySelfContainer:{
        height:Env.screen.baseFontSize * 150
    },
});

