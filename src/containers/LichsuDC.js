import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, 
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class LichsuDC extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataDC :['']
        }
    }
    componentWillMount () {
        this.setState({
            dataDC :
            [
                {
                    "ngaydongcuoc":"09/09/2017",
                    "thoigiandongcuoc":"6",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaydongcuoc":"09/09/2017",
                    "thoigiandongcuoc":"6",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaydongcuoc":"09/09/2017",
                    "thoigiandongcuoc":"6",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaydongcuoc":"09/09/2017",
                    "thoigiandongcuoc":"6",
                    'ngayhethan':'09/09/2018'
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
            <View style = {{flex:1}}>
                <FlatList
                    data = {this.state.dataDC}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('ChitietTN')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection:'row'}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Ngày đóng cước:  </Text>
                                    <Text style = {{fontSize: 18}} >{item.ngaydongcuoc}</Text>   
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {{fontWeight:'bold',  fontSize: 18}}>Thời gian đóng cước (tháng): </Text>
                                    <Text style = {{fontSize: 18}}>{item.thoigiandongcuoc}</Text>
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {{fontWeight:'bold',  fontSize: 18}}>Ngày hết hạn cước: </Text>
                                    <Text style = {{fontSize: 18}}>{item.ngayhethan}</Text>
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
    }
})