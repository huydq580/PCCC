import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,

} from 'react-native'
import Icon from 'react-native-vector-icons/Foundation';
import MapView from 'react-native-maps';
export default class Home extends Component {
    static navigationOptions = ({navigation}) => {
        const { state } = navigation;
        return {

            headerLeft: <TouchableOpacity onPress={() => {
                navigation.navigate('DrawerOpen')
            }}>
                <Icon name="list" size={30} style={{marginLeft: 7}}/>
            </TouchableOpacity>
        }


    }
    render() {
        const { region } = this.props;
        console.log(region);
        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
       flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});