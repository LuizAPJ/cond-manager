import React, {useCallback} from 'react';
import {Alert, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';

import S from './style';
import ILostItem from '../../interfaces/LostItem';
import api from '../../services/api';

interface LostItemProps {
  data: ILostItem;
  showButton: boolean;
  refreshFunction: () => void;
}

const LostItem: React.FC<LostItemProps> = ({
  data,
  showButton,
  refreshFunction,
}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const handleSetRecovered = useCallback(async () => {
    const {data: response} = await api.put(`/foundandlost/${data.id}`, {
      status: 'recovered',
    });

    if (!response.error) {
      refreshFunction();
      Alert.alert('Concluído', 'Pegue seu item perdido na portaria!');
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, [data.id, refreshFunction]);

  const handleIsMine = useCallback(() => {
    Alert.alert('Confirmação', 'Tem certeza que este item é seu?', [
      {text: 'Sim, é meu', onPress: handleSetRecovered},
      {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
    ]);
  }, [handleSetRecovered]);

  return (
    <S.Container>
      <S.Photo source={{uri: data.photo}} resizeMode="cover" />
      <S.Title>{data.description}</S.Title>

      <S.InfoTitle>Encontrado em</S.InfoTitle>
      <S.InfoText>{data.where}</S.InfoText>

      <S.InfoTitle>Data</S.InfoTitle>
      <S.InfoText>{data.datecreated}</S.InfoText>

      {showButton && (
        <S.MineButton onPress={handleIsMine}>
          <Icon name="hand-pointer-o" size={24} color={theme.buttonText} />
          <S.MineButtonText>É meu</S.MineButtonText>
        </S.MineButton>
      )}
    </S.Container>
  );
};

export default LostItem;
