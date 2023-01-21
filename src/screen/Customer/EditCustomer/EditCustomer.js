import {
    FlatList,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import Button from "../../../components/Button/Button";
import React from "react";
import useFetchMutation from "../../../hook/useFetchMutation";
import ItemInput from "../../../components/ItemInput/ItemInput";
import {updateCustomer} from "../../../services/customerAPi";

const EditCustomer = (props) => {

    const {data: customer} = props.route.params
    const [id, setId] = React.useState(customer.item.id)
    const [nama, setNama] = React.useState(customer.item.nama)
    const [email, setEmail] = React.useState(customer.item.email)
    const [alamat, setAlamat] = React.useState(customer.item.alamat)


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isNamaFocus, setIsNamaFocus] = React.useState(false)
    const [isEmailFocus, setIsEmailFocus] = React.useState(false)
    const [isAlamatFocus, setIsAlamatFocus] = React.useState(false)


    const onSuccess = () => {
        console.log('sukses nich')
        alert('Data berhasil diubah')
        props.navigation.navigate("Customer")
    }

    const {fetchMutation, loading} = useFetchMutation(updateCustomer(customer.item), onSuccess)

    const onSubmit = async (e) => {
        e.preventDefault()
        const newCustomer = {
            id: id,
            nama: nama,
            email: email,
            alamat: alamat
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
                break
            case 'nomor':
                setIsNamaFocus(true)
                setIsIdFocus(false)
                setIsEmailFocus(false)
                break
            case 'status':
                setIsEmailFocus(true)
                setIsIdFocus(false)
                setIsNamaFocus(false)
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
                        value={id}
                        editable={false}
                    />
                    <ItemInput
                        isItemFocus={isNamaFocus}
                        handleFocus={() => handleFocus('nomor')}
                        placeholder="Nomor"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <ItemInput
                        isItemFocus={isEmailFocus}
                        handleFocus={() => handleFocus('status')}
                        placeholder="Status"
                        onChangeText={setStatus}
                        value={status}
                    />


                    <Button text="Edit" onPress={onSubmit} disabled={!(id && email && status) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default EditCustomer