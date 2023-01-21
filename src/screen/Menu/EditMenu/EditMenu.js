import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../../../components/Button/Button";
import React from "react";
import {saveToken} from "../../../utils/token";
import useFetchMutation from "../../../hook/useFetchMutation";
import {login} from "../../../services/authApi";
import {validateEmail} from "../../../utils/validateEmail";
import {addMenu, updateMenuById} from "../../../services/menuApi";
import ItemInput from "../../../components/ItemInput/ItemInput";

const EditMenu = (props) => {
    const {data: menu} = props.route.params
    const [id, setId] = React.useState(menu.item.id)
    const [menuName, setMenuName] = React.useState(menu.item.name)
    const [price, setPrice] = React.useState(menu.item.price)




    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isMenuNameFocus, setIsMenuNameFocus] = React.useState(false)
    const [isPriceFocus, setIsPriceFocus] = React.useState(false)


    const onSuccess = () => {
        alert('Data berhasil diperbarui')
        props.navigation.navigate("Menu")
    }

    const {fetchMutation, loading} = useFetchMutation(updateMenuById(menu.item), onSuccess)

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
                        value={id}
                        editable={false}
                    />
                    <ItemInput
                        isItemFocus={isMenuNameFocus}
                        icon="fast-food-outline"
                        handleFocus={() => handleFocus('menuName')}
                        placeholder="Menu Name"
                        onChangeText={setMenuName}
                        value={menuName}
                    />
                    <ItemInput
                        isItemFocus={isPriceFocus}
                        icon="pricetag-outline"
                        handleFocus={() => handleFocus('price')}
                        placeholder="Price"
                        onChangeText={setPrice}
                        keyboardType="numeric"
                        value={price.toString()}
                    />

                    <Button text="Edit" onPress={onSubmit} disabled={!(id && menuName && price) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default EditMenu