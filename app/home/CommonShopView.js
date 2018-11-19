import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class CommonShopView extends Component<Props> {

    constructor(props){
        super(props);
        this.state={
            mWidth:0,
            mHeight:0,
            ismarginTop:0,
            ismarginLeft:0,
            imageUrl : '',
            title:'',
            content : '',
            titleColor:''
        }
    }
    render() {
        return (
            <View style={[styles.container,{ marginTop: this.props.ismarginTop},
                {width:this.props.mWidth},{height:this.props.mHeight},
                {marginLeft:this.props.ismarginLeft}]}>
                <View >
                    <Text style={{color:this.props.titleColor , fontWeight:'bold'}}>{this.props.title}</Text>
                    <Text style={{color:'gray',fontSize:12}}>{this.props.content}</Text>
                </View>
                <Image
                    source={{uri:this.props.imageUrl}}
                    style={{width:70,height : 22}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

});
