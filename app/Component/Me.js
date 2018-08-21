import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class Me extends Component {
    render() {
        return (
            <View style={styles.container}>
                
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
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
