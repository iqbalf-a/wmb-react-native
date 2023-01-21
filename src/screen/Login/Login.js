import {Alert, Keyboard, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
import {StyleSheet} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {login} from "../../services/authApi";
import useFetchMutation from "../../hook/useFetchMutation";
import {saveToken} from "../../utils/token";
import {validateEmail} from "../../utils/validateEmail";

const Login = (props) => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    const [isEmailFocus, setIsEmailFocus] = React.useState(false)
    const [isPasswordFocus, setIsPasswordFocus] = React.useState(false)
    const [isVisible, setIsVisible] = React.useState(true)

    const [isEmailValid, setIsEmailValid] = React.useState(false)
    const [isPasswordValid, setIsPasswordValid] = React.useState(false)


    const onSuccess = async (token) => {

        if (token) {
            await saveToken(token)
            props.navigation.navigate("Home")
        } else {
            alert("Incorrect login username or password")
        }
    }

    const {fetchMutation, loading} = useFetchMutation(login, onSuccess)

    const onPress = async () => {
        if (!validateEmail(email)) {
            setIsEmailValid(true)
            return
        }

        if (password.length < 6) {
            setIsPasswordValid(true)
            return
        }
        setIsEmailValid(false)
        setIsPasswordValid(false)
        await fetchMutation({email, password})
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

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
        setIsEmailFocus(false)
        setIsPasswordFocus(false)
    }

    return (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
            <View style={{flex: 1, backgroundColor: 'yellowgreen', justifyContent: 'center'}}>
                <View style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    paddingHorizontal: 30,
                    padding: 50,
                    marginHorizontal: 30
                }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>
                        Getting started
                    </Text>
                    <Text style={{fontSize: 16, marginBottom: 20, color: "silver"}}>
                        Sign in to continue!
                    </Text>

                    <View style={[styles.inputSection, {
                        borderColor: isEmailFocus ? 'yellowgreen' : 'grey'
                    }, {backgroundColor: isEmailFocus ? 'white' : '#fafafa'}]}>
                        <Ionicons name={"person-outline"} size={20}
                                  color={isEmailFocus ? 'yellowgreen' : 'grey'}

                        />
                        <TextInput style={{marginLeft: 10, flex: 1, padding: 5}}
                                   onFocus={handleEmailFocus}
                                   placeholder={"Email"}
                                   onChangeText={setEmail}
                        />
                    </View>
                    {isEmailValid && <Text style={{color: 'red', fontSize: 12}}>Invalid email format</Text>}

                    <View style={[styles.inputSection, {
                        borderColor: isPasswordFocus ? 'yellowgreen' : 'grey',
                    }]}>
                        <Ionicons name={"lock-closed-outline"} size={20}
                                  color={isPasswordFocus ? 'yellowgreen' : 'grey'}

                        />
                        <TextInput style={{marginLeft: 10, flex: 1, padding: 5}}
                                   onFocus={handlePasswordFocus}
                                   placeholder={"Password"}
                                   secureTextEntry={isVisible}
                                   onChangeText={setPassword}
                        />
                        <Ionicons name={isVisible ? "eye" : "eye-off"} size={20}
                                  color={'grey'}
                                  onPress={handleVisiblePassword}
                        />
                    </View>
                    {isPasswordValid && <Text style={{color: 'red', fontSize: 12}}>6 min length character</Text>}
                    <Button text="Login" onPress={onPress} disabled={!(email && password) || loading}/>
                </View>
            </View>
        </TouchableWithoutFeedback>

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

export default Login