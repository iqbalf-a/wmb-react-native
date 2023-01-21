import React from "react";
import {Text, View} from "react-native";

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
        }, 100)
    })

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>
                Splash nich
            </Text>
        </View>
    )
}

export default Splash