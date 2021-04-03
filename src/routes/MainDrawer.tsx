import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import WallScreen from '../screens/WallScreen';

import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const MainDrawer: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
