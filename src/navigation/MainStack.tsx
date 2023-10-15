import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import OnBoarding from '../screens/auth/OnBoarding';
import SignIn from '../screens/auth/SignIn';
import ForgetPassword from '../screens/auth/ForgetPassword';
import ResetPassword from '../screens/auth/ResetPassword';
import Verification from '../screens/auth/Verification';
import OnBoarding2 from '../screens/auth/OnBoarding2';
import OnBoarding3 from '../screens/auth/OnBoarding3';
import OnBoarding4 from '../screens/auth/OnBoarding4';
import OnBoarding5 from '../screens/auth/OnBoarding5';
import OnBoarding6 from '../screens/auth/OnBoarding6';
import OnBoarding7 from '../screens/auth/OnBoarding7';
import Instructions from '../screens/auth/Instructions';
import AddName from '../screens/auth/AddName';
import AddAge from '../screens/auth/AddAge';

export default function MainStack() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="OnBoarding2" component={OnBoarding2} />
        <Stack.Screen name="OnBoarding3" component={OnBoarding3} />
        <Stack.Screen name="OnBoarding4" component={OnBoarding4} />
        <Stack.Screen name="OnBoarding5" component={OnBoarding5} />
        <Stack.Screen name="OnBoarding6" component={OnBoarding6} />
        <Stack.Screen name="OnBoarding7" component={OnBoarding7} />
        <Stack.Screen name="Instructions" component={Instructions} />
        <Stack.Screen name="AddName" component={AddName} />
        <Stack.Screen name="AddAge" component={AddAge} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
