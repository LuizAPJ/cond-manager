import React from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import themes from '../../themes';

import S from './style';

const FoundAndLostAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Title>FoundAndLostAddScreen</S.Title>
    </S.Container>
  );
};

export default FoundAndLostAddScreen;
