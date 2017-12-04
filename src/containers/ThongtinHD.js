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
            <View style = {{flex:1}}>
                <FlatList
                    data = {this.state.dataHD}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('Tab')}>
                            <View style = {styles.container}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Mã hợp đồng: </Text>
                                    <Text style = {{fontSize: 18}} >{item.mahopdong}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Ngày kí HĐ: </Text>
                                    <Text style = {{fontSize: 18}} >{item.ngaykihopdong}</Text>
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Địa điểm triển khai: </Text>
                                    <Text style = {{fontSize: 18}} >{item.diadiemtrienkhai}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Trạng thái HĐ: </Text>
                                    <Text style = {{fontSize: 18,color: "#1565C0"}}>{item.trangthaihoatdong}</Text>   
                                </View>
                                <View style = {{flexDirection: 'row', marginTop:4}}>
                                    <Text style = {{fontWeight:'bold', fontSize: 18}}>Trạng thái cước: </Text>
                                    <Text style = {{fontSize: 18,color: "#1565C0"}}>{item.trangthaicuoc}</Text>   
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