import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

export default class DanhsachTB extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataTB :[
                {}
            ],
        }
    }   
    render (){
        const {navigate} = this.props.navigation;
        return (
            <View style = {{flex:1}}>
                <FlatList
                    data = {this.state.dataTB}
                    renderItem = {(item) =>
                        <TouchableOpacity onPress = {()=> navigate('ThongtinTB')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontWeight:'bold'}}>Mã thiết bị: </Text>
                                    <Text>97347234238</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Tên tòa nhà: </Text>
                                    <Text>Kim Hoàn</Text>
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Hợp đồng: </Text>
                                    <Text>HD-1202-09092017</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Địa điểm triển khai: </Text>
                                    <Text style = {{color: "#1565C0"}}>Số 678, đường Láng Đống Đa, Hà Nội</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Trạng thái: </Text>
                                    <Text style = {{color: "#1565C0"}}>Bình thường</Text>   
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                        
                    }
                    keyExtractor={(item, index) => index}
                    />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height:125,
        marginBottom:15,
        marginLeft: 10,
        marginTop:15, 
        borderBottomWidth: 1,
        borderBottomColor:'#BDBDBD'
    }
})