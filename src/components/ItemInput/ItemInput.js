import {StyleSheet, TextInput, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const ItemInput = (props) => {
    return (
        <View style={[styles.inputSection, {
            borderColor: props.isItemFocus ? 'yellowgreen' : 'grey'
        }, {backgroundColor: props.isItemFocus ? 'white' : '#fafafa'}]}>
            <Ionicons name={props.icon} size={20}
                      color={props.isItemFocus ? 'yellowgreen' : 'grey'}

            />
            <TextInput style={{marginLeft: 10, flex: 1, padding: 5}}
                       onFocus={props.handleFocus}
                       placeholder={props.placeholder}
                       onChangeText={props.onChangeText}
                       keyboardType={props.keyboardType}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    inputSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 20,
        borderWidth: 1,
        marginVertical: 10
    }
})

export default ItemInput