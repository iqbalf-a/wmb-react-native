import Ionicons from "react-native-vector-icons/Ionicons";

const Icon = ({name, focused}) => {
    return (
        <Ionicons name={name} size={20}
                  color={focused ? "orange" : "grey"}
        />
    )
}

export default Icon;