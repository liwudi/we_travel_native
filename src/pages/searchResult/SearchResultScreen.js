/**
 * Created by mapbar_front on 2017/7/13.
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

import SearchResultItem from './components/SearchResultItem'

export default class SearchResultScreen extends Component{
    constructor(props){
        super(props);
    }
    static navigationOptions = {
        title:"东直门桥",
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
            <ScrollView style={[estyle.fx1,estyle.bgColor_white]}>
                <SearchResultItem onWatchClick={()=>{
                    _this.props.navigation.navigate('WatchMap')
                }} onDesClick={()=>{
                    _this.props.navigation.navigate('Destination')
                }}/>

            </ScrollView>
        )
    }
}
