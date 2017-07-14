/**
 * Created by mapbar_front on 2017/7/13.
 */
import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Env from '../../Env';
/**
 * @what:todo,下面这个是干什么的？
 */
import TouchableItem from "../../../node_modules/react-navigation/lib-rn/views/TouchableItem";
const estyle = Env.style;

import SetTitle from './components/SetTitle';
import Search from './components/Search';
import DataList from './components/DataList';


export default class SearchScreen extends Component{
    static navigationOptions = {
        title:"图吧同行",
        headerTintColor: Env.color.baseColor,
        headerStyle:{
            backgroundColor: Env.color.mainColor,
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 180,
        },
    };
    render(){
        let _this = this;
        return (
            <View style={[estyle.fx1]}>
                <SetTitle />
                <Search OnClick={()=>{
                    _this.props.navigation.navigate('SearchResult');
                }}/>

                <DataList />

            </View>
        )
    }
}

/**
 * @todo:还需要，第一、进行数据缓存处理。第二、搜索接口的数据处理。第三、事件处理
 */
