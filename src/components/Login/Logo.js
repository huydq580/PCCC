import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import images from "../images";


export default class Logo extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Image source={images.digitime} style={styles.image}/>
                {/* <Text style={styles.text}>Digitime</Text> */}
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width:200,
        height:150,
        resizeMode:'stretch',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 4,
    }
});