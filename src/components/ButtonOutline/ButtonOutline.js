import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";

const ButtonOutline = (props) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button]}
            disabled={props.disabled}
        >
            <Text
                style={{textAlign: 'center'}}
            >
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 20,
        backgroundColor: 'white',
        borderWidth: 1
    },
})
export default ButtonOutline