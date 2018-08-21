import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';


export default class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleArr:['发视频','发图片','发段子','发声音','发链接','音乐相册'],
            imgArr:[require('../../Images/public/publish-video.png'),require('../../Images/public/publish-picture.png'),require('../../Images/public/publish-text.png'),require('../../Images/public/publish-audio.png'),require('../../Images/public/publish-link.png'),require('../../Images/public/publish-live.png')]
        };
    }

    render() {

        var pages =[];
        for (var i = 0; i < this.state.titleArr.length; i++) {

            console.log('靠'+this.state.imgArr[i].toString());

            var icon =  '../../Images/public/publish-video.png';
            console.log('有病'+icon);
            pages.push(
                <View style={{alignItems: 'center',marginTop:20}}>
                    <Image
                        source={this.state.imgArr[i]}
                    />
                    <Text style={{marginTop:5}}>
                        {this.state.titleArr[i]}
                    </Text>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <View style={{marginTop:64,flex: 1,flexDirection:'column'}}>
                    <View style={{marginTop:10,height:60,justifyContent: 'center',
                        alignItems: 'center'}}>
                        <Image
                            source={require('../../Images/public/app_slogan.png')}
                        />
                    </View>


                    <View style={{flex:1,flexDirection:'row',marginTop:10,marginRight:20,marginLeft:20,justifyContent:'space-between',flexWrap:'wrap'}}>

                        {pages}
                    </View>

                </View>


            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    }
});
