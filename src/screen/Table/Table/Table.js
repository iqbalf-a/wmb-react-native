import {
    ActivityIndicator, Alert,
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import React from "react";
import useFetchQuery from "../../../hook/useFetchQuery";
import Button from "../../../components/Button/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import useFetchMutation from "../../../hook/useFetchMutation";
import {deleteTableById, getTables} from "../../../services/tableAPi";

const RenderTable = (props) => {
    const {data, onDelete} = props;
    const navigation = useNavigation()
    const onNavigate = () => {
        navigation.navigate("Edit Table", {data: data})
    }


    return (
        <View style={{
            marginVertical: 10,
            marginHorizontal: 10,
            elevation: 2,
            paddingHorizontal: 20,
            paddingVertical: 20,
            backgroundColor: 'white',
            borderRadius: 20
        }}>
            <Text style={{fontSize: 16}}>Table {data.item.nomor}</Text>

            <View style={{flexDirection: 'row'}}>
                <Text style={{
                    backgroundColor: data?.item.status === 'Available' ? 'green' : 'silver',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
                    marginTop: 10,
                    borderRadius: 50,
                    fontSize: 10,
                    color: 'white'
                }}>{'\u2B24'} {data.item.status}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: data?.item.status === 'Available' ? 'grey' : 'silver'}]}
                                  onPress={onNavigate}
                                  disabled={data?.item.status !== 'Available'}
                >
                    <Ionicons name={"create-outline"} size={16}
                              color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 10, fontSize: 12}}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: data?.item.status === 'Available' ? 'red' : 'silver'}]}
                                  onPress={onDelete(data?.item.id, data?.item.nomor)}
                                  disabled={data?.item.status !== 'Available'}
                >
                    <Ionicons name={"trash-outline"} size={16}
                              color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 10, fontSize: 12}}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


}

const Table = () => {
    const {data, loading} = useFetchQuery(getTables)

    const {fetchMutation: deleteTableMutation} = useFetchMutation(
        deleteTableById,
        () => alert("Berhasil ditambah")
    )
    const onDelete = (id, name) => () => {

        Alert.alert('Delete Confirmation', 'Are you sure you want to delete\nTable ' + name, [
            {
                text: 'Cancel',
            },
            {
                text: 'OK', onPress: async () => {
                    await deleteTableById(id)
                    alert("Berhasil dihapus")
                }
            },
        ]);
    }
    return (
        <View style={{flex: 1}}>
            {loading && (
                <View style={{position: 'absolute', top: '50%', right: '50%', left: '50%'}}>
                    <ActivityIndicator size="large" color="yellowgreen"/>
                </View>
            )}

            <View>
                <FlatList
                    initialNumToRender={5}
                    data={data.data}
                    renderItem={(data) => <RenderTable data={data} onDelete={onDelete}/>}
                    keyExtractor={(item, index) => index}
                    refreshing={loading}
                />
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    actionSection: {
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        paddingVertical: 5,
        paddingHorizontal: 20,
    }
})

export default Table