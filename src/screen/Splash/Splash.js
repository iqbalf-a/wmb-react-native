import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import WhiteLogo from "../../../assets/white_logo.png";

const Splash = (props) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const onNavigate = async () => {
        if (isLoggedIn) {
            props.navigation.navigate("Home")
        } else {
            props.navigation.navigate("Auth")
        }

    }

    React.useEffect(() => {
        setTimeout(() => {
            onNavigate()
        }, 200)
    })

    return (
        <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'yellowgreen'}}>
            <Image source={WhiteLogo} style={{height: 200}}/>
        </View>
    )
}

export default Splash