import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ThongtinCtyDigitime extends Component {
    render (){
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <Text style = {{marginTop: 15, marginLeft: 10, }}>Công ty TNHH Công nghệ dịch vụ kỹ thuật DIGITIME</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, }}>Địa chỉ văn phòng: Tòa nhà Kim Hoàn, ngõ 19 Duy Tân, Cầu Giấy, Hà Nội</Text>
                <Text style = {{marginTop: 15, marginLeft: 10 }}>Điện thoại: 02462908089</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: "#1976D2" }}>Email: safeone@digitime.vn</Text>
                <Text style = {{marginTop: 15, marginLeft: 10, color: "#1976D2" }}>Www.digitime.vn</Text>
            </View>
        )
    }
}