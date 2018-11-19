/**
 * Sample React Native app
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';
import Dimensionsss  from 'Dimensions';
const {width,height} = Dimensionsss.get('window');

export default class StartPage extends Component<Props> {
    //复杂的操作：定时器\网络请求
    componentDidMount(){
        //定时器
        this.timer = setTimeout(()=>{
            this.props.navigation.replace('Main');
            this.timer && clearTimeout(this.timer);
        },1000);
    }

    render() {
        return (
            <Image
                source={require('../image/start_logo_icon.png')}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:width,
        height:height,
    },

});
