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
            dataLSHD :
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
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <FlatList
                    data = {this.state.dataLSHD}
                    renderItem = {({item}) =>
                            <View style = {styles.container}>
                                <View style = {{flexDirection:'row'}}>
                                    <Text style = {styles.textL}>Ngày kí HĐ:  </Text>
                                    <Text>{item.ngaykihd}</Text>   
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {styles.textL}>Thời gian gia hạn HĐ (tháng): </Text>
                                    <Text>{item.thoigiangh}</Text>
                                </View>
                                <View style = {{flexDirection:'row', marginTop:5}}>
                                    <Text style = {styles.textL}>Ngày hết hạn HĐ: </Text>
                                    <Text>{item.ngayhethan}</Text>
                                </View>
                            </View>
                            
                        
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