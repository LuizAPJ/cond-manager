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
      <S.CoverImage source={{uri: data.cover}} resizeMode="cover" />
      <S.Title>{data.title}</S.Title>
      <S.DateText>Horários de funcionamento</S.DateText>
      {data.dates.map((item, index) => (
        <S.DateItem key={index}>{item}</S.DateItem>
      ))}
    </S.Container>
  );
};

export default ReservationItem;
