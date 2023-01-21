import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "../screen/Home/Home";
import Icon from "../components/Icon/Icon";
import Table from "../screen/Table/Table";
import Customer from "../screen/Customer/Customer";
import Settings from "../screen/Settings/Settings";
import React from "react";
import {Text} from "react-native";


const Tabs = createBottomTabNavigator();

const BOTTOM_TAB_ITEM = [
    {
        name: "Home",
        component: Home,
        iconActive: "home",
        iconInactive: "home-outline",
        text: "Home",
    },
    {
        name: "Table",
        component: Table,
        iconActive: "albums",
        iconInactive: "albums-outline",
        text: "Table",
    },
    {
        name: "People",
        component: Customer,
        iconActive: "people",
        iconInactive: "people-outline",
        text: "People",
    },
    {
        name: "Settings",
        component: Settings,
        iconActive: "settings",
        iconInactive: "settings-outline",
        text: "Settings",
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

            }
        }}>
            {BOTTOM_TAB_ITEM.map((item) => {
                return (
                    <Tabs.Screen name={item.name}
                                 component={item.component}
                                 options={{
                                     tabBarIcon: ({focused}) => <Icon
                                         name={focused ? item.iconActive : item.iconInactive}
                                         focused={focused}/>,
                                     headerShown: false,
                                     tabBarLabel: ({focused, color, size}) => (
                                         <Text style={{color: color, fontSize: 10, marginBottom: 10}}>{item.text}</Text>
                                     ),
                                 }}
                    />
                )
            })}
        </Tabs.Navigator>
    )
}

export default HomeTab