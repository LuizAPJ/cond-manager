import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import IReservationItem from '../../interfaces/ReservationItem';

import S from './style';

interface ReservationItemProps {
  data: IReservationItem;
}

const ReservationItem: React.FC<ReservationItemProps> = ({data}) => {
  const navigation = useNavigation();

  const handleClick = useCallback(() => {
    navigation.navigate('ReservationAddScreen', {
      id: data.id,
      cover: data.cover,
      title: data.title,
      dates: data.dates,
    });
  }, [data, navigation]);

  return (
    <S.Container onPress={handleClick}>
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
