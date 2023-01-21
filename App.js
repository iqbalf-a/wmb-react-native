import {StatusBar} from 'expo-status-bar';
import {Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import RootNavigation from "./src/navigations/RootNavigation";

export default function App() {
    return (
        <View style={styles.container}>
            <RootNavigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
