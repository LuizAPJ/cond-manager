import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useColorScheme} from 'react-native';

import themes from '../themes';

import PrealoadScreen from '../screens/PreloadScreen';
import LoginScreen from '../screens/LoginScreen';
import ChoosePropertyScreen from '../screens/ChoosePropertyScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainDrawer from './MainDrawer';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.text,
      }}>
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
        options={{title: 'Fazer cadastro'}}
      />

      <Stack.Screen
        name="MainDrawer"
        component={MainDrawer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
