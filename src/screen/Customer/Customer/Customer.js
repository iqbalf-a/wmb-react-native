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
import {deleteCustomersById, getCustomers} from "../../../services/customerAPi";

const RenderCustomer = (props) => {
    const {data, onDelete} = props;
    const navigation = useNavigation()
    const onNavigate = () => {
        navigation.navigate("Edit Customer", {data: data})
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={{fontSize: 16}}>{data.item.nama}</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{
                        backgroundColor: 'silver',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 50,
                        fontSize: 12,
                        color: 'white'
                    }}>{data.item.email}</Text>
                </View>
            </View>

            <Text style={{fontSize: 14, color: 'grey'}}>{data.item.alamat}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10}}>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: 'grey'}]}
                                  onPress={onNavigate}
                >
                    <Ionicons name={"create-outline"} size={16}
                              color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 10, fontSize: 12}}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: 'red'}]}
                                  onPress={onDelete(data?.item.id, data?.item.name)}
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

const Customer = () => {
    const {data, loading} = useFetchQuery(getCustomers)

    const {fetchMutation: deleteCustomerMutation} = useFetchMutation(
        deleteCustomersById,
        () => alert("Berhasil ditambah")
    )
    const onDelete = (id, name) => () => {

        Alert.alert('Delete Confirmation', 'Are you sure you want to delete ' + name, [
            {
                text: 'Cancel',
            },
            {
                text: 'OK', onPress: async () => {
                    await deleteCustomersById(id)
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
                    renderItem={(data) => <RenderCustomer data={data} onDelete={onDelete}/>}
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

export default Customer