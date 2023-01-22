import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../../components/Button/Button";
import React from "react";
import useFetchMutation from "../../../hook/useFetchMutation";
import {addMenu} from "../../../services/menuApi";
import ItemInput from "../../../components/ItemInput/ItemInput";
import ButtonOutline from "../../../components/ButtonOutline/ButtonOutline";

const AddMenu = (props) => {
    const [id, setId] = React.useState('')
    const [menuName, setMenuName] = React.useState('')
    const [price, setPrice] = React.useState('')


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isMenuNameFocus, setIsMenuNameFocus] = React.useState(false)
    const [isPriceFocus, setIsPriceFocus] = React.useState(false)


    const onSuccess = () => {
        alert('Data berhasil ditambah')
        props.navigation.navigate("Menu")
    }

    const {fetchMutation, loading} = useFetchMutation(addMenu, onSuccess)

    const onSubmit = async (e) => {
        e.preventDefault()
        const newMenu = {
            id: id,
            name: menuName,
            price: price
        }

        await fetchMutation(newMenu)
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
            <View style={styles.container}>
                <ItemInput
                    isItemFocus={isIdFocus}
                    handleFocus={() => handleFocus('id')}
                    placeholder="Id"
                    onChangeText={setId}
                />
                <ItemInput
                    isItemFocus={isMenuNameFocus}
                    handleFocus={() => handleFocus('menuName')}
                    placeholder="Menu Name"
                    onChangeText={setMenuName}
                />
                <ItemInput
                    isItemFocus={isPriceFocus}
                    handleFocus={() => handleFocus('price')}
                    placeholder="Price"
                    onChangeText={setPrice}
                    keyboardType="numeric"
                />

                <Button text="Add" onPress={onSubmit} disabled={!(id && menuName && price) || loading}/>
                <ButtonOutline onPress={onBack} text="Cancel" />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, borderRadius: 15,
        backgroundColor: 'white',
        paddingHorizontal: 30,
        padding: 30
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 50,
        marginTop: 20
    },
})

export default AddMenu