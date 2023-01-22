import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import WhiteLogo from "../../../assets/white_logo.png";
import {getToken} from "../../utils/token";

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
        }, 3000)
    })

    return (
        <View style={{justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: 'green'}}>
            <Image source={WhiteLogo} style={{
                height: 200,
                resizeMode: 'contain'
            }}/>
        </View>
    )
}

export default Splash