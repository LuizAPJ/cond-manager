import React, {useEffect, useState} from 'react';
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (route.params) {
      navigation.setOptions({
        headerTitle: `Reservar ${route.params.title}`,
      });
    }
  }, [navigation, route]);

  return (
    <S.Container>
      <S.Scroller>
        <S.CoverImage source={{uri: route.params.cover}} resizeMode="cover" />

        {loading && <S.LoadingIcon size="large" color={theme.purple} />}
      </S.Scroller>
    </S.Container>
  );
};

export default ReservationAddScreen;
