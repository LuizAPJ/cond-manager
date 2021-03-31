import React from 'react';
import {useColorScheme} from 'react-native';

import themes from '../../themes';

import S from './style';

const RegisterScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.Title>RegisterScreen</S.Title>
    </S.Container>
  );
};

export default RegisterScreen;
