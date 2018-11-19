import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import HomeTopMiddle from '../../localData/HomeTopMiddle';
import CommonShopView from "./CommonShopView";
const data = HomeTopMiddle.data[0];
import Dimensions from 'Dimensions';
const {width}  = Dimensions.get('window');
import HomeTopMiddleLeft from '../../localData/HomeTopMiddleLeft';
const dataRight = HomeTopMiddleLeft.dataRight;

export default class MiddleView extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <CommonShopView
                    mHeight={50}
                    mWidth={width}
                    imageUrl={data.image}
                    title={data.title}
                    content={data.subTitle}
                    titleColor={'red'}
                />
                <View style={styles.rightViewStyle}>
                    {this.renderRight()}
                </View>
                <View style={styles.rightViewStyle}>
                    {this.renderRight()}
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
                    ismarginLeft={(i===1)? 1 : 0}
                    mHeight={50}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,
    },
    rightViewStyle:{
        flexDirection:'row',
        marginTop:1,
        justifyContent:'space-around',
    }
});
