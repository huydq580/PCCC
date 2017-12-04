import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, 
    FlatList,
    TouchableOpacity
} from 'react-native';

export default class LichsugiahanHD extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataLSHD :['']
        }
    }
    componentWillMount () {
        this.setState({
            dataTN :
            [
                {
                    "ngaykihd":"09/09/2017",
                    "thoigiangh":"12",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaykihd":"09/09/2017",
                    "thoigiangh":"12",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaykihd":"09/09/2017",
                    "thoigiangh":"12",
                    'ngayhethan':'09/09/2018'
                },
                {
                    "ngaykihd":"09/09/2017",
                    "thoigiangh":"12",
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
                    data = {this.state.dataTN}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('ChitietTN')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection:'row'}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Ngày kí HĐ:  </Text>
                                    <Text style = {{fontSize: 18}} >{item.ngaykihd}</Text>   
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {{fontWeight:'bold',  fontSize: 18}}>Thời gian gia hạn HĐ (tháng): </Text>
                                    <Text style = {{fontSize: 18}}>{item.thoigiangh}</Text>
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {{fontWeight:'bold',  fontSize: 18}}>Ngày hết hạn HĐ: </Text>
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