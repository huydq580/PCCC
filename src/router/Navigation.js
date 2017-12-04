import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation'
import Login from "../containers/Login";
import Home from "../containers/Home";
import Drawer from "../containers/Drawer";
import ChitietHD from "../containers/ChitietHD";
import ThongtinTB from "../containers/ThongtinTB";
import LichsuDC from "../containers/LichsuDC";
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import DanhsachTB from "../containers/DanhsachTB";
import HotlinePCCC from "../containers/HotlinePCCC";
import ThongtinHD from "../containers/ThongtinHD";
import ThongtinKH from "../containers/ThongtinKH";
import ThongtinCtyDigitime from "../containers/ThongtinCtyDigitime";
import ThongtinTN from '../containers/ThongtinTN';
import ChitietTN from '../containers/ChitietTN';
import LichsugiahanHD from '../containers/LichsugiahanHD';

const Tab = TabNavigator ({
    ChitietHD: {
        screen: ChitietHD,
        navigationOptions: {

            tabBarLabel: 'Chi tiết HĐ',
            headerTitle: {
                title: 'Chi tiết HĐ',
            },
            tabBarIcon: ({tintColor}) =>
                <Icon1 name="format-list-bulleted" size={20}
                      style={{ color: tintColor }}/>
        }
    },
    ThongtinTB: {
        screen: ThongtinTB,
        navigationOptions: {
            title: 'Thông tin thiết bị',
            tabBarLabel: 'Thông tin thiết bị',
            tabBarIcon: ({tintColor}) =>
                <Icon1 name="format-list-bulleted" size={20}
                      style={{ color: tintColor }}/>
        }
    },
    LichsugiahanHD: {
        screen: LichsugiahanHD,
        navigationOptions: {
            title: 'Lịch sử gia hạn HĐ',
            tabBarLabel: 'Lịch sử gia hạn HĐ',
            tabBarIcon: ({tintColor}) =>
                <Icon1 name="format-list-bulleted" size={20}
                      style={{ color: tintColor }}/>
        }
    },
    LichsuDC: {
        screen: LichsuDC,
        navigationOptions: {
            title: 'Lịch sử đóng cước',
            tabBarLabel: 'Lịch sử đóng cước',
            tabBarIcon: ({tintColor}) =>
                <Icon1 name="format-list-bulleted" size={20}
                      style={{ color: tintColor }}/>
        }
    }



},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            style: {
                margin: 0,
                padding: 0,
                backgroundColor: 'white',
            },
            labelStyle: {
                margin: 0,
                padding: 0,
                fontSize: 10,
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'black',
            upperCaseLabel: false, //chu thuong
            pressOpacity: 0.1
        },
        animationEnabled: false,
    }
)

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
        screen: HomeStack,
    }},
    {
        drawerWidth: 300,
        drawerWidth: 250,
        drawerPosition: "left",
        contentComponent: props => <Drawer {...props}/>
    }
)
const Stack = StackNavigator({
    SideMenu: {
        screen: SideMenu,
        navigationOptions: {
            header: null,
        }
    },
    Tab: {
        screen: Tab,
        navigationOptions: {
            header: null,
        }

    },

    ThongtinHD: {
        screen: ThongtinHD,
        navigationOptions: {
            title: 'Thông tin HĐ',
        }
    },
    ThongtinTN: {
        screen: ThongtinTN,
        navigationOptions: {
            title: 'Thông tin TN',
        }
    },
    ChitietTN: {
        screen: ChitietTN,
        navigationOptions: {
            title: 'Chi tiet TN',
        }
    },
    ThongtinKH: {
        screen: ThongtinKH,
        navigationOptions: {
            title: 'Thông tin KH',
        }
    },
    DanhsachTB: {
        screen: DanhsachTB,
        navigationOptions: {
            title: 'Danh sách TB',
        }
    },
    HotlinePCCC: {
        screen: HotlinePCCC,
        navigationOptions: {
            title: 'Hotline PCCC'
        }
    },
    ThongtinCtyDigitime: {
        screen: ThongtinCtyDigitime,
        navigationOptions: {
            title:'Thông tin Công ty '
        }
    },

})

export default Stack;
