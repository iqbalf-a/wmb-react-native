import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../components/Button/Button";
import React from "react";
import {saveToken} from "../../utils/token";
import useFetchMutation from "../../hook/useFetchMutation";
import {login} from "../../services/authApi";
import {validateEmail} from "../../utils/validateEmail";
import {addMenu} from "../../services/menuApi";
import ItemInput from "../../components/ItemInput/ItemInput";

const AddMenu = (props) => {
    const [id, setId] = React.useState('')
    const [menuName, setMenuName] = React.useState('')
    const [price, setPrice] = React.useState('')


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isMenuNameFocus, setIsMenuNameFocus] = React.useState(false)
    const [isPriceFocus, setIsPriceFocus] = React.useState(false)


    const onSuccess = async (token) => {

        if (token) {
            await saveToken(token)
            props.navigation.navigate("Home")
        } else {
            alert("Incorrect login username or password")
        }
    }

    const {fetchMutation, loading} = useFetchMutation(addMenu, onSuccess)

    const onSubmit = async () => {

        await fetchMutation({email: id, password: menuName})
    }

    const onBack = () => {
        props.navigation.goBack()
    }

    const handleFocus = (value) => {
        switch (value) {
            case 'id':
                setIsIdFocus(true)
                setIsMenuNameFocus(false)
                setIsPriceFocus(false)
                break
            case 'menuName':
                setIsMenuNameFocus(true)
                setIsIdFocus(false)
                setIsPriceFocus(false)
                break
            case 'price':
                setIsPriceFocus(true)
                setIsIdFocus(false)
                setIsMenuNameFocus(false)
                break
        }
    }

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
        setIsIdFocus(false)
        setIsPriceFocus(false)
    }
    return (
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
            <View style={{flex: 1}}>
                <View style={{
                    borderRadius: 15,
                    backgroundColor: 'white',
                    paddingHorizontal: 30,
                    padding: 50,
                    flex: 1
                }}>
                    <ItemInput
                        isItemFocus={isIdFocus}
                        icon="key-outline"
                        handleFocus={() => handleFocus('id')}
                        placeholder="Id"
                        onChangeText={setId}
                    />
                    <ItemInput
                        isItemFocus={isMenuNameFocus}
                        icon="fast-food-outline"
                        handleFocus={() => handleFocus('menuName')}
                        placeholder="Menu Name"
                        onChangeText={setMenuName}
                    />
                    <ItemInput
                        isItemFocus={isPriceFocus}
                        icon="pricetag-outline"
                        handleFocus={() => handleFocus('price')}
                        placeholder="Price"
                        onChangeText={setPrice}
                    />

                    <Button text="Add" onPress={onSubmit} disabled={!(id && menuName && price) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AddMenu