/**
 * Created by mapbar_front on 2017/7/13.
 */
import React,{ Component } from 'React';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';


import Env from '../../../Env';

const estyle = Env.style;

export default class SetTitle extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[estyle.borderBottomStyle,estyle.center,styles.setTitleContainer,estyle.bgColor_white]}>
                <Text style={[estyle.font_base]}>设置群目的地</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    setTitleContainer:{
        height:Env.screen.baseFontSize * 100
    },
})