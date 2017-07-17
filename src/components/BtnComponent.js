/**
 * Created by mapbar_front on 2017/7/17.
 */
import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import Env from '../Env';
const estyle = Env.style;

export default class BtnComponent extends Component{
    render(){
        return (
            <TouchableOpacity onPress={()=>{
                this.props.OnClick && this.props.OnClick();
            }} style={[estyle.btn_base,this.props.style]}>
                <Text style={[estyle.font_h2,estyle.font_color_white]}>{this.props.title?this.props.title:'登录'}</Text>
            </TouchableOpacity>
        )
    }
}