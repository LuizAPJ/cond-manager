import React from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import themes from '../../themes';

import S from './style';
import ILostItem from '../../interfaces/LostItem';

interface LostItemProps {
  data: ILostItem;
  showButton: boolean;
  refreshFunction?: () => void;
}

const LostItem: React.FC<LostItemProps> = ({
  data,
  showButton,
  refreshFunction,
}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  return (
    <S.Container>
      <S.Title>LostItem</S.Title>
    </S.Container>
  );
};

export default LostItem;
