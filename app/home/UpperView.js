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
    Image
} from 'react-native';
import Dimensions  from 'Dimensions';
const {width} = Dimensions.get('window');
import HomeTopMiddleLeft from '../../localData/HomeTopMiddleLeft';
import CommonShopView from "./CommonShopView";
const dataLeft = HomeTopMiddleLeft.dataLeft[0];
const dataRight = HomeTopMiddleLeft.dataRight;

export default class UpperView extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                {/*左边部分*/}
                {this.renderLeft()}
                {/*右边部分*/}
                <View style={styles.rightViewStyle}>
                    {this.renderRight()}
                </View>
            </View>
        );
    }

    renderLeft(){
        return(
            <View style={styles.leftViewStyle}>
                <Image
                    source={{uri:dataLeft.img1}}
                    style={{width:70,height:22,}}
                />
                <Image
                    source={{uri:dataLeft.img2}}
                    style={{width:70,height:22,marginTop:7}}
                />
                <Text style={styles.leftTitleStyle}>{dataLeft.title}</Text>
                <View style={styles.leftPriceSale}>
                    <Text style={{fontSize:11,color:'blue'}}>{dataLeft.price}</Text>
                    <Text style={{fontSize:11,color:'red',backgroundColor:'yellow',marginLeft:3}}>{dataLeft.sale}</Text>
                </View>
            </View>
        );
    }

    renderRight(){
        var arr = [];
        for (var i  = 0;i< 2;i++){
            arr.push(
                <CommonShopView
                    key={i}
                    ismarginTop={(i===1) ? 1 : 0 }
                    imageUrl={dataRight[i].rightImage}
                    title={dataRight[i].title}
                    content={dataRight[i].subTitle}
                    titleColor={dataRight[i].titleColor}
                />
            )
        }
        return arr;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:10,
        flexDirection:'row',
        height:100,
        alignItems:'center',
        justifyContent:'space-around',
    },
    leftViewStyle:{
        width:width / 2-1,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    rightViewStyle:{
        width:width / 2-1,
        height:100,

    },
    leftTitleStyle:{
        marginTop:7,
        color:'gray',
        fontSize:13,
    },
    leftPriceSale:{
        flexDirection:'row',
    }
});
