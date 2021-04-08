import React, {useEffect} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useColorScheme} from 'react-native';

import themes from '../../themes';
import IReservation from '../../interfaces/ReservationItem';

import S from './style';

type ParamList = {
  Reservation: IReservation;
};

const ReservationAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'Reservation'>>();

  useEffect(() => {
    if (route.params) {
      navigation.setOptions({
        headerTitle: `Reservar ${route.params.title}`,
      });
    }
  }, [navigation, route]);

  return (
    <S.Container>
      <S.Title>ReservationAddScreen</S.Title>
    </S.Container>
  );
};

export default ReservationAddScreen;
