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

export default class DestinationButton extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let _this = this;
        return (
            <View style={[estyle.center,styles.DestinationBottom,estyle.borderStyle,estyle.fxRow,{justifyContent:'space-between'}]}>
                <TouchableOpacity onPress={()=>{_this.props.onSetClick();}} style={[styles.DestinationIcon,estyle.center]}>
                    <Image style={[{width:40,height:40}]} source={require('../../../assets/images/set.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={[estyle.center,styles.speakButton]}>
                    <Text style={[estyle.font_base]}>按住说话</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{_this.props.onChatClick();}} style={[styles.DestinationIcon,estyle.center]}>
                    <Image style={[{width:40,height:40}]} source={require('../../../assets/images/chat.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    DestinationBottom:{
        height:Env.screen.baseFontSize * 120
    },
    DestinationIcon:{
        width:Env.screen.baseFontSize * 120,
        height:Env.screen.baseFontSize * 120
    },
    speakButton:{
        width:Env.screen.baseFontSize * 400,
        height:Env.screen.baseFontSize * 80,
        backgroundColor:'#ccc',
        borderRadius:Env.screen.baseFontSize * 8,
    }
});

