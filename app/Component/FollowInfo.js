import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';



export default class FollowInfo extends Component {

    btnClicke(){
        console.log('返回运行了');
        this.props.navigator.pop();
        this.props.callback('我是第二个界面传回来的值');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.them_id}</Text>
                <Button
                    title="我是按钮"
                    onPress={this.btnClicke.bind(this)}
                    color="#841584">
                </Button>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'red'
    },
    nextBtn: {
        width: 120,
        height: 30,
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'blue'
    },
    nextText: {
        flex:1,
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    }
});
