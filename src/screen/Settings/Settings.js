import {Text, View} from "react-native";
import Button from "../../components/Button/Button";
import {removeToken} from "../../utils/token";
import {StyleSheet} from "react-native";

const Settings = (props) => {
    const onLogout = async () => {
        await removeToken()
        props.navigation.navigate("Auth")
    }
    return (
        <View style={styles.container}>
            <Button text={"Log out"} onPress={onLogout}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    }
})

export default Settings