/**
 * Created by mapbar_front on 2017/7/13.
 */
import React,{ Component } from 'React';

import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native';


import Env from '../../../Env';

const estyle = Env.style;

export default class DataList extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={[estyle.fx1,estyle.bgColor_white]}>
                <ScrollView style={[estyle.fx1]}>
                    <View style={[estyle.fxRow,estyle.borderBottomStyle,styles.historyItem,estyle.rowCenter,estyle.marginLeft,estyle.paddingLeft]}>
                        <Image style={[styles.historyImageClock]} source={require('../../../assets/images/clock.png')} />
                        <Text style={[estyle.fx1,estyle.font_base,estyle.marginLeft]}>东小口镇</Text>
                        <Image style={[styles.historyImageArrow]} source={require('../../../assets/images/listInput.png')} />
                    </View>
                    <View style={[styles.historyRecord,estyle.center,estyle.borderBottomStyle]}>
                        <Text>清除历史记录</Text>
                    </View>
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
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

    historyRecord:{
        height: Env.screen.baseFontSize * 100,
    }
})