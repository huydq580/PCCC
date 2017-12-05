import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

export default class ThongtinTN extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataTN: ['']
        }
    }   
    componentWillMount () {
        this.setState({
            dataTN :
            [
                {
                    "tentoanha":"Kim Hoàn",
                    "diachi":"19 Duy Tân, Cầu Giấy, Hà Nội"
                },
                {
                    "tentoanha":"CMC Tower",
                    "diachi":"102 Duy Tân, Cầu Giấy, Hà Nội"
                },
                {
                    "tentoanha":"FPT",
                    "diachi":"33 Trần Thái Tông, Cầu Giấy, Hà Nội"
                },
                {
                    "tentoanha":"Misa",
                    "diachi":"99 Liễu Giai, Ba Đình, Hà Nội"
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
        const { navigate } = this.props.navigation;
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <FlatList
                    data = {this.state.dataTN}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('ChitietTN')}>
                            <View style = {styles.container}>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Tên toà nhà: </Text>
                                    <Text>{item.tentoanha}</Text>   
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {styles.textL}>Địa chỉ: </Text>
                                    <Text>{item.diachi}</Text>
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                        
                    }
                    keyExtractor={(item, index) => index}
                    ItemSeparatorComponent = {this.renderSeparator}
                        
            
                />
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginLeft:10,
        marginTop:10, 
    },
    itemView: {
        flexDirection: 'row', 
    },
    textL: {
        fontWeight:'bold'
    },
})