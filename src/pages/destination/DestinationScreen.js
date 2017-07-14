/**
 * Created by mapbar_front on 2017/7/14.
 */
import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';

import Env from '../../Env';

const estyle = Env.style;

import DestinationButton from './components/DestinationButton';
import MySelfInfo from './components/MySelfInfo';

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
        let _this = this;
        return (
            <View style={[estyle.fx1,estyle.bgColor_white]}>
                {/*自己信息*/}
                <MySelfInfo />

                {/*他人信息*/}
                <View style={[styles.userBaner]}>

                </View>
                {/*地图信息*/}
                <View style={[estyle.fx1,estyle.center]}>

                    <Text>地图展示</Text>
                </View>
                {/*底部信息*/}
                <DestinationButton onSetClick = {()=>{
                    _this.props.navigation.navigate('SetPage');
                }}
                onChatClick = {()=>{
                    _this.props.navigation.navigate('ChatPage');
                }}/>
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
    mySelfContainer:{
        height:Env.screen.baseFontSize * 150
    },
    speakButton:{
        width:Env.screen.baseFontSize * 400,
        height:Env.screen.baseFontSize * 80,
        backgroundColor:'#ccc',
        borderRadius:Env.screen.baseFontSize * 8,
    }
});
