import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {StateProvider} from './contexts/StateContext';
import AuthStack from './routes/AuthStack';
import themes from './themes';

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <StateProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <AuthStack />
        </ThemeProvider>
      </NavigationContainer>
    </StateProvider>
  );
};

export default App;
