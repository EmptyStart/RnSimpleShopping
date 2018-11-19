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
    ScrollView,
    Image,
    ListView,
} from 'react-native';
import Dimensions from 'Dimensions';
const {width}  = Dimensions.get('window');
import  TopMenu  from '../../localData/TopMenu';
import TopListView from "./TopListView";

export default class TopView extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            currentPositon : 0,
            name : '',
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal={true}                                                   //横向滑动
                    showsHorizontalScrollIndicator={false}           //隐藏横向滑动条
                    pagingEnbled={true}                                             //分页显示
                    onMomentumScrollEnd={(e)=>this.onScrollAnimationEnd(e)}
                >
                    {/*内容部分*/}
                    {this.renderScrollItem()}
                   {/* {this.renderScroll()}*/}
                </ScrollView>
                {/*页码部分*/}
                <View style={styles.indicatporStyle}>
                    {this.renderPage()}
                </View>
            </View>
        );
    }

    onScrollAnimationEnd(e){
        //求出当前页
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);

        // 更新状态机
        this.setState({
            currentPositon: currentPage
        });
    }

    renderScroll(){
        var arr = [];
        var colorArr = ['red','blue'];
        for (var i =0 ;i < 10 ;i++){
            arr.push(
                <View
                    key={i}
                    style={{backgroundColor:colorArr[i],width:width,height:120}}
                >
                    <Text>{i}</Text>
                </View>
            );
        }
        return arr;
    }
    renderScrollItem(){
        var arr = [];
        var data  = TopMenu.data;
        for (var i =0 ;i < data.length ;i++){
            arr.push(
                <TopListView
                    key={i}
                    dataArr={data[i]}
                />
            );
        }
        return arr;
    }

    renderPage(){
        var indicatporArr = [],style;
        for (var i = 0;i<2;i++){
            style = (i === this.state.currentPositon) ? {color:'orange'} : {color:'gray'};
            indicatporArr.push(
                <Text  key={i} style={[styles.pageStyle,style]}>&bull;</Text>
            );
        }
        return indicatporArr;
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop : 10,
        backgroundColor:'white'
    },
    topListViewStyle:{
        height:140,
        paddingTop:5,
    },
    pageStyle:{
        fontSize : 20,
        paddingRight:5
    },
    indicatporStyle:{
        flexDirection:'row',
        justifyContent:'center', //水平居中
    }
});
