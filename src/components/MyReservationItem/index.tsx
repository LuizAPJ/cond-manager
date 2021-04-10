import React from 'react';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IReservationItem from '../../interfaces/ReservationItem';

import S from './style';

interface MyReservationProps {
  data: IReservationItem;
}

const MyReservationItem: React.FC<MyReservationProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.CoverImage source={{uri: data.cover}} resizeMode="cover" />

      <S.InfoContainer>
        <S.Title>{data.title}</S.Title>
        <S.InfoText>Horário Reservado</S.InfoText>
        <S.DateText>{data.datereserved}</S.DateText>
      </S.InfoContainer>

      <S.Button onPress={() => {}}>
        <Icon name="remove" size={25} color={theme.red} />
      </S.Button>
    </S.Container>
  );
};

export default MyReservationItem;
