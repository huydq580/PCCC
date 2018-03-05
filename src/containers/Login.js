import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    AsyncStorage,
    KeyboardAvoidingView,
    Keyboard,
    Alert,
    ActivityIndicator,
    StatusBar,
    TextInput,
    ImageBackground,
} from 'react-native';
import Dimensions from 'Dimensions';
import Logo from "../components/Login/Logo";
import Form from "../components/Login/Form";
import SignupSection from "../components/Login/SignupSection";
import images from "../components/images";
import {URL, URL_LOGIN} from "../components/const";

var {height, width} = Dimensions.get('window');
height = height;

export default class Login extends Component {


    constructor(props){
        super(props)
        this.state = {
            email: '',
            pass: '',
            height: height,
            isLoading: false
        }
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        const {navigate} = this.props.navigation;
        navigate("Home");
    }
    getEmail =  (email) => {
        this.setState({
            email: email
        })
    }
    getPass =  (pass) => {
        this.setState({
            pass: pass
        })
    }
    _Dangnhap(){
        // fetch("http://pccc.safeone.vn/mobile-service/usersServiceRest/getCustomerUser/SAF_1408201117/123456aA@", {
        //     method: 'GET',
        //     headers: {
        //         'Authorization': 'Basic YWRtaW46UGNjY0AxMTQ=',
        //         'APP_CODE': 'MOBILE_234',
        //         'Content-Type': 'application/json',
        //         'Accept-Charset': 'UTF-8',
        //         'RESET_TOKEN': '0'
        //
        //     },
        //
        // }).then((response) => response.json())
        // .then((data)=> {
        //     console.log('Data', data)
        // }).catch((erro)=> {
        //     console.log(erro);
        // })
        this.props.navigation.navigate('Home')
    }

    render(){
        // const {navigate} = this.props.navigation;
        return(
            <View style={{flex: 1}}>
                <KeyboardAvoidingView
                    style={styles.container1}
                    behavior="padding"
                >

                    <View style={{height: this.state.height,position:'absolute'}}>

                        <ImageBackground style={styles.picture} source={images.wallpaper}>
                            <Logo/>
                            <Form
                                getEmail={this.getEmail}
                                getPass={this.getPass}
                            />
                            <SignupSection/>
                            <View style={styles.container}>
                                <TouchableOpacity style={styles.button}
                                                  onPress = {this._Dangnhap()}
                                >
                                    <Text style={styles.text}>LOGIN</Text>
                                </TouchableOpacity>
                            </View>
                            {/*<ButtonSubmit/>*/}

                        </ImageBackground>

                    </View>



                </KeyboardAvoidingView>
                {this.state.isLoading?
                    <View style={{flex: 1,justifyContent:'center',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        opacity:0.5,

                        alignItems: 'center', position: 'absolute',backgroundColor:'black'}}>
                        <ActivityIndicator size="large"/>
                    </View>:null}
            </View>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;
const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        // resizeMode: 'cover',
    },
    container: {
        flex: 1,
        top: -95,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F035E0',
        height: MARGIN,
        borderRadius: 20,
        zIndex: 99,
        marginHorizontal: 20,
        width: DEVICE_WIDTH - 40,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    container1: {
        backgroundColor: '#4c69a5',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});