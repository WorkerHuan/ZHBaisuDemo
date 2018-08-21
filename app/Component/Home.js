import React, {Component} from 'react';
import {StyleSheet, Text, ListView, View, Image,Button,TouchableHighlight} from 'react-native';


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.isShowClick = this.isShowClick.bind(this);
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {

            cities: this.ds.cloneWithRows(
                [{
                    isShow:false,
                    isShowButton:false,
                text: "",
                u: {name: "", header: []},
                passtime: ""
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
        this.getdata('http://s.budejie.com/topic/list/jingxuan/29/bs02-iphone-4.6/0-20.json', function (data) {
            console.log(data)

            scope.setState({
                cities: scope.ds.cloneWithRows(data.list),

            });
            //scope.state.citys = data.cities;
            //this.getdata('https://apikuai.baidu.com/city/getstartcitys', (data) => {
            //  this.state.citys = data.cities;
            //});
        });
    }

    isShowClick(rowID)
    {
        let newData = JSON.parse(JSON.stringify(this.state.cities._dataBlob.s1));

        newData[rowID].isShow = !newData[rowID].isShow;
        this.setState({
            cities: this.ds.cloneWithRows(newData)

        })
        // console.log(newData[rowID]);
    }

    _textLayout(rowID,e) {

        let descHeight= e.nativeEvent.layout.height;

        console.log('高度'+descHeight);

        let newData = JSON.parse(JSON.stringify(this.state.cities._dataBlob.s1));

        if (descHeight > 60)
        {
            newData[rowID].isShowButton = true;
            this.setState({
                cities: this.ds.cloneWithRows(newData)

            })
        }

    }

    render() {


        return (
            <View style={styles.container}>
                <ListView style={styles.listView} enableEmptySections={true}
                          dataSource={this.state.cities}
                          renderRow={(rowData, sectionID, rowID, highlightRow) =>
                              <View style={styles.listItem}>
                                  <View style={styles.listItemHeader}>
                                      <Image style={{width: 38, height: 38,borderRadius:19}}
                                             source={{uri: rowData.u.header[0]}}
                                      />
                                      <View style={styles.listItemHeadertext}>
                                          <Text style={styles.nameText}>
                                              {rowData.u.name}
                                          </Text>
                                          <Text style={styles.timeText}>
                                              {rowData.passtime}
                                          </Text></View>

                                  </View>

                                  <Text style={styles.text}
                                        ref="myText"
                                        onLayout={this._textLayout.bind(this,rowID)}
                                        numberOfLines={rowData.isShow?0:4}
                                  >{rowData.text}</Text>


                                  {rowData.isShowButton?(
                                      <TouchableHighlight onPress={this.isShowClick.bind(this,rowID)}>
                                          <Text
                                              style={{marginLeft:10,fontSize: 14,
                                                  color: 'gray'}}
                                          >{rowData.isShow?'收起':'展开'}</Text>
                                      </TouchableHighlight>
                                      ):null}


                                  <View style={{height:40,flexDirection: 'row',justifyContent:'space-between',alignItems:'center'}}>
                                      <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center',marginLeft:10}}>
                                          <Image
                                              style={styles.image}
                                              source={require('../../Images/home/mainCellDing.png')}
                                          />
                                          <Text style={styles.imageText}>23</Text>
                                      </View>
                                      <View style={styles.itemIamge}>
                                          <Image
                                              style={styles.image}
                                              source={require('../../Images/home/mainCellCai.png')}
                                          />
                                          <Text style={styles.imageText}>54</Text>
                                      </View>
                                      <View style={styles.itemIamge}>
                                          <Image
                                              style={styles.image}
                                              source={require('../../Images/home/mainCellShare.png')}
                                          />
                                          <Text style={styles.imageText}>125</Text>
                                      </View>
                                      <View style={{flexDirection: 'row',justifyContent:'flex-start',alignItems:'center',marginRight:20}}>
                                          <Image
                                              style={styles.image}
                                              source={require('../../Images/home/mainCellComment.png')}
                                          />
                                          <Text style={styles.imageText}>99</Text>
                                      </View>
                                  </View>
                              </View>
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
        marginLeft:10,
        marginBottom:10,
        fontSize: 15,
        color: 'black'
    },
    itemIamge:{
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    image:{
        width:20,
        height:20,
    },
    imageText:{
      color:'gray',
      fontSize:12,
    },
    nameText: {
        marginTop:5,
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
        justifyContent:'space-between'
    },
    listItem: {
        paddingTop: 15,
        paddingLeft: 10,
        flexDirection: 'column',
        borderBottomColor: '#CCCCCC',//cell的分割线
        borderBottomWidth: 1
    },
});
