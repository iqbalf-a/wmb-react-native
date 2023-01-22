import {TouchableOpacity, View, Text} from "react-native";
import {styles} from "./styles";


const Button = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={props.onPress}
                style={[styles.button, {backgroundColor: props.disabled ? 'silver' : 'green'}]}
                disabled={props.disabled}
            >
                <Text
                    style={styles.buttonText}
                >
                    {props.text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button