import {createStackNavigator, TransitionPreset, TransitionPresets} from "@react-navigation/stack";
import Login from "../screen/Login/Login";
import Intro from "../screen/Intro/Intro";

const Stack = createStackNavigator()
const LoginStack = () => {
    return (
        <Stack.Navigator screenOptions={{...TransitionPresets.SlideFromRightIOS}}>
            <Stack.Screen name="Intro" component={Intro}
                          options={{
                              headerShown: false,
                          }}
            />
            <Stack.Screen name="Login" component={Login}
                          options={{
                              headerShown: false,
                          }}
            />
        </Stack.Navigator>
    )
}

export default LoginStack