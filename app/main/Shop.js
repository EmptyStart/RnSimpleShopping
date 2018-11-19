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
} from 'react-native';
import {createTabNavigator} from 'react-navigation';


export default class Shop extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Text >商品界面</Text>
            </View>
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

});
