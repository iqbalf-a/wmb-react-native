import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Menu from "../screen/Menu/Menu/Menu";
import Icon from "../components/Icon/Icon";
import Table from "../screen/Table/Table/Table";
import Customer from "../screen/Customer/Customer/Customer";
import Settings from "../screen/Settings/Settings";
import React from "react";
import {Button, Text, TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MenuStack from "./MenuStack";
import {useNavigation} from "@react-navigation/native";
import TableStack from "./TableStack";
import CustomerStack from "./CustomerStack";


const Tabs = createBottomTabNavigator();

const BOTTOM_TAB_ITEM = [
    {
        name: "Menu Stack",
        component: MenuStack,
        iconActive: "restaurant",
        iconInactive: "restaurant-outline",
        text: "Menu",
        headerShown: false
    },
    {
        name: "Table Stack",
        component: TableStack,
        iconActive: "albums",
        iconInactive: "albums-outline",
        text: "Table",
        headerShown: false
    },
    {
        name: "People Stack",
        component: CustomerStack,
        iconActive: "people",
        iconInactive: "people-outline",
        text: "Customer",
        headerShown: false
    },
    {
        name: "Settings",
        component: Settings,
        iconActive: "settings",
        iconInactive: "settings-outline",
        text: "Settings",
        headerShown: true
    },
]

const HomeTab = () => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "grey",
            tabBarStyle: {
                height: 60,
                position: "absolute",
                marginBottom: 8,
                marginHorizontal: 20,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 50,

            },

        }}>
            {BOTTOM_TAB_ITEM.map((item) => {
                return (
                    <Tabs.Screen key={item.name}
                                 name={item.name}
                                 component={item.component}
                                 options={{
                                     title: item.text,
                                     tabBarIcon: ({focused}) => <Icon
                                         name={focused ? item.iconActive : item.iconInactive}
                                         focused={focused}/>,
                                     // headerShown: false,
                                     tabBarLabel: ({focused, color, size}) => (
                                         <Text style={{color: color, fontSize: 10, marginBottom: 10}}>{item.text}</Text>
                                     ),
                                     headerStyle: {
                                         backgroundColor: 'yellowgreen',
                                     },
                                     headerTitleStyle: {
                                         color: 'white'
                                     },
                                     headerShown: item.headerShown,
                                 }}
                    />
                )
            })}
        </Tabs.Navigator>
    )
}

export default HomeTab