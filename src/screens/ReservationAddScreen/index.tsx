import React, {useCallback, useEffect, useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

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

  const [loading, setLoading] = useState(false);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  const handleDateChange = useCallback(() => {}, []);

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

        {!loading && (
          <S.CalendarContainer>
            <CalendarPicker
              onDateChange={handleDateChange}
              minDate={minDate}
              maxDate={maxDate}
              weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
              months={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novembro',
                'Dezembro',
              ]}
              previousTitle="Anterior"
              nextTitle="Próximo"
              textStyle={{color: theme.text}}
              disabledDatesTextStyle={{color: theme.drawerText}}
              selectedDayColor={theme.purple}
              selectedDayTextColor={theme.buttonText}
              todayBackgroundColor={theme.grayText}
            />
          </S.CalendarContainer>
        )}
      </S.Scroller>
    </S.Container>
  );
};

export default ReservationAddScreen;
