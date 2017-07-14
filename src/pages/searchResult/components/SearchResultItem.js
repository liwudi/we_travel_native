/**
 * Created by mapbar_front on 2017/7/14.
 */
import React,{ Component } from 'React';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
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
            <View style={[styles.searchListItem]}>
                <View style={[styles.itemInfo,estyle.fxRow,estyle.padding]}>
                    <View style={[styles.itemInfoNumber,estyle.rowCenter]}>
                        <View style={[styles.NumberContainer,estyle.bgColor_main,estyle.center]}>
                            <Text style={[estyle.font_color_white]}>1</Text>
                        </View>
                    </View>
                    <View style={[styles.itemInfoContent]}>
                        <Text style={[estyle.font_base]}>东直门桥</Text>
                        <Text>北京市东城区</Text>
                    </View>
                    <View style={[styles.itemInfoPosition]}>
                        <Text>东北4km</Text>
                    </View>
                </View>
                <View style={[styles.itemLink,estyle.fx1,estyle.fxRow,estyle.borderTopStyle,estyle.borderBottomStyle]}>
                    <TouchableOpacity onPress={()=>{this.props.onWatchClick();}} style={[estyle.fx1,{alignItems:'center'},estyle.clumnCenter,estyle.fxRow,estyle.marginTop,estyle.marginBottom,estyle.borderRightStyle]}>
                        <Image style={[{width:20,height:20}]} source={require('../../../assets/images/watchMap.png')} />
                        <Text style={[estyle.font_base]}>看地图</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{this.props.onDesClick();}} style={[estyle.fx1,{alignItems:'center'},estyle.clumnCenter,estyle.fxRow,estyle.marginTop,estyle.marginBottom,estyle.borderLeftStyle]}>
                        <Image style={[{width:20,height:20}]} source={require('../../../assets/images/destination.png')} />
                        <Text style={[estyle.font_base]}>设终点</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchListItem:{
        width:Env.screen.width,
        height:Env.screen.baseFontSize * 230
    },
    itemInfo:{
        height:Env.screen.baseFontSize * 140
    },
    itemInfoNumber:{
        width:Env.screen.baseFontSize * 80
    },
    NumberContainer:{
        width:Env.screen.baseFontSize * 40,
        height:Env.screen.baseFontSize * 40,
        borderRadius: Env.screen.baseFontSize * 20,
    },
    itemInfoContent:{
        flex:1
    },
    itemInfoPosition:{
        width:Env.screen.baseFontSize * 240,

    }
});