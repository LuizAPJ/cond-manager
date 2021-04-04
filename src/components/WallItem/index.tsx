import React, {useCallback, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IWallItem from '../../interfaces/WallItem';

import S from './style';
import api from '../../services/api';

interface WallItemProps {
  data: IWallItem;
}

const WallItem: React.FC<WallItemProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const [likeCount, setLikeCount] = useState(data.likes);
  const [liked, setliked] = useState(data.liked);

  const handleLike = useCallback(async () => {
    setliked(!liked);
    const {data: response} = await api.post(`/wall/${data.id}/like`);

    if (!response.error) {
      setLikeCount(response.likes);
      setliked(response.liked);
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, [data, liked]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <Icon name="newspaper-o" size={30} color={theme.purple} />
        <S.InfoContainer>
          <S.Title>{data.title}</S.Title>
          <S.Date>{data.datecreated}</S.Date>
        </S.InfoContainer>
      </S.HeaderContainer>

      <S.Body>{data.body}</S.Body>

      <S.FooterArea>
        <S.LikeButton onPress={handleLike}>
          {liked ? (
            <Icon name="heart" size={17} color={theme.red} />
          ) : (
            <Icon name="heart-o" size={17} color={theme.red} />
          )}
        </S.LikeButton>
        <S.LikeText>
          {likeCount} pessoa{likeCount !== 1 ? 's' : null} curt
          {likeCount !== 1 ? 'iram' : 'iu'}
        </S.LikeText>
      </S.FooterArea>
    </S.Container>
  );
};

export default WallItem;
