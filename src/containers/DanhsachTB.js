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
            dataTB :[''],
        }
    }   
    componentWillMount () {
        this.setState({
            dataTB :
            [
                {
                    "mathietbi":"97347234238",
                    "tentoanha":"Kim Hoàn",
                    'hopdong':'HD-1202-09092017',
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthai':'Bình thường',
                },
                {
                    "mathietbi":"97347234238",
                    "tentoanha":"Kim Hoàn",
                    'hopdong':'HD-1202-09092017',
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthai':'Bình thường',
                },
                {
                    "mathietbi":"97347234238",
                    "tentoanha":"Kim Hoàn",
                    'hopdong':'HD-1202-09092017',
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthai':'Bình thường',
                },
                {
                    "mathietbi":"97347234238",
                    "tentoanha":"Kim Hoàn",
                    'hopdong':'HD-1202-09092017',
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'trangthai':'Bình thường',
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
                    data = {this.state.dataTB}
                    renderItem = {({item}) =>
                        <TouchableOpacity onPress = {()=> navigate('ThongtinTB')}>
                            <View style = {styles.container}>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Mã thiết bị: </Text>
                                    <Text>{item.mathietbi}</Text>   
                                </View>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Tên tòa nhà: </Text>
                                    <Text>{item.tentoanha}</Text>
                                </View>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Hợp đồng: </Text>
                                    <Text>{item.hopdong}</Text>   
                                </View>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Địa điểm triển khai: </Text>
                                    <Text>{item.diadiemtrienkhai}</Text>   
                                </View>
                                <View style = {styles.itemView}>
                                    <Text style = {styles.textL}>Trạng thái: </Text>
                                    <Text style = {{color: "#00E676"}}>{item.trangthai}</Text>   
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