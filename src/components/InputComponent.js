/**
 * Created by mapbar_front on 2017/7/17.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Env from '../Env';
const estyle = Env.style;

export default class InputComponent extends Component{
    render(){
        return (
            <View style={[estyle.bgColor_white,estyle.borderBottomStyle,estyle.fxRow,estyle.rowCenter,estyle.hegithBase,this.props.style]}>
                <Text style={[estyle.padding,estyle.font_base,estyle.font_color_black,{width:Env.screen.baseFontSize * 150}]}>{this.props.them}</Text>
                <TextInput style={[estyle.fx1,estyle.font_base]} underlineColorAndroid='transparent' placeholder={this.props.prompt}/>
                {this.props.tag === '验证码'?<TouchableOpacity style={[estyle.center,estyle.borderStyle,{width:Env.screen.baseFontSize*180,height:Env.screen.baseFontSize*70},estyle.marginRight]}><Text>验证码</Text></TouchableOpacity>:null}
            </View>
        )
    }
}