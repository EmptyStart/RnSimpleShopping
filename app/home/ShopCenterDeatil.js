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
    WebView
} from 'react-native';
import Dimensions from 'Dimensions';
const {width,height} = Dimensions.get('window');

export default class ShopCenterDeatil extends Component<Props> {

    //动态设置标题
    static navigationOptions = {
        title:'商品详情'
    }

    constructor(props){
        super(props);
        this.state={
            data:props.navigation.state.params.data,
        }
    }
    render() {
        return (
            <View style={styles.container}>
               <WebView
                    source={{uri: this.getUrl(this.state.data.detailurl) }}
                    style={styles.webViewStyle}
               />
            </View>
        );
    }

    getUrl(str){
        var position = str.indexOf('?url=');
        var uri = str.substring(position+5,str.length);
        return uri;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webViewStyle:{
        width:width,
        height:height,
    }
});
