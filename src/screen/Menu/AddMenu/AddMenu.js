import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../../components/Button/Button";
import React from "react";
import useFetchMutation from "../../../hook/useFetchMutation";
import {addMenu} from "../../../services/menuApi";
import ItemInput from "../../../components/ItemInput/ItemInput";

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
                        keyboardType="numeric"
                    />

                    <Button text="Add" onPress={onSubmit} disabled={!(id && menuName && price) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AddMenu