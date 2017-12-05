import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default class ChitietTN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Hieu'
        }
    }
   
    render (){
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <View style = {{flexDirection: 'row'}}>
                    <Text>Tên tòa nhà: </Text>
                    <Text>Kim Hoàn</Text>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text>Địa chỉ: </Text>
                    <Text>19 Duy Tân, Cầu Giấy, Hà Nội</Text>
                </View>
                <View style = {{flexDirection: 'row'}}>
                    <Text>Người quản lí tòa nhà: </Text>
                    <TextInput value={this.state.name}/>
                </View>
            </View>
        )
    }
}