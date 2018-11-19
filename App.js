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
    Navigator,
    YellowBox
} from 'react-native';

import StartPage from "./app/StartPage";
import Main from "./app/Main";
import {createStackNavigator} from 'react-navigation';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const AppScreen =createStackNavigator({
    StartPage:{
        screen:StartPage,
        navigationOptions:{
            gesturesEnabled:true,     //是否可以使用手势关闭此屏幕
            header:null
        }
    },
    Main:{
        screen:Main,
        navigationOptions:{
            gesturesEnabled:true,     //是否可以使用手势关闭此屏幕
            header:null                         //去掉 react-navigation提供的标题
        }
    }
},{
    mode:'card',
});

export default class App extends Component<Props> {

    render() {
        return (
           <AppScreen/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

