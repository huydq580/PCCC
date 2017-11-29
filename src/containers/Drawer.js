import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
    StyleSheet,
    ImageBackground,
    Image

} from 'react-native';
// import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import {default as IconFontAwesome} from 'react-native-vector-icons/FontAwesome';
import images from "../components/images";


// import { NavigationActions,StackNavigator } from 'react-navigation';

export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            account: '',
            time:'8-30',
        }
    }

    render (){
        // const {navigate} = this.props.navigation;
        return(
            <View style = {{flex:1}}>
                <ImageBackground style = {styles.picture} source = {images.infoprofile}>
                    <Image style = {styles.imageProfile} source = {images.profile}>
                    </Image>
                    <Text style = {{marginLeft:20, marginTop:20, backgroundColor:'transparent', color: 'white'}}>Tên Khách Hàng</Text>
                    {/*<Text style = {{marginLeft:20, backgroundColor:'transparent', color: 'white'}}>{this.state.account.email}</Text>àng*/}
                </ImageBackground>
                <View style = {{flex:3}}>
                    <TouchableOpacity
                        onPress = {()=> navigate('InfoProfile', {dataAccount: this.state.account})}
                    >
                        <View style = {styles.infoContainer}>
                            <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                                <IconFontAwesome name="user-circle" size={20} style = {{marginLeft:5}}/>
                            </View>
                            <View style = {{flex:7, marginLeft:13}}>
                                <Text>Thông tin HĐ</Text>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style = {{height:1, backgroundColor:'#cccccc', marginTop:10}}/>
                    <View style = {styles.infoContainer}>
                        <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                            <Icon name="dropbox" size={20} style = {{marginLeft:5}}/>
                        </View>
                        <View style = {{flex:7, marginLeft:13}}>
                            <Text>Thông tin KH</Text>

                        </View>

                    </View>
                    <View style = {{height:1, backgroundColor:'#cccccc', marginTop:10}}/>
                    <View style = {styles.infoContainer}>
                        <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                            <Icon name="credit-card" size={20} style = {{marginLeft:5}}/>
                        </View>
                        <View style = {{flex:7, marginLeft:13}}>
                            <Text>Danh sách thiết bị</Text>

                        </View>

                    </View>
                    <View style = {{height:1, backgroundColor:'#cccccc', marginTop:10}}/>
                    <View style = {styles.infoContainer}>
                        <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                            <Icon name="old-phone" size={20} style = {{marginLeft:5}}/>
                        </View>
                        <View style = {{flex:7, marginLeft:13}}>
                            <Text>Hotline PCCC</Text>

                        </View>

                    </View>
                    <View style = {{height:1, backgroundColor:'#cccccc', marginTop:10}}/>
                    <View style = {styles.infoContainer}>
                        <View style = {{alignItems:'center', justifyContent:'center', flex:1}}>
                            <Icon name="star" size={20} style = {{marginLeft:5}}/>
                        </View>
                        <View style = {{flex:7, marginLeft:13}}>
                            <Text>Thông tin công ty Digitime</Text>

                        </View>

                    </View>

                </View>
            </View>
        );

    }
}
const styles = StyleSheet.create({
    viewHeader: {
        flex:1,

    },
    timersetting:{
        flexDirection:'row',
        marginTop:5,
        justifyContent:'center',
        alignItems:'center',
    },
    infoContainer:{
        flexDirection:'row',
        marginTop:5,

    },
    picture: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'stretch',
    },
    imageProfile: {
        marginTop:20,
        marginLeft:20,
        width:50,
        height:50
    }
});