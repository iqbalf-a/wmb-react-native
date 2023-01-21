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
import {deleteMenuById, getMenus} from "../../../services/menuApi";
import useFetchQuery from "../../../hook/useFetchQuery";
import Button from "../../../components/Button/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import useFetchMutation from "../../../hook/useFetchMutation";

const RenderMenu = (props) => {
    const {data, onDelete} = props;
    const navigation = useNavigation()
    const onNavigate = () => {
        navigation.navigate("Edit Menu", {data: data})
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
            <Text style={{fontSize: 16}}>{data.item.name}</Text>
            <Text style={{fontSize: 14, color: 'grey'}}>Rp. {data.item.price}</Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: 'silver'}]}
                                  onPress={onNavigate}
                >
                    <Ionicons name={"create-outline"} size={16}
                              color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 10}}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionSection, {
                    borderColor: 'grey'
                }, {backgroundColor: 'red'}]}
                                  onPress={onDelete(data?.item.id, data?.item.name)}
                >
                    <Ionicons name={"trash-outline"} size={16}
                              color={'white'}
                    />
                    <Text style={{color: 'white', marginLeft: 10}}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )


}

const Menu = () => {
    const {data, loading} = useFetchQuery(getMenus)

    const {fetchMutation: deleteCourseMutation} = useFetchMutation(
        deleteMenuById,
        () => alert("Berhasil ditambah")
    )
    const onDelete = (id, name) => () => {

        Alert.alert('Delete Confirmation', 'Are you sure you want to delete ' + name, [
            {
                text: 'Cancel',
            },
            {
                text: 'OK', onPress: async () => {
                    await deleteMenuById(id)
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
                    renderItem={(data) => <RenderMenu data={data} onDelete={onDelete}/>}
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
        paddingVertical: 15,
        paddingHorizontal: 20,
    }
})

export default Menu