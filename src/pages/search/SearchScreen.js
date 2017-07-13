/**
 * Created by mapbar_front on 2017/7/13.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ScrollView
} from 'react-native';

import Env from '../../Env';
import TouchableItem from "../../../node_modules/react-navigation/lib-rn/views/TouchableItem";
const estyle = Env.style;



export default class SearchScreen extends Component{
    static navigationOptions = {
        title:"图吧同行",
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: '#3c78ff',
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 180,
        },
    };
    render(){
        return (
            <View style={[estyle.fx1]}>

                <View style={[estyle.borderBottomStyle,estyle.center,styles.setTitleContainer]}>
                    <Text style={[estyle.font_base]}>设置群目的地</Text>
                </View>

                <View style={[styles.searchContainer,estyle.borderBottomStyle,estyle.fxRow]}>
                    <View style={[styles.searchBox,estyle.fxRow,estyle.paddingLeft]}>
                        <Image style={[styles.icon]} source={require('../../assets/images/search.png')} />
                        <TextInput style={[estyle.fx1,styles.input]} underlineColorAndroid='transparent' placeholder="请输入您要搜索的地点" />
                    </View>
                    <TouchableOpacity style={[estyle.btn_larger]}>
                        <Text style={[estyle.font_h2,estyle.font_color_white]}>搜索</Text>
                    </TouchableOpacity>
                </View>

                <View style={[estyle.fx1,estyle.paddingLeft,estyle.marginLeft]}>
                    <ScrollView style={[estyle.fx1]}>
                        <View style={[estyle.fxRow,estyle.borderBottomStyle,styles.historyItem,estyle.rowCenter]}>
                            <Image style={[styles.historyImageClock]} source={require('../../assets/images/clock.png')} />
                            <Text style={[estyle.fx1,estyle.font_base,estyle.marginLeft]}>东小口镇</Text>
                            <Image style={[styles.historyImageArrow]} source={require('../../assets/images/listInput.png')} />
                        </View>
                    </ScrollView>
                    <View>
                        <Text>清除历史记录</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    setTitleContainer:{
        height:Env.screen.baseFontSize * 100
    },

    searchContainer:{
        height:Env.screen.baseFontSize * 120,
        justifyContent:'space-around',
        alignItems:'center'
    },
    searchBox:{
        width:Env.screen.width * 0.6,
        height:Env.screen.baseFontSize * 80,
        backgroundColor:'#ccc',
        borderRadius: Env.screen.baseFontSize * 10,
        alignItems:'center',
    },
    icon:{
        width:Env.screen.baseFontSize * 60,
        height:Env.screen.baseFontSize * 60,
    },


    historyItem:{
        height:Env.screen.baseFontSize * 100,
        paddingRight: Env.screen.baseFontSize * 30
    },
    historyImageClock:{
        width:Env.screen.baseFontSize * 50,
        height:Env.screen.baseFontSize * 50,
    },
    historyImageArrow:{
        width:Env.screen.baseFontSize * 40,
        height:Env.screen.baseFontSize * 40,
    },
});
