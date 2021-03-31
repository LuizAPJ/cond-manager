import React from 'react';
import {useColorScheme} from 'react-native';

import themes from '../../themes';

import S from './style';

const ChoosePropertyScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.Title>ChoosePropertyScreen</S.Title>
    </S.Container>
  );
};

export default ChoosePropertyScreen;
