import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class ThongtinHD extends Component {
    render (){
        const {navigate} = this.props.navigation;
        return (
                <View>
                    <TouchableOpacity  onPress = {()=> navigate('Tab')}>
                        <Text>Thong tin HD</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}