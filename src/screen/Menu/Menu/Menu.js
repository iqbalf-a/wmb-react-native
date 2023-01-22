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
import ActionButton from "../../../components/ActionButton/ActionButton";
import {getToken} from "../../../utils/token";

const RenderMenu = (props) => {
    const {data, onDelete} = props;
    const navigation = useNavigation()
    const onNavigate = () => {
        navigation.navigate("Edit Menu", {data: data})
    }

    return (
        <View style={styles.itemContainer}>
            <Text style={{fontSize: 16, marginBottom: 10}}>{data.item.name}</Text>
            <View style={{flexDirection: 'row'}}>
                <Ionicons name={"pricetag-outline"} size={16}
                          color={'grey'}
                />
                <Text style={{fontSize: 14, color: 'grey', marginLeft: 10}}>Rp. {data.item.price}</Text>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <ActionButton icon="create-outline"
                              text="Edit"
                              backgroundColor="grey"
                              onPress={onNavigate}
                />
                <ActionButton icon="trash-outline"
                              text="Delete"
                              backgroundColor="red"
                              onPress={onDelete(data?.item.id, data?.item.name)}
                />

            </View>
        </View>
    )
}

const Menu = () => {
    const {data, loading} = useFetchQuery(getMenus)

    const {fetchMutation: deleteMenuMutation} = useFetchMutation(
        deleteMenuById,
        () => alert("Berhasil ditambah")
    )
    const onDelete = (id, name) => () => {
        Alert.alert('Delete Confirmation', 'Are you sure you want to delete\n' + name, [
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
        <View style={{flex: 1, backgroundColor: 'white'}}>
            {loading && (
                <View style={styles.indicator}>
                    <ActivityIndicator size="large" color="green"/>
                </View>
            )}

            <View>
                <FlatList
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
        paddingVertical: 5,
        paddingHorizontal: 20,
    },
    indicator: {
        position: 'absolute',
        top: '50%',
        right: '50%',
        left: '50%',
    },
    itemContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
        elevation: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 20
    }
})

export default Menu