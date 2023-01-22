import Ionicons from "react-native-vector-icons/Ionicons";
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const ActionButton = (props) => {
    return (
        <TouchableOpacity style={[styles.actionSection, {backgroundColor: props.backgroundColor}]}
                          onPress={props.onPress}
                          disabled={props.disabled}
        >
            <Ionicons name={props.icon} size={16}
                      color={'white'}
            />
            <Text style={{color: 'white', marginLeft: 10, fontSize: 12}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    actionSection: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
})
export default ActionButton