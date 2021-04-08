import React from 'react';
import {useColorScheme} from 'react-native';

import themes from '../../themes';
import IReservationItem from '../../interfaces/ReservationItem';

import S from './style';

interface ReservationItemProps {
  data: IReservationItem;
}

const ReservationItem: React.FC<ReservationItemProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.Title>ReservationItem</S.Title>
    </S.Container>
  );
};

export default ReservationItem;
