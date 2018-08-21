import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
} from 'react-native';

import HomePage from './HomePage'
import FavorPage from './FavorPage'

import Home from './Component/Home'
import NewMessgae from './Component/NewMessgae'
import Add from './Component/Add'
import Follow from './Component/Follow'
import Me from './Component/Me'

export default class MyTabBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedBarItem : 'home'
    }
  }
  render() {
    return (
      <TabBarIOS
        // barTintColor = 'white'
        tintColor = 'red'
        // unselectedItemTintColor = 'gray'
        translucent = {true}
        >
          <TabBarIOS.Item
            title = '首页'
            renderAsOriginal={true}
            icon = {require('../Images/tabbar/tabBar_essence_icon.png')}
            selectedIcon = {require('../Images/tabbar/tabBar_essence_click_iconN.png')}
            selected = {this.state.selectedBarItem === 'home'}
            onPress = {()=>{this.setState({selectedBarItem:'home'})}}
            >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                style={{flex:1}}
                initialRoute = {{
                  component: Home,
                  title: '首页'
                }}
                configureScene = {(route) =>
                  {
                    return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                }
                renderScene = { (route, navigator) => {
                  let Home = route.component;
                  return <Home navigator={navigator}/>
                }}
                >
              </NavigatorIOS>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title = '视频'
              renderAsOriginal={true}
              icon = {require('../Images/tabbar/tabBar_new_icon.png')}
              selectedIcon = {require('../Images/tabbar/tabBar_new_click_iconN.png')}
              selected = {this.state.selectedBarItem === 'NewMessgae'}
              onPress = {()=>{this.setState({selectedBarItem:'NewMessgae'})}}
          >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {{
                      component: NewMessgae,
                      title: '视频'
                  }}
                  configureScene = {(route) =>
                  {
                      return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                  }
                  renderScene = { (route, navigator) => {
                      let NewMessgae = route.component;
                      return <NewMessgae navigator={navigator}/>
                  }}
              >
              </NavigatorIOS>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              // title = '添加'
              style={{position:'relative',marginTop:10}}
              renderAsOriginal={true}
              icon = {require('../Images/tabbar/tabBar_publish_icon.png')}
              // selectedIcon = {require('./Image/home-selected.png')}
              selected = {this.state.selectedBarItem === 'Add'}
              onPress = {()=>{this.setState({selectedBarItem:'Add'})}}
          >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {{
                      component: Add,
                      title: '添加'
                  }}
                  configureScene = {(route) =>
                  {
                      return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                  }
                  renderScene = { (route, navigator) => {
                      let Add = route.component;
                      return <Add navigator={navigator}/>
                  }}
              >
              </NavigatorIOS>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title = '社区'
              renderAsOriginal={true}
              icon = {require('../Images/tabbar/tabBar_friendTrends_icon.png')}
              selectedIcon = {require('../Images/tabbar/tabBar_friendTrends_click_iconN.png')}
              selected = {this.state.selectedBarItem === 'follow'}
              onPress = {()=>{this.setState({selectedBarItem:'follow'})}}
          >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {{
                      component: Follow,
                      title: '社区'
                  }}
                  configureScene = {(route) =>
                  {
                      return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                  }
                  renderScene = { (route, navigator) => {
                      let Follow = route.component;
                      return <Follow navigator={navigator}/>
                  }}
              >
              </NavigatorIOS>
          </TabBarIOS.Item>

          <TabBarIOS.Item
              title = '我'
              renderAsOriginal={true}
              icon = {require('../Images/tabbar/tabBar_me_icon.png')}
              selectedIcon = {require('../Images/tabbar/tabBar_me_click_iconN.png')}
              selected = {this.state.selectedBarItem === 'Me'}
              onPress = {()=>{this.setState({selectedBarItem:'Me'})}}
          >
              {/* <HomePage></HomePage> */}
              <NavigatorIOS
                  style={{flex:1}}
                  initialRoute = {{
                      component: Me,
                      title: '我'
                  }}
                  configureScene = {(route) =>
                  {
                      return NavigatorIOS.SceneConfigs.FloatFromBottom;
                  }
                  }
                  renderScene = { (route, navigator) => {
                      let me = route.component;
                      return <me navigator={navigator}/>
                  }}
              >
              </NavigatorIOS>
          </TabBarIOS.Item>


      </TabBarIOS>
    );
  }
}

var styles = StyleSheet.create({

});
