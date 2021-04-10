import React, {useCallback} from 'react';
import {Alert, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import api from '../../services/api';
import IReservationItem from '../../interfaces/ReservationItem';

import S from './style';

interface MyReservationProps {
  data: IReservationItem;
  refreshFunction: () => void;
}

const MyReservationItem: React.FC<MyReservationProps> = ({
  data,
  refreshFunction,
}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const removeReservation = useCallback(async () => {
    const {data: response} = await api.delete(`/myreservations/${data.id}`);

    if (!response.error) {
      refreshFunction();
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, [data.id, refreshFunction]);

  const handleRemoveButton = useCallback(() => {
    Alert.alert('Confirmação', 'Tem certeza que deseja cancelar a reserva?', [
      {text: 'Sim, tenho certeza', onPress: removeReservation},
      {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
    ]);
  }, [removeReservation]);

  return (
    <S.Container>
      <S.CoverImage source={{uri: data.cover}} resizeMode="cover" />

      <S.InfoContainer>
        <S.Title>{data.title}</S.Title>
        <S.InfoText>Horário Reservado</S.InfoText>
        <S.DateText>{data.datereserved}</S.DateText>
      </S.InfoContainer>

      <S.Button onPress={handleRemoveButton}>
        <Icon name="remove" size={25} color={theme.red} />
      </S.Button>
    </S.Container>
  );
};

export default MyReservationItem;
