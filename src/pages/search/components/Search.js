/**
 * Created by mapbar_front on 2017/7/13.
 */
import React,{ Component } from 'React';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';


import Env from '../../../Env';

const estyle = Env.style;

export default class Search extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[styles.searchContainer,estyle.borderBottomStyle,estyle.fxRow,estyle.bgColor_white]}>
                <View style={[styles.searchBox,estyle.fxRow,estyle.paddingLeft]}>
                    <Image style={[styles.icon]} source={require('../../../assets/images/search.png')} />
                    <TextInput style={[estyle.fx1,styles.input]} underlineColorAndroid='transparent' placeholder="请输入您要搜索的地点" />
                </View>
                <TouchableOpacity onPress={()=>{
                    this.props.OnClick();
                }} style={[estyle.btn_larger]}>
                    <Text style={[estyle.font_h2,estyle.font_color_white]}>搜索</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchContainer:{
        height:Env.screen.baseFontSize * 120,
        justifyContent:'space-around',
        alignItems:'center'
    },
    searchBox:{
        width:Env.screen.width * 0.6,
        height:Env.screen.baseFontSize * 80,
        backgroundColor:'#eee',
        borderRadius: Env.screen.baseFontSize * 10,
        alignItems:'center',
    },
    icon:{
        width:Env.screen.baseFontSize * 60,
        height:Env.screen.baseFontSize * 60,
    },
})