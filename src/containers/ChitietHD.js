import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class ChitietHD extends Component {

    render (){
        return (
            <View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Mã HĐ: </Text>
                    <Text style = {style.textR}>HD-1202-09092017</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Ngày kí HĐ: </Text>
                    <Text style = {style.textR}>09/09/2017</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Ngày hết hạn HĐ: </Text>
                    <Text style = {style.textR}>09/09/2018</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Trạng thái HĐ: </Text>
                    <Text style = {style.textR}>Còn HĐ</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Gói cước: </Text>
                    <Text style = {style.textR}>Office1</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Ngày bắt đầu tính gói cước:  </Text>
                    <Text style = {style.textR}>10/09/2017</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Ngày đóng cước gần nhất: </Text>
                    <Text style = {style.textR}>10/09/2017</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Ngày hết hạn gói cước: </Text>
                    <Text style = {style.textR}>09/11/2017</Text>
                </View>
                <View style = {{flexDirection:'row'}}>
                    <Text style = {style.textL}>- Trạng thái cước: </Text>
                    <Text style = {style.textR}>Còn cước</Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    textL: {
        marginTop: 20,
        marginLeft: 15,
        fontSize: 18,
        fontWeight:'bold'
    },
    textR: {
        marginTop: 20,
        fontSize: 18,
    }
})