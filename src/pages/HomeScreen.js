/**
 * Created by mapbar_front on 2017/6/1.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

import Env from '../Env';
const estyle = Env.style;

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
        return (

            <View style={[estyle.fx1]}>

                {/*顶部搜索部分*/}

                <View style={[styles.homeTop]}>
                    <View style={[styles.titleContainer,estyle.center]}>
                        <Text style={[estyle.font_color_white,estyle.font_h1]}>设置群目的地</Text>
                    </View>
                    <View style={[styles.searchContainer,estyle.rowCenter]}>
                        <View style={[styles.searchBox,estyle.paddingLeft]}>
                            <Image style={[styles.icon]} source={require('../assets/images/searched.png')} />
                            <TextInput style={[estyle.fx1,styles.input]} underlineColorAndroid='transparent' placeholder="请输入您要搜索的地点" />
                        </View>
                    </View>
                </View>

                {/*中间头像信息展示部分*/}
                <View style={[styles.middleInfo]}>
                    <View style={[estyle.fxRow,estyle.padding]}>
                        <Image source={require('../assets/images/grouped.png')} />
                        <Text style={[estyle.font_h1,estyle.marginLeft]}>山花烂漫时</Text>
                    </View>
                    <View style={[estyle.fx1,estyle.fxRow,styles.infoContainer]}>
                        <View style={[styles.infoItem]}>
                            <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                            <Text>单次最远</Text>
                        </View>

                        <View style={[estyle.borderLeftStyle,estyle.borderRightStyle,styles.infoItem]}>
                            <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                            <Text>累计里程</Text>
                        </View>

                        <View style={[styles.infoItem]}>
                            <Text style={[estyle.font_base,estyle.font_color_base]}><Text style={[{color:'blue'},estyle.font_h2]}>0.22</Text>公里</Text>
                            <Text>足迹遍布</Text>
                        </View>
                    </View>
                </View>

                {/*底部列表展示*/}
                <View style={[estyle.fx1,{backgroundColor:Env.color.baseColor},estyle.marginTop]}>
                    <ScrollView>
                        <View style={[estyle.fxRow,estyle.borderBottomStyle,styles.groupItem]}>
                            <Image style={[styles.groupImage]} source={require('../assets/images/grouped.png')} />
                            <Text style={[estyle.fx1,estyle.font_h1,estyle.marginLeft]}>西藏自驾群</Text>
                            <Image style={[styles.groupImage]} source={require('../assets/images/more.png')} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}
//知识点，input如何去掉默认的下划线。underlineColorAndroid='transparent'
/**
 * 2、设置导航顶部样式headerStyle和headerTitleStyle。
 * 3、图片的加载以及（坑在哪里？本地图片和网络图片）。
 */
const styles = StyleSheet.create({
    homeTop:{
        width:Env.screen.width,
        height: Env.screen.width * 0.4,
        backgroundColor:"#3c78ff"
    },
    titleContainer:{
        width:Env.screen.width,
        height: Env.screen.width * 0.15,
    },
    searchContainer:{
        width:Env.screen.width,
        height: Env.screen.width * 0.25,
    },
    searchBox:{
        width:Env.screen.width * 0.7,
        height: Env.screen.width * 0.1,
        backgroundColor: "#fff",
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: Env.screen.baseFontSize * 10,
    },
    icon:{
        width:Env.screen.width * 0.08,
        height: Env.screen.width * 0.08,
    },
    input:{
        borderBottomWidth: 0
    },

    middleInfo:{
        width:Env.screen.width,
        height: Env.screen.width * 0.4,
        backgroundColor:Env.color.baseColor
    },
    infoContainer:{
        justifyContent: "space-between",
        paddingTop: Env.screen.baseFontSize * 30,
        paddingBottom: Env.screen.baseFontSize * 30
    },
    infoItem:{
        width:Env.screen.width * 0.33,
        justifyContent:'center',
        alignItems: 'center'
    },

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
