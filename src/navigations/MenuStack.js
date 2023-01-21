import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import Login from "../screen/Login/Login";
import Splash from "../screen/Splash/Splash";
import Menu from "../screen/Menu/Menu";
import AddMenu from "../screen/AddMenu/AddMenu";
import Icon from "../components/Icon/Icon";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator()
const MenuStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Menu" component={Menu}
                          options={{
                              title: "Menu",
                              headerStyle: {
                                  backgroundColor: 'yellowgreen',
                              },
                              headerTitleStyle: {
                                  color: 'white'
                              },
                              headerLeft: () => null,
                              headerRight: () => {
                                  const navigation = useNavigation();
                                  return (
                                      <TouchableOpacity
                                          style={{
                                              marginRight: 10,
                                              paddingHorizontal: 10,
                                              paddingVertical: 5,
                                              backgroundColor: 'orange',
                                              flexDirection: 'row',
                                              borderRadius: 50
                                          }}
                                          onPress={() => navigation.navigate("Add Menu")}
                                      >
                                          <Ionicons name={'add'} size={20}
                                                    color="white"
                                          />
                                          <Text style={{marginLeft: 10, color: 'white'}}>Add Item</Text>
                                      </TouchableOpacity>
                                  )
                              },

                          }}
            />
            <Stack.Screen name="Add Menu" component={AddMenu}
                          options={{
                              headerStyle: {
                                  backgroundColor: 'yellowgreen',
                              },
                              headerTitleStyle: {
                                  color: 'white'
                              },
                              headerTintColor: 'white'
                          }}
            />
        </Stack.Navigator>
    )
}

export default MenuStack