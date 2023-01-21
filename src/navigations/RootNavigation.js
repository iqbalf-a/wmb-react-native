import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Splash from "../screen/Splash/Splash";
import AuthStack from "./AuthStack";
import HomeTab from "./HomeTab";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Splash"} component={Splash} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name={"Auth"} component={AuthStack} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name={"Home"} component={HomeTab} options={{
                    headerShown: false
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;