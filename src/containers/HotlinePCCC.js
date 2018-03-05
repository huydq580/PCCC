import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Button,
} from 'react-native';
import Communications from 'react-native-communications';


export default class HotlinePCCC extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataHotline :[
                {}
            ],
        }
    }  
    componentWillMount () {
        this.setState({
            dataHotline :
            [
                {
                    "mathietbi":"97347234238",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'hotlinekhuvuc':'04.123123123',
                },
                {
                    "mathietbi":"97347234238",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'hotlinekhuvuc':'04.123123123',
                },
                {
                    "mathietbi":"97347234238",
                    'diadiemtrienkhai':'Số 678, đường Láng Đống Đa, Hà Nội',
                    'hotlinekhuvuc':'04.123123123',
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
    onpress() {
        alert('chua set nut goi')
    }
    render (){
        const {navigate} = this.props.navigation;
        return (
            <View style = {{flex:1, backgroundColor: 'white'}}>
                <FlatList
                    data = {this.state.dataHotline}
                    renderItem = {({item}) =>
                        <View style = {styles.container}>
                            <View style = {styles.itemView}>
                                <Text style = {styles.textL}>Mã thiết bị: </Text>
                                <Text>{item.mathietbi}</Text>   
                            </View>
                            
                            <View  style = {styles.itemView}>
                                <Text style = {styles.textL}>Địa điểm triển khai: </Text>
                                <Text>{item.diadiemtrienkhai}</Text>   
                            </View>
                            <View style = {styles.itemView}>
                                <Text style = {styles.textL}>Hotline PCCC khu vực:</Text>
                                <Text style = {styles.textL}>{item.hotlinekhuvuc} </Text>
                                <TouchableOpacity onPress={() => Communications.phonecall('0983145317', true)}>
                                    <View style = {{height:20, width:35, backgroundColor:'#4FC3F7', justifyContent: 'center',alignItems: 'center',}}>
                                        <Text>Gọi</Text>
                                    </View>
                                </TouchableOpacity>
                                
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
        marginTop: 5,
    },
    textL: {
        fontWeight:'bold',
        
    },
})