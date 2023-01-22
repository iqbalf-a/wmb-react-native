import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Customer from "../screen/Customer/Customer/Customer";
import AddCustomer from "../screen/Customer/AddCustomer/AddCustomer";
import EditCustomer from "../screen/Customer/EditCustomer/EditCustomer";

const Stack = createStackNavigator()
const CustomerStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Customer" component={Customer}
                          options={{
                              title: "Customer",
                              headerLeft: () => null,
                              headerRight: () => {
                                  const navigation = useNavigation();
                                  return (
                                      <TouchableOpacity
                                          style={{
                                              marginRight: 10,
                                              paddingHorizontal: 10,
                                              paddingVertical: 5,
                                              backgroundColor: 'green',
                                              flexDirection: 'row',
                                              borderRadius: 50
                                          }}
                                          onPress={() => navigation.navigate("Add Customer")}
                                      >
                                          <Ionicons name={'add'} size={20}
                                                    color="white"
                                          />
                                          <Text style={{marginLeft: 10, color: 'white'}}>Add</Text>
                                      </TouchableOpacity>
                                  )
                              },

                          }}
            />
            <Stack.Screen name="Add Customer" component={AddCustomer}/>
            <Stack.Screen name="Edit Customer" component={EditCustomer}/>
        </Stack.Navigator>
    )
}

export default CustomerStack