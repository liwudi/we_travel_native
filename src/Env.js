/**
 * Created by mapbar_front on 2017/7/12.
 */

/**
 * @introduction
 * 样式相关的配置，与样式无关的都不能写入里面，相当于一个全局common.css
 */

import { Platform, NativeModules, Dimensions, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('screen');

const baseFontSize = width / 720;

const color = {
    mainColor:"#3c78ff",
    bgColor:'#f1f1f1',
    baseColor:'#ffffff',

}

const style = {
    fx1:{
        flex:1
    },
    fxRow:{
        flexDirection:'row'
    },
    center:{
        justifyContent:'center',
        alignItems:'center'
    },
    clumnCenter:{
        justifyContent: 'center'
    },
    rowCenter: {
        alignItems:'center'
    },

    font_h1:{
        fontSize: baseFontSize * 50,
    },
    font_h2:{
        fontSize: baseFontSize * 45,
    },
    font_h3:{
        fontSize: baseFontSize * 40,
    },
    font_base:{
        fontSize: baseFontSize * 35,
    },
    /**
     * @todo:字体颜色样式定制
     */
    font_color_white:{
        color:'#fff'
    },
    font_color_base:{
        color:'#555555'
    },
    font_color_main:{
        color:'#3c78ff'
    },
    padding:{
        padding: baseFontSize * 15,
    },
    paddingLeft:{
        paddingLeft: baseFontSize * 15,
    },
    paddingRight:{
        paddingRight: baseFontSize * 15,
    },
    paddingTop:{
        paddingTop: baseFontSize * 15,
    },
    paddingBottom:{
        paddingBottom: baseFontSize * 15,
    },
    margin:{
        margin: baseFontSize * 15
    },
    marginLeft:{
        marginLeft: baseFontSize * 15
    },
    marginRight:{
        marginRight: baseFontSize * 15
    },
    marginTop:{
        marginTop: baseFontSize * 15
    },
    marginBottom:{
        marginBottom: baseFontSize * 15
    },
    borderStyle:{
        borderWidth: 1,
        borderColor: '#cccccc'
    },
    borderTopStyle:{
        borderTopWidth: 1,
        borderTopColor: '#cccccc'
    },
    borderBottomStyle:{
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    borderLeftStyle:{
        borderLeftWidth: 1,
        borderLeftColor: '#cccccc'
    },
    borderRightStyle:{
        borderRightWidth: 1,
        borderRightColor: '#cccccc'
    },
    /**
     * @todo:按钮不同样式的定制
     */
    btn_base:{
        width: baseFontSize * 150,
        height: baseFontSize * 60,
        backgroundColor: color.mainColor,
        borderRadius: baseFontSize * 10,
        justifyContent:"center",
        alignItems:'center',
    },
    btn_larger:{
        width: baseFontSize * 180,
        height: baseFontSize * 80,
        backgroundColor: color.mainColor,
        borderRadius: baseFontSize * 10,
        justifyContent:"center",
        alignItems:'center',
    },
    /**
     * @todo:添加其他的背景色
     */
    bgColor_white:{
        backgroundColor:color.baseColor,
    },
    bgColor_main:{
        backgroundColor:color.mainColor,
    },

}
export default {
    screen:{
        width:width,
        height:height - (Platform.OS == 'ios' ? 0: StatusBar.currentHeight),
        baseFontSize:baseFontSize,
    },
    style,
    color
}