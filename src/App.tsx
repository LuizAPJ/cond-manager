import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';

import themes from './themes';

import styled from 'styled-components/native';

const Container = styled.View`
  background: ${props => props.theme.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: ${props => props.theme.text};
  font-size: 44px;
`;

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Home</Title>
      </Container>
    </ThemeProvider>
  );
};

export default App;
