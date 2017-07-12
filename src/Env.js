/**
 * Created by mapbar_front on 2017/7/12.
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

    font_color_white:{
        color:'#fff'
    },
    font_color_base:{
        color:'#555555'
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
    }
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