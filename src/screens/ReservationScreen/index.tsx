import React, {useCallback, useEffect, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import themes from '../../themes';
import ReservationItem from '../../components/ReservationItem';
import IReservationItem from '../../interfaces/ReservationItem';

import S from './style';

const ReservationScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IReservationItem[]>([]);

  const getReservations = useCallback(async () => {
    setList([]);
    setLoading(true);
    const {data: response} = await api.get('/reservations');
    setLoading(false);

    if (!response.error) {
      setList(response.list);
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, []);

  useEffect(() => {
    getReservations();
  }, [getReservations]);

  return (
    <S.Container>
      <S.Scroller showsVerticalScrollIndicator={false}>
        <S.Button onPress={() => navigation.navigate('MyReservationsScreen')}>
          <S.ButtonText>Minhas Reservas</S.ButtonText>
        </S.Button>

        <S.Title>Selecione uma Aŕea</S.Title>

        {loading && <S.LoadingIcon size="large" color={theme.purple} />}

        {!loading && list.length === 0 && (
          <S.NoListContainer>
            <S.NoListText>Não há áreas disponíveis.</S.NoListText>
          </S.NoListContainer>
        )}

        {list.map((item, index) => (
          <ReservationItem key={index} data={item} />
        ))}
      </S.Scroller>
    </S.Container>
  );
};

export default ReservationScreen;
