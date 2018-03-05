import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'

export default class ChitietTN extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            underline : 'transparent',
            nameQuanli: 'Đinh Văn Thái',
            sdtToanha: '0963250395',
            nameDoitruong: 'Lê Công Vinh',
            sdtLienHe: '0983145317',
            cachuongtiepgiao: 'Chỉ có hướng từ ngõ vào',
            giaothongbentrongvangoai: 'Chỉ có 1 cầu thang duy nhất lên tầng, không có lỗi thoát hiểm',
            nguonnuoc: 'Không có',
            lucluongchuachay: 'Tổ bảo vệ 3 người thường trực 1 người', 
            phuongtientaicho: '20 bình cứu hỏa',
            diadiemkientruc: "Nhà tầng, có 1 cầu thang duy nhất lên các tầng",
            tinhchatnguyhiem: 'Không'
        }
    }
    edittext (){
        this.setState({
            edit: true
        })
    }
    
    render (){
        return (
            <ScrollView style = {{flex:1, backgroundColor: 'white'}}>
                <View style = {{flex:1, flexDirection: "row"}}>
                    
                        <Text style = {{flex:3}}></Text>
                        <TouchableOpacity onPress = {() => this.edittext()}>
                        <Text style = {{flex:1, color:"#0277BD"}}>Sửa</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{flex:9}}>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Tên tòa nhà: </Text>
                        <Text>Kim Hoàn</Text>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Địa chỉ: </Text>
                        <Text>19 Duy Tân, Cầu Giấy, Hà Nội</Text>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Người quản lí tòa nhà: </Text>
                        <TextInput
                                value = {this.state.nameQuanli}
                                underlineColorAndroid={this.state.underline}
                                editable={this.state.edit}
                                selectTextOnFocus={false}
                                style = {styles.textinput}
                        />
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Số điện thoại tòa nhà: </Text>
                        <TextInput
                                value = {this.state.sdtToanha}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Đội trưởng PCCC của tòa nhà: </Text>
                        <TextInput
                                value = {this.state.nameDoitruong}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Số điện thoại liên hệ: </Text>
                        <TextInput
                                value = {this.state.sdtLienHe}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Các hướng tiếp giáp: </Text>
                        <TextInput
                                value = {this.state.cachuongtiepgiao}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Giao thông bên trong và bên ngoài: </Text>
                        <TextInput
                                value = {this.state.giaothongbentrongvangoai}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = { styles.textL}>Nguồn nước: </Text>
                        <TextInput
                                value = {this.state.nguonnuoc}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>
                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Lực lượng chữa cháy tại chỗ: </Text>
                        <TextInput
                                value = {this.state.lucluongchuachay}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>

                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Phương tiện tại chỗ: </Text>
                        <TextInput
                                value = {this.state.phuongtientaicho}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>

                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Đặc điểm kiến trúc: </Text>
                        <TextInput
                                value = {this.state.diadiemkientruc}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>

                    <View style = {styles.viewcon}>
                        <Text style = {styles.textL}>Tính chất nguy hiểm cháy, nổ, độc, hại: </Text>
                        <TextInput
                                value = {this.state.tinhchatnguyhiem}
                                underlineColorAndroid={this.state.underline}
                                editable={false} 
                                selectTextOnFocus={false}
                                style = {styles.textinput}/>
                    </View>


                </View>
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    viewcon: {
        flexDirection: 'row',
        marginTop: 20,
    },
    textL: {
        marginLeft: 15,
        
        fontWeight:'bold'
    },
    textinput: {
        color: "#757575",
        padding: 0,
    }
})