import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useColorScheme} from 'react-native';

import themes from '../themes';
import CustomDrawer from '../components/CustomDrawer';

import WallScreen from '../screens/WallScreen';
import DocumentScreen from '../screens/DocumentScreen';
import BilletScreen from '../screens/BilletScreen';

const Drawer = createDrawerNavigator();

const MainDrawer: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.background,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: theme.text,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="WallScreen"
        component={WallScreen}
        options={{title: 'Mural de Avisos'}}
      />

      <Drawer.Screen
        name="DocumentScreen"
        component={DocumentScreen}
        options={{title: 'Documentos do Condomínio'}}
      />

      <Drawer.Screen
        name="BilletScreen"
        component={BilletScreen}
        options={{title: 'Boletos'}}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
