/**
 * Created by mapbar_front on 2017/6/1.
 */
import React,{ Component } from 'react';
import { Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
class Mapbar_frontScreen extends Component{
    static navigationOptions = {
        title:"Mapbar_frontScreen"
    }
    render() {
        return <Text>This page is Mapbar_frontScreen</Text>
    }

}
class Tencent_frontScreen extends Component{
    static navigationOptions = {
        title:"Tencent_frontScreen"
    }
    render() {
        return <Text>This page is Tencent_frontScreen</Text>
    }

}
const ChatTabNavigator = TabNavigator({
    Mapbar_front:{screen:Mapbar_frontScreen},
    Tencent_front:{screen:Tencent_frontScreen}
});
export default ChatTabNavigator;