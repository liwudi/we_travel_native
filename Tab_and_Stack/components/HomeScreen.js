/**
 * Created by mapbar_front on 2017/6/1.
 */
import React,{ Component } from 'react';
import { Text,View,Button,Platform,BackHandler } from 'react-native';
export default class HomeScreen extends Component{
    static navigationOptions = {
        title:"HomeScreen",
    }

    render() {
        return (
        <View>
            <Text>This page is HomeScreen</Text>
            <Button onPress={()=>this.props.navigation.navigate("Chat")} title="got to tab"></Button>
        </View>
        )
    }
    componentWillMount(){
        console.log(Platform.OS)
        if(Platform.OS === 'android'){
            console.log("马上执行监听")
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnmount(){
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    onBackAndroid = () => {
        const nav = this.props.navigation.state.routeName;
        console.log(1,nav);
        //const routers = nav.getCurrentRoutes();
        if (nav != "Home") {
            nav.pop();
            return true;
        }else{
            BackHandler.exitApp();
        }
        return false;
    };
}
