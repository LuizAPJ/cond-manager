import React from 'react';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IWallItem from '../../interfaces/WallItem';

import S from './style';

const WallItem: React.FC = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.HeaderContainer>
        <Icon name="newspaper-o" size={30} color={theme.purple} />
        <S.InfoContainer>
          <S.Title>Título</S.Title>
          <S.Date>data</S.Date>
        </S.InfoContainer>
      </S.HeaderContainer>

      <S.Body>Texto do aviso</S.Body>

      <S.FooterArea>
        <S.LikeButton onPress={() => {}}>
          <Icon name="heart" size={17} color={theme.red} />
        </S.LikeButton>
        <S.LikeText>x pessoas curtiram</S.LikeText>
      </S.FooterArea>
    </S.Container>
  );
};

export default WallItem;
