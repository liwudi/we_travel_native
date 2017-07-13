/**
 * Created by mapbar_front on 2017/7/13.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet
} from 'react-native';

import Env from '../../../Env';

const estyle = Env.style;

export default class MiddleInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[styles.middleInfo]}>
                <View style={[estyle.fxRow,estyle.padding]}>
                    <Image source={require('../../../assets/images/grouped.png')} />
                    <Text style={[estyle.font_h1,estyle.marginLeft]}>山花烂漫时</Text>
                </View>
                <View style={[estyle.fx1,estyle.fxRow,styles.infoContainer]}>
                    <View style={[styles.infoItem]}>
                        <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                        <Text>单次最远</Text>
                    </View>

                    <View style={[estyle.borderLeftStyle,estyle.borderRightStyle,styles.infoItem]}>
                        <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                        <Text>累计里程</Text>
                    </View>

                    <View style={[styles.infoItem]}>
                        <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                        <Text>足迹遍布</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    middleInfo:{
        width:Env.screen.width,
        height: Env.screen.width * 0.4,
        backgroundColor:Env.color.baseColor
    },
    infoContainer:{
        justifyContent: "space-between",
        paddingTop: Env.screen.baseFontSize * 30,
        paddingBottom: Env.screen.baseFontSize * 30
    },
    infoItem:{
        width:Env.screen.width * 0.33,
        justifyContent:'center',
        alignItems: 'center'
    },
});