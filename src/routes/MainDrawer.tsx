import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import WallScreen from '../screens/WallScreen';

const Drawer = createDrawerNavigator();

const MainDrawer: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
