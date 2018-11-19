/**
 * Sample React Native app
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Home from "./main/Home";
import More from "./main/More";
import Shop from "./main/Shop";
import Mine from "./main/Mine";
import ShopCenterDeatil from "./home/ShopCenterDeatil";

const HomeScreen = createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            header:null,
        }
    },
    ShopCenterDeatil:{screen:ShopCenterDeatil},
},{

});
const MainScreen = createBottomTabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:({navigation})=>({
            tabBarLabel:'主页',
            textColor:'red',
            tabBarIcon:({focused,tintColor}) => (
                <Image
                    source={focused ? require('../image/icon_tabbar_homepage_selected.png')
                        : require('../image/icon_tabbar_homepage.png') }
                    style={styles.logoIcon}
                />
            ),
            headerStyle:{
                backgroundColor:'red',
            },
        })
    },
    Shop:{
        screen:Shop,
        navigationOptions:{
            tabBarLabel:'商品',

            tabBarIcon:({focused,tintColor}) => (
                <Image
                    source={focused ? require('../image/icon_tabbar_merchant_selected.png')
                        : require('../image/icon_tabbar_merchant_normal.png') }
                    style={styles.logoIcon}
                />
            ),
        }
    },
    More:{
        screen:More,
        navigationOptions:{
            tabBarLabel:'更多',
            tabBarIcon:({focused,tintColor}) => (
                <Image
                    source={focused ? require('../image/icon_tabbar_misc_selected.png')
                        : require('../image/icon_tabbar_misc.png') }
                    style={styles.logoIcon}
                />
            ),
        }
    },
    Mine:{
        screen:Mine,
        navigationOptions:{
            tabBarLabel:'我的',
            tabBarIcon:({focused,tintColor}) => (
                <Image
                    source={focused ? require('../image/icon_tabbar_mine_selected.png') : require('../image/icon_tabbar_mine.png') }
                    style={styles.logoIcon}
                />
            ),
        }
    }
},{
    // 初始化哪个界面为显示的第一个界面，如果不配置，默认使用RouteConfigs中的第一个页面当做根界面
     initialRouteName: "Home",
    lazy: true,
    tabBarOptions: {
         inactiveTintColor: "#8F8F8F",          //未选中
        activeTintColor: "#ED5601",              //选择字体颜色
        labelStyle: { fontSize: 11 }
     }
});

export default class Main extends Component<Props> {

    render() {
        return (
            <MainScreen />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    logoIcon:{
        width:30,
        height:30,
    }
});
