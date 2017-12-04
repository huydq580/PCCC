import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';

export default class HotlinePCCC extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataHotline :[
                {}
            ],
        }
    }   
    onpress() {
        alert('chua set nut goi')
    }
    render (){
        const {navigate} = this.props.navigation;
        return (
            <View style = {{flex:1}}>
                <FlatList
                    data = {this.state.dataHotline}
                    renderItem = {(item) =>
                        <TouchableOpacity onPress = {()=> navigate('ThongtinTB')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontWeight:'bold'}}>Mã thiết bị: </Text>
                                    <Text>97347234238</Text>   
                                </View>
                                
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Địa điểm triển khai: </Text>
                                    <Text style = {{color: "#1565C0"}}>Số 678, đường Láng Đống Đa, Hà Nội</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold'}}>Hotline PCCC khu vực: 04.123.123.123 </Text>
                                    <Button onPress = {this.onpress}
                                            title="Gọi"
                                            color="#00ff5e"
                                        />   
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
        height:80,
        marginBottom:15,
        marginLeft: 10,
        marginTop:15, 
        borderBottomWidth: 1,
        borderBottomColor:'#BDBDBD'
    }
})