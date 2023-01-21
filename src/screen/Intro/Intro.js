import {Alert, Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
import {styles} from "../../components/Button/styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import WhiteLogo from "../../../assets/white_logo.png"

const Intro = (props) => {

    const onPress = () => {
        props.navigation.navigate("Login")
    }

    return (
        <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'yellowgreen'}}>
            <Image source={WhiteLogo} style={{height: 200}}/>

            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: "orange",
                    paddingVertical: 20,
                    paddingHorizontal: 30,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    position: 'absolute',
                    bottom: 100,
                    flexDirection: 'row'
                }}
            >
                <Text style={{color: 'white', marginRight: 10, fontSize: 16}}>
                    Continue
                </Text>
                <Ionicons name={"arrow-forward-outline"} size={20}
                          color={"white"}
                />

            </TouchableOpacity>
        </View>
    )
}

export default Intro