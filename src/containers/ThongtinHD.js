import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
} from 'react-native';

export default class ThongtinHD extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataHD :[
                {}
            ],
        }
    }   
    componentWillMount () {
        this.setState({
            dataHD :
            [
                {
                    "mahopdong":"HD-1202-09092017",
                    "ngaykihopdong":"09/09/2017",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthaihoatdong':'Còn HĐ',
                    'trangthaicuoc':'Còn cước',
                },
                {
                    "mahopdong":"HD-1202-09092017",
                    "ngaykihopdong":"09/09/2017",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthaihoatdong':'Còn HĐ',
                    'trangthaicuoc':'Còn cước',
                },
                {
                    "mahopdong":"HD-1202-09092017",
                    "ngaykihopdong":"09/09/2017",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthaihoatdong':'Còn HĐ',
                    'trangthaicuoc':'Còn cước',
                },
                {
                    "mahopdong":"HD-1202-09092017",
                    "ngaykihopdong":"09/09/2017",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthaihoatdong':'Còn HĐ',
                    'trangthaicuoc':'Còn cước',
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
        const {navigate} = this.props.navigation;
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <FlatList
                    data = {this.state.dataHD}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('Tab')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {styles.textL}>Mã hợp đồng: </Text>
                                    <Text>{item.mahopdong}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {styles.textL}>Ngày kí HĐ: </Text>
                                    <Text>{item.ngaykihopdong}</Text>
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {styles.textL}>Địa điểm triển khai: </Text>
                                    <Text>{item.diadiemtrienkhai}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {styles.textL}>Trạng thái HĐ: </Text>
                                    <Text style = {{ color: "#1976D2"}}>{item.trangthaihoatdong}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {styles.textL}>Trạng thái cước: </Text>
                                    <Text style = {{ color: "#1976D2"}}>{item.trangthaicuoc}</Text>   
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