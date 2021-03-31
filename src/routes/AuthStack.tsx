import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PrealoadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreloadScreen"
        component={PrealoadScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ChoosePropertyScreen"
        component={ChoosePropertyScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
