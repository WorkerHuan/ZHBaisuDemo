import React, {Component} from 'react';
import {StyleSheet, Text, ListView, View, Image,TouchableHighlight,NavigatorIOS} from 'react-native';
import FollowInfo from './FollowInfo'

export default class Follow extends Component {

    constructor(props) {
        super(props);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            cities: this.ds.cloneWithRows([{
                info: "",
                theme_name: "",
                image_list: "",
                today_topic_num: "",
                theme_id: "",

            }])
        };
    }


    getdata(url, suc, err) {
        return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // if (data.errno == 0) {
                suc(data)
                // }
                console.log(data)

            })
            .catch((e) => {
                console.log('错误' + e)
            });
    }

    componentDidMount() {
        var scope = this;
        this.getdata('http://d.api.budejie.com/forum/subscribe/bs02-iphone-4.6.json', function (data) {
            console.log(data)

            scope.setState({
                cities: scope.ds.cloneWithRows(data.list)
            });
            //scope.state.citys = data.cities;
            //this.getdata('https://apikuai.baidu.com/city/getstartcitys', (data) => {
            //  this.state.citys = data.cities;
            //});
        });
    }

    listItemClick(them_id){

        // console.log(them_id);


        this.props.navigator.push({
            component:FollowInfo,
            title:'社区详情',
            passProps:{
                'them_id':them_id,
                callback:((text)=>{this.seenToSecond(text)})
            }
        })

    }
    seenToSecond(text)
    {
        console.log('已经传回：'+text);
    }



    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.listView} enableEmptySections={true}
                          dataSource={this.state.cities}
                          renderRow={(rowData) =>
                              <TouchableHighlight onPress={this.listItemClick.bind(this,rowData.theme_id)}>
                                  <View style={styles.listItem}>
                                      <Image
                                          style={{marginLeft: 0, marginTop: 0,marginBottom:10, width: 50, height: 50}}
                                          source={{uri: rowData.image_list}}
                                      />
                                      <View style={{flexDirection: 'column',marginTop:-8,marginLeft:10,flexWrap:'wrap'}}>
                                          <Text style={{marginTop:5,fontSize:15}}>{rowData.theme_name}</Text>
                                          <Text style={{marginTop:5,color:'gray',fontSize:12}}>{'今日更新 ' +rowData.today_topic_num + '| 在线人数 ' +rowData.theme_id}</Text>
                                          <Text
                                              style={{marginTop:5,marginRight:10,width:250,paddingRight:10,color:'gray',fontSize:12}}
                                              numberOfLines={1}
                                              ellipsizeMode='tail'
                                          >{rowData.info}</Text>
                                      </View>

                                  </View>
                              </TouchableHighlight>

                          }
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    text: {
        marginTop: 10,
        marginLeft: 10,
        marginBottom: 10,
        fontSize: 15,
        color: 'black'
    },
    itemIamge: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    image: {
        width: 20,
        height: 20,
    },
    imageText: {
        color: 'gray',
        fontSize: 12,
    },
    nameText: {
        marginTop: 5,
        color: 'blue',
        fontSize: 12,
    },
    timeText: {
        color: 'gray',
        fontSize: 10
    },
    listView: {
        marginTop: 0,
        flex: 1,
        borderBottomColor: '#CCCCCC',//cell的分割线
        borderBottomWidth: 1
    },
    listItemHeader: {
        paddingLeft: 10,
        flexDirection: 'row',
    },
    listItemHeadertext: {
        paddingLeft: 5,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    listItem: {
        paddingTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        borderBottomColor: '#CCCCCC',//cell的分割线
        borderBottomWidth: 1
    },
});
