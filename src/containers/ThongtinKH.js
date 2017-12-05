import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class ThongtinKH extends Component {
    render (){
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Họ tên: </Text>
                    <Text style = {style.textR}>Nguyễn Văn Hiệu</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Số điện thoại: </Text>
                    <Text style = {style.textR}>0963250395</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Email: </Text>
                    <Text style = {style.textR}>anhhieuuet@gmail.com</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    textL: {
        marginTop: 20,
        marginLeft: 15,
        
        fontWeight:'bold'
    },
    textR: {
        marginTop: 20,

    }
})