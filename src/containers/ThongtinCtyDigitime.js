import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ThongtinCtyDigitime extends Component {
    render (){
        return (
            <View>
                <Text style = {{marginTop: 15, marginLeft: 10, color: 'black' }}>Công ty TNHH Công nghệ dịch vụ kỹ thuật DIGITIME</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: 'black' }}>Địa chỉ văn phòng: Tòa nhà Kim Hoàn, ngõ 19 Duy Tân, Cầu Giấy, Hà Nội</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: 'black' }}>Điện thoại: 02462908089</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: 'black' }}>Email: safeone@digitime.vn</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: 'black' }}>Www.digitime.vn</Text>
            </View>
        )
    }
}