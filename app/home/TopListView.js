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
    ListView,
    TouchableOpacity,
} from 'react-native';
import Dimensions from 'Dimensions';
const {width}  = Dimensions.get('window');
const itemWidth = Platform.OS == 'ios' ? 70 : 60;
const marginWidth = (width - itemWidth * 5) / 6;

export default class TopListView extends Component<Props> {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged : (r1,r2) => r1 != r2});

        this.state={
            dataArr : [],
            dataSource: ds.cloneWithRows(this.props.dataArr),
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                contentContainerStyle={styles.contentViewStyle}         //设置样式
                scrollEnabled={false}
                renderRow={(rowData)=>this.renderItem(rowData) }
            />
        )
    }

    itemClick(msg){
        alert(msg);
    }
    renderItem(rowData){
        return (
            <TouchableOpacity style={styles.itemStyle}  onPress={()=>this.itemClick(rowData.title)}>
                    <Image source={this.handleImageUrl(rowData.image)} style={styles.itemImageStyle}/>
                    <Text style={styles.itemTextStyle}>{rowData.title}</Text>
            </TouchableOpacity>
        );
    }
    handleImageUrl(name){
        return {uri:name};
    }
}

const styles = StyleSheet.create({
    container: {
    },
    itemStyle:{
        width : itemWidth,
        height:60,
        marginLeft: marginWidth,
        alignItems:'center',
        justifyContent:'center'
    },

    itemImageStyle:{
        width:Platform.OS == 'ios' ? 40 : 36,
        height:Platform.OS == 'ios' ? 40 : 36,
    },
    contentViewStyle:{
        flexWrap:'wrap',            //多个cell在同一行显示
        flexDirection:'row',        //设置主轴的方向
        width:width,
    },
    itemTextStyle:{
        fontSize : 12
    }
});
