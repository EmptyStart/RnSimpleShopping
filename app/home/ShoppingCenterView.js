
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import ShopCenterShops from '../../localData/ShopCenterShops';
import XMG_Home_D5 from '../../localData/XMG_Home_D5';
const dataXMG = XMG_Home_D5.data;
const data = ShopCenterShops.data;
import Dimensions from 'Dimensions';
import More from "../main/More";
import ShopCenterDeatil from "./ShopCenterDeatil";
const {width} = Dimensions.get('window');
const imageWidth = 100;
const imageMarginWidth = (width - imageWidth * 3) / 4;

export default class ShoppingCenterView extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            navigation:'',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                {/*购物中心头部*/}
                {this.renderTopView()}
                {/*购物中心内容*/}
                <View style={{backgroundColor:'#e8e8e8',width:width,height:1,marginBottom:7}}/>
                <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                    {this.renderShopItem()}
                </ScrollView>
            </View>
        );
    }

    renderShopItem(){
        var arr = [];
        for (var i = 0;i <data.length ;i++ ){
            const dataSource = data[i];
            arr.push(
                <TouchableOpacity onPress={()=>{this.itemOnclick(dataSource.shopName)} }  key={i}
                                  style={[{marginLeft:imageMarginWidth,marginRight:(i ==3) ? imageMarginWidth : 0 }]}>
                    <Image source={{uri:dataSource.shopImage}} style={styles.itemImageStyle}/>
                    <Text style={styles.shopItemTextStyle}>{dataSource.saleCount+'家优惠'}</Text>
                    <Text style={{color:'#161413'}}>{dataSource.shopName}</Text>
                </TouchableOpacity>
            )
        }
        return arr;
    }

    itemOnclick(content){
        //alert(content);
        for (var i = 0; i<dataXMG.length; i++){
            var dataSourceXMG = dataXMG[i];
            if (content === dataSourceXMG.name) {
                {
                    this.props.navigation.navigate('ShopCenterDeatil',{data:dataSourceXMG,title:content});
                }
                break;
            }
        }
    }

    renderTopView(){
        return(
            <View style={styles.shopTitleStyle}>
                <View style={[styles.titleLeftStyle,{marginLeft:20},{ justifyContent:'flex-start'}]}>
                    <Image  source={{uri:'gwzx'}} style={{width:20,height:20}}/>
                    <Text style={{color:'#161413',fontWeight:'bold',marginLeft:7}}>购物中心</Text>
                </View>

                <View  style={[styles.titleLeftStyle,{marginRight:20},{ justifyContent:'flex-end'}]}>
                    <Text style={{color:'gray'}}>{'全部'+data.length+'家'}</Text>
                    <Image  source={{uri:'home_arrow'}} style={{width:15,height:15,marginLeft:7}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:10,
        backgroundColor:'white',
    },
    shopTitleStyle:{
        height:40,
        flexDirection:'row',
        justifyContent:'space-around',

    },
    titleLeftStyle:{
        width:width / 2,
        flexDirection:'row',
        alignItems:'center',
    },
    itemImageStyle:{
        width:imageWidth,
        height:80,
        borderRadius:5,
    },
    shopItemTextStyle:{
        position:'absolute',
        top:50,
        padding:2,
        fontSize:10,
        color:'white',
        backgroundColor:'#ff0000'
    }
});
