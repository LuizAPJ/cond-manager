import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PrealoadScreen from '../screens/PreloadScreen';

const Stack = createStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PreloadScreen"
        component={PrealoadScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
