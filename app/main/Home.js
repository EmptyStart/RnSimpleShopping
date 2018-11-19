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
    TextInput,
    Image,
    ScrollView,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions';
import TopView from "../home/TopView";
import UpperView from "../home/UpperView";
import MiddleView from "../home/MiddleView";
import ShoppingCenterView from "../home/ShoppingCenterView";
import ShopCenterDeatil from "../home/ShopCenterDeatil";
const {width} = Dimensions.get('window');

export default class Home extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    animated={true}     //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden
                    hidden={false}      //是否隐藏状态栏。
                    backgroundColor={'rgba(255,96,0,1.0)'} //状态栏的背景色
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。
                    barStyle={'dark-content'} // enum('default', 'light-content', 'dark-content')
                />
                {/*首页导航栏*/}
                {this.reanderNavBar()}
                {/*首页的主要内容*/}
                <ScrollView>
                    {/*顶部菜单栏布局*/}
                    <TopView/>
                    {/*中上商品推荐布局*/}
                    <UpperView/>
                    {/*中间商品推荐布局*/}
                    <MiddleView/>
                    {/*购物中心*/}
                    <ShoppingCenterView
                        navigation={this.props.navigation}
                    />
                    <TouchableOpacity
                        onPress={()=>this.props.navigation.navigate('ShopCenterDeatil')}
                    >
                        <Text>点击跳转</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }

    //首页导航栏
    reanderNavBar(){
        return(
            <View style={styles.topStyle}>
                <Text style={styles.topTextStyle}>广州</Text>
                <TextInput
                    style={styles.topInputStyle}
                    placeholder="输入商家, 品类, 商圈"
                    underlineColorAndroid='transparent'
                />
                <View style={styles.topViewImageStyles}>
                    <Image
                        source={ require('../../image/icon_homepage_message.png')}
                        style={styles.topImageStyle}
                    />
                    <Image
                        source={ require('../../image/icon_homepage_scan.png')}
                        style={[styles.topImageStyle,{marginLeft:10}]}
                    />
                </View>

            </View>
        )
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topStyle:{
        flexDirection:'row',
        height: Platform.OS =='ios' ? 50 : 48,
        backgroundColor:'rgba(255,96,0,1.0)',
        justifyContent:'space-around',
        alignItems:'center',
    },
    topTextStyle:{
        color:'white',
        fontSize:18
    },
    topInputStyle:{
        width : width * 0.65,
        backgroundColor:'white',
        height: Platform.OS =='ios' ?  40 : 38,
        borderColor:'gray',
        borderWidth: 1,
        borderRadius:18,
        paddingLeft:10,
    },
    topImageStyle:{
        width:28,
        height:28,
        padding:5
    },
    topViewImageStyles:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
    }
});
