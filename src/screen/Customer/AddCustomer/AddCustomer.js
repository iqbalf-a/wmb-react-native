import {Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import Button from "../../../components/Button/Button";
import React from "react";
import useFetchMutation from "../../../hook/useFetchMutation";
import ItemInput from "../../../components/ItemInput/ItemInput";
import {addCustomer} from "../../../services/customerAPi";

const AddCustomer = (props) => {
    const [id, setId] = React.useState('')
    const [nama, setNama] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [alamat, setAlamat] = React.useState('')


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isNamaFocus, setIsNamaFocus] = React.useState(false)
    const [isEmailFocus, setIsEmailFocus] = React.useState(false)
    const [isAlamatFocus, setIsAlamatFocus] = React.useState(false)


    const onSuccess = () => {
        alert('Data berhasil ditambah')
        props.navigation.navigate("Customer")
    }

    const {fetchMutation, loading} = useFetchMutation(addCustomer, onSuccess)

    const onSubmit = async (e) => {
        e.preventDefault()
        const newCustomer = {
            id: id,
            alamat: alamat,
            email: email,
            name: nama
        }

        await fetchMutation(newCustomer)
    }

    const onBack = () => {
        props.navigation.goBack()
    }

    const handleFocus = (value) => {
        switch (value) {
            case 'id':
                setIsIdFocus(true)
                setIsNamaFocus(false)
                setIsEmailFocus(false)
                setIsAlamatFocus(false)
                break
            case 'nama':
                setIsIdFocus(false)
                setIsNamaFocus(true)
                setIsEmailFocus(false)
                setIsAlamatFocus(false)
                break
            case 'email':
                setIsIdFocus(false)
                setIsNamaFocus(false)
                setIsEmailFocus(true)
                setIsAlamatFocus(false)
                break
            case 'alamat':
                setIsIdFocus(false)
                setIsNamaFocus(false)
                setIsEmailFocus(false)
                setIsAlamatFocus(true)
                break
        }
    }

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
        setIsIdFocus(false)
        setIsEmailFocus(false)
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
                        handleFocus={() => handleFocus('id')}
                        placeholder="Id"
                        onChangeText={setId}
                    />
                    <ItemInput
                        isItemFocus={isNamaFocus}
                        handleFocus={() => handleFocus('nama')}
                        placeholder="Nama"
                        onChangeText={setNama}
                    />
                    <ItemInput
                        isItemFocus={isEmailFocus}
                        handleFocus={() => handleFocus('email')}
                        placeholder="Email"
                        onChangeText={setEmail}
                    />
                    <ItemInput
                        isItemFocus={isAlamatFocus}
                        handleFocus={() => handleFocus('alamat')}
                        placeholder="Alamat"
                        onChangeText={setAlamat}
                    />


                    <Button text="Add" onPress={onSubmit} disabled={!(id && nama && email) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default AddCustomer