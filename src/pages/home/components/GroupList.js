/**
 * Created by mapbar_front on 2017/7/13.
 */
import React, { Component } from 'react';

import {
    View,
    Image,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';

import Env from '../../../Env';

const estyle = Env.style;

export default class GroupList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[estyle.fx1,{backgroundColor:Env.color.baseColor},estyle.marginTop]}>
                <ScrollView>
                    <View style={[estyle.fxRow,estyle.borderBottomStyle,styles.groupItem]}>
                        <Image style={[styles.groupImage]} source={require('../../../assets/images/grouped.png')} />
                        <Text style={[estyle.fx1,estyle.font_h1,estyle.marginLeft]}>西藏自驾群</Text>
                        <Image style={[styles.groupImage]} source={require('../../../assets/images/more.png')} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    groupItem:{
        width: Env.screen.width * 0.95,
        height: Env.screen.baseFontSize * 120,
        marginLeft: Env.screen.width * 0.05,
        alignItems: 'center'
    },
    groupImage:{
        width: Env.screen.baseFontSize * 100,
        height: Env.screen.baseFontSize * 100,
    },
    groupName:{

    },
});