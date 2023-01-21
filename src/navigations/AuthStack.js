import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import Login from "../screen/Login/Login";
import Splash from "../screen/Splash/Splash";

const Stack = createStackNavigator()
const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Login" component={Login}
                          options={{
                              headerShown: false,
                          }}
            />
        </Stack.Navigator>
    )
}

export default LoginStack