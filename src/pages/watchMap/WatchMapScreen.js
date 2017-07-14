/**
 * Created by mapbar_front on 2017/7/14.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';

import Env from '../../Env';

const estyle = Env.style;

import Map from './components/Map';

import Destination from './components/Destination';
export default class WatchMapScreen extends Component{
    constructor(props){
        super(props);
    }
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
            <View style={[estyle.fx1,estyle.bgColor_white]}>
                <Map />
                <Destination />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    bannerContainer:{
        height:Env.screen.baseFontSize * 250,

    }
});
