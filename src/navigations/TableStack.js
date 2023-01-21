import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import {Text, TouchableOpacity} from "react-native";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Table from "../screen/Table/Table/Table";
import AddTable from "../screen/Table/AddTable/AddTable";
import EditTable from "../screen/Table/EditTable/EditTable";

const Stack = createStackNavigator()
const TableStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Table" component={Table}
                          options={{
                              title: "Table",
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
                                          onPress={() => navigation.navigate("Add Table")}
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
            <Stack.Screen name="Add Table" component={AddTable}
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
            <Stack.Screen name="Edit Table" component={EditTable}
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

export default TableStack