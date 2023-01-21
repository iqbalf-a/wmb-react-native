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
import {updateTable} from "../../../services/tableAPi";

const EditTable = (props) => {

    const {data: table} = props.route.params
    const [id, setId] = React.useState(table.item.id)
    const [nomor, setNomor] = React.useState(table.item.nomor)
    const [status, setStatus] = React.useState(table.item.status)


    const [isIdFocus, setIsIdFocus] = React.useState(false)
    const [isNomorFocus, setIsNomorFocus] = React.useState(false)
    const [isStatusFocus, setIsStatusFocus] = React.useState(false)


    const onSuccess = () => {
        console.log('sukses nich')
        alert('Data berhasil diubah')
        props.navigation.navigate("Table")
    }

    const {fetchMutation, loading} = useFetchMutation(updateTable(table.item), onSuccess)

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
                        isItemFocus={isNomorFocus}
                        handleFocus={() => handleFocus('nomor')}
                        placeholder="Nomor"
                        onChangeText={setNomor}
                        value={nomor}
                    />
                    <ItemInput
                        isItemFocus={isStatusFocus}
                        handleFocus={() => handleFocus('status')}
                        placeholder="Status"
                        onChangeText={setStatus}
                        value={status}
                    />


                    <Button text="Edit" onPress={onSubmit} disabled={!(id && nomor && status) || loading}/>
                    <Button text="Cancel" onPress={onBack}/>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}

export default EditTable