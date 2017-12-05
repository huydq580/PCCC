import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';

export default class ThongtinTB extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataSDT :['']
        }
    }
    componentWillMount () {
        this.setState({
            dataSDT :
            [
                {
                    "ten":"Nguyễn Văn Hiệu",
                    "sdt":"0963250395",
                },
                {
                    "ten":"Đoàn Văn Giáp",
                    "sdt":"0963250395",
                },
                {
                    "ten":"Nguyễn Văn A",
                    "sdt":"0963250395",
                },
                {
                    "ten":"Nguyễn Văn B",
                    "sdt":"0963250395",
                },
                {
                    "ten":"Nguyễn Văn C",
                    "sdt":"0963250395",
                },
                
            ],
        })
    }
    renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              backgroundColor: "#CED0CE",
                marginTop: 10,
            }}
          />
        );
      };
    render (){
        return (
          
                <ScrollView style = {{flex:1, backgroundColor: 'white'}}>
                    <View style = {{flex:1}}>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {styles.textL}>- Mã thiết bị: </Text>
                            <Text style = {styles.textR}>9275834233</Text>
                        </View>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {styles.textL}>- Địa điểm: </Text>
                            <Text style = {styles.textR}>Số 123, đường Láng, Đống Đa, Hà Nội</Text>
                        </View>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {styles.textL}>- Trạng thái kết nối: </Text>
                            <Text style = {{marginTop: 20, color: '#00E676'}}>Bình thường</Text>
                        </View>
                        <View style = {{flexDirection:'row'}}>
                            <Text style = {styles.textL}>- Test cảnh báo: </Text>
                            <Text style = {styles.textR}>anhhieuuet@gmail.com</Text>
                        </View>
                    </View>
                    <View style = {{flex:1, marginTop: 20}}>
                        <View style = {{flex:1, backgroundColor:"#42A5F5" ,justifyContent: 'center',alignItems: 'center',}}>
                            <Text style = {{fontWeight:'bold'}}>Danh sách số điện thoại nhận cảnh báo</Text>
                        </View>
                        <View style = {{flex:5}}>
                            <FlatList
                                data = {this.state.dataSDT}
                                renderItem = {({item}) =>
                                    <View style = {styles.container}>
                                        <View style = {{flexDirection:'row', marginTop: 10}}>
                                            <Text style = {styles.textSDT}>{item.ten} </Text>
                                            <Text style = {styles.textSDT}>{item.sdt}</Text> 
                                            <Text style = {{color:"#0277BD", marginLeft: 10, flex:1}}>Sửa</Text>
                                            <Text style = {{color:"#C62828", marginLeft: 10, flex:1}}>Xóa</Text>  
                                        </View>
                                    </View>
                                }
                                keyExtractor={(item, index) => index}
                                ItemSeparatorComponent = {this.renderSeparator}               
                            />
                    

                    
                        </View>

                    </View>
                </ScrollView>
            
        )
    }
}
const styles = StyleSheet.create({
    textL: {
        marginTop: 20,
        marginLeft: 15,
        
        fontWeight:'bold'
    },
    textR: {
        marginTop: 20,

    },
    textSDT: {
        fontWeight:'bold',
        flex:2,
    },
})