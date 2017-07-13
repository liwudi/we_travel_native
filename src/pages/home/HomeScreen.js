/**
 * Created by mapbar_front on 2017/6/1.
 */
import React, { Component } from 'react';
import {
    View
} from 'react-native';

import Env from '../../Env';
const estyle = Env.style;


import HomeTop from './components/HomeTop';
import MiddleInfo from './components/MiddleInfo';
import GroupList from './components/GroupList';
export default class HomeScreen extends Component {
    static navigationOptions = {
        title:"图吧同行",
        headerTintColor: '#fff',
        headerStyle:{
            backgroundColor: '#3c78ff',
        },
        headerTitleStyle:{
            paddingLeft:Env.screen.baseFontSize * 260,
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        console.log("首页数据props",this.props);
        let _this = this;
        return (

            <View style={[estyle.fx1]}>

                {/*顶部搜索部分*/}
                <HomeTop OnClick={()=>{
                    _this.props.navigation.navigate('Search');
                }} />

                {/*中间头像信息展示部分*/}

                <MiddleInfo />
                {/*底部列表展示*/}
                <GroupList />
            </View>
        );
    }
}
//知识点，input如何去掉默认的下划线。underlineColorAndroid='transparent'
/**
 * 2、设置导航顶部样式headerStyle和headerTitleStyle。
 * 3、图片的加载以及（坑在哪里？本地图片和网络图片）。
 * 4、
 */
