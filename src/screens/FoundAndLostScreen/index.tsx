import React, {useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';

import S from './style';

const FoundAndLostScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <S.AddButton>
          <Icon name="plus" size={24} color={theme.text} />
        </S.AddButton>
      ),
    });
  }, [navigation, theme]);

  return (
    <S.Container>
      <S.Title>FoundAndLostScreen</S.Title>
    </S.Container>
  );
};

export default FoundAndLostScreen;
