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

export default class MapInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[estyle.fx1,estyle.center]}>
                <Text>地图视角</Text>
            </View>
        )
    }
}
