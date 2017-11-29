import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'
import Login from "../containers/Login";
import Home from "../containers/Home";
import Drawer from "../containers/Drawer";


const HomeStack = StackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            header  : null

        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }

    },
    // Drawer: {
    //     screen: Drawer
    // }
})
const SideMenu = DrawerNavigator ({
        Home: {
            screen: HomeStack
        },
    },
    {
        drawerWidth: 300,
        drawerWidth: 250,
        drawerPosition: "left",
        contentComponent: props => <Drawer {...props}/>
    }
)

export default SideMenu;
