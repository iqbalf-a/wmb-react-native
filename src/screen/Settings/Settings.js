import {Text, View} from "react-native";
import Button from "../../components/Button/Button";

const Settings = (props) => {
    const onLogout = () => {
        props.navigation.navigate("Intro")
    }
    return (
        <View style={{backgroundColor: "red", flex: 1}}>
            <Text>
                Setting
            </Text>
            <Button text={"Log out"} onPress={onLogout}/>
        </View>

    )
}

export default Settings