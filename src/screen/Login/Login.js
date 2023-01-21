import {Alert, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
import {StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const Login = (props) => {

    const [isEmailFocus, setIsEmailFocus] = React.useState(false)
    const [isPasswordFocus, setIsPasswordFocus] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(true)

    const onPress = () => {
        props.navigation.navigate("Home")
    }

    const onNavigateIntro = () => {
        props.navigation.navigate("Intro")
    }

    const handleVisiblePassword = () => {
        setIsVisible(!isVisible)
    }

    const handleEmailFocus = () => {
        setIsPasswordFocus(false)
        setIsEmailFocus(true)
    }

    const handlePasswordFocus = () => {
        setIsEmailFocus(false)
        setIsPasswordFocus(true)
    }

    const handleKeybordDismiss = () => {
        Keyboard.dismiss()
        setIsEmailFocus(false)
        setIsPasswordFocus(false)
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeybordDismiss} >
            <View style={{flex: 1, backgroundColor: 'yellowgreen'}}>
                <View style={{
                    backgroundColor: "yellowgreen",
                    height: 100,

                }}>
                    <View style={{
                        padding: 20,
                        flexDirection: "row",
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <Ionicons name={"chevron-back-outline"} size={30}
                                  color={'white'}
                                  onPress={onNavigateIntro}

                        />
                        <Text style={{color: 'white'}}>
                            Need some help?
                        </Text>
                    </View>
                </View>
                <View style={{
                    borderTopStartRadius: 50,
                    borderTopEndRadius: 50,
                    backgroundColor: 'white',
                    flex: 1,
                    paddingHorizontal: 30,
                    paddingTop: 50,
                }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>
                        Getting started
                    </Text>
                    <Text style={{fontSize: 16, marginBottom: 20, color: "silver"}}>
                        Sign in to continue!
                    </Text>

                    <View style={[styles.searchSection, {
                        borderColor: isEmailFocus ? 'yellowgreen' : 'grey'
                    }, {backgroundColor: isEmailFocus ? 'white' : '#fafafa'}]}>
                        <Ionicons name={"person-outline"} size={20}
                                  color={isEmailFocus ? 'yellowgreen' : 'grey'}

                        />
                        <TextInput style={{marginLeft: 10, flex: 1, padding: 5}}
                                   onFocus={handleEmailFocus}
                                   placeholder={"Email"}
                        />
                    </View>

                    <View style={[styles.searchSection, {
                        borderColor: isPasswordFocus ? 'yellowgreen' : 'grey',
                    }]}>
                        <Ionicons name={"lock-closed-outline"} size={20}
                                  color={isPasswordFocus ? 'yellowgreen' : 'grey'}

                        />
                        <TextInput style={{marginLeft: 10, flex: 1, padding: 5}}
                                   onFocus={handlePasswordFocus}
                                   placeholder={"Password"}
                                   secureTextEntry={isVisible}
                        />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={20}
                                  color={'grey'}
                                  onPress={handleVisiblePassword}

                        />
                    </View>
                    <Button text="Login" onPress={onPress}/>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        height: 50,
        paddingHorizontal: 20,
        borderWidth: 1,
        marginVertical: 10
    }
})

export default Login