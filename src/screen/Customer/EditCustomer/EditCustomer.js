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
import ButtonOutline from "../../../components/ButtonOutline/ButtonOutline";

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
        alert('Data berhasil diubah')
        props.navigation.navigate("Customer")
    }

    const {fetchMutation, loading} = useFetchMutation(updateCustomer, onSuccess)

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
            <View style={styles.container}>
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
                    handleFocus={() => handleFocus('nama')}
                    placeholder="Nama"
                    onChangeText={setNama}
                    value={nama}
                />

                <ItemInput
                    isItemFocus={isEmailFocus}
                    handleFocus={() => handleFocus('email')}
                    placeholder="Email"
                    onChangeText={setEmail}
                    value={email}
                />

                <ItemInput
                    isItemFocus={isAlamatFocus}
                    handleFocus={() => handleFocus('alamat')}
                    placeholder="Alamat"
                    onChangeText={setAlamat}
                    value={alamat}
                />

                <Button text="Edit" onPress={onSubmit} disabled={!(id && nama && email && alamat) || loading}/>
                <ButtonOutline onPress={onBack} text="Cancel"/>
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


export default EditCustomer