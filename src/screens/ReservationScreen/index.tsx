import React from 'react';
import {useColorScheme} from 'react-native';

import themes from '../../themes';

import S from './style';

const ReservationScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.Title>ReservationScreen</S.Title>
    </S.Container>
  );
};

export default ReservationScreen;
