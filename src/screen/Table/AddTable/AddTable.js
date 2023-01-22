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
import {addTable} from "../../../services/tableAPi";
import ButtonOutline from "../../../components/ButtonOutline/ButtonOutline";

const AddTable = (props) => {
    const [id, setId] = React.useState('')
    const [nomor, setNomor] = React.useState('')
    const [status, setStatus] = React.useState('')


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isNomorFocus, setIsNomorFocus] = React.useState(false)
    const [isStatusFocus, setIsStatusFocus] = React.useState(false)


    const onSuccess = () => {
        alert('Data berhasil ditambah')
        props.navigation.navigate("Table")
    }

    const {fetchMutation, loading} = useFetchMutation(addTable, onSuccess)

    const onSubmit = async (e) => {
        e.preventDefault()
        const newTable = {
            id: id,
            nomor: nomor,
            status: status
        }

        await fetchMutation(newTable)
    }

    const onBack = () => {
        props.navigation.goBack()
    }

    const handleFocus = (value) => {
        switch (value) {
            case 'id':
                setIsIdFocus(true)
                setIsNomorFocus(false)
                setIsStatusFocus(false)
                break
            case 'nomor':
                setIsNomorFocus(true)
                setIsIdFocus(false)
                setIsStatusFocus(false)
                break
            case 'status':
                setIsStatusFocus(true)
                setIsIdFocus(false)
                setIsNomorFocus(false)
                break
        }
    }

    const handleKeyboardDismiss = () => {
        Keyboard.dismiss()
        setIsIdFocus(false)
        setIsStatusFocus(false)
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
                    isItemFocus={isNomorFocus}
                    handleFocus={() => handleFocus('nomor')}
                    placeholder="Nomor"
                    onChangeText={setNomor}
                />
                <ItemInput
                    isItemFocus={isStatusFocus}
                    handleFocus={() => handleFocus('status')}
                    placeholder="Status"
                    onChangeText={setStatus}
                />


                <Button text="Add" onPress={onSubmit} disabled={!(id && nomor && status) || loading}/>
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


export default AddTable