/**
 * Created by mapbar_front on 2017/6/1.
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

export default class ChatScreen extends Component {
    static navigationOptions = {
        title:"Chat",
    }
    render() {
        console.log(this.props);
        return (
            <View>
                <Text>{this.props.navigation.state.params.user}Chat with Lucy</Text>
                <Button onPress={()=>this.props.navigation.goBack()} title="back"></Button>
            </View>
        );
    }
}

