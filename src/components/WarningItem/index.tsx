import React from 'react';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IWarningItem from '../../interfaces/WarningItem';

import S from './style';

interface WarningItemProps {
  data: IWarningItem;
}

const WarningItem: React.FC<WarningItemProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.Date>{data.datecreated}</S.Date>
      <S.Title>{data.title}</S.Title>

      <S.StatusContainer>
        <Icon name="inbox" size={24} color={theme.purple} />
        <S.StatusText>
          {data.status === 'RESOLVED' ? 'Resolvido' : 'Ocorrência em análise'}
        </S.StatusText>
      </S.StatusContainer>

      {data.photos.length > 0 && (
        <S.PhotosContainer>
          {data.photos.map((item, index) => (
            <S.PhotoButton key={index} onPress={() => {}}>
              <S.PhotoImage source={{uri: item}} resizeMode="cover" />
            </S.PhotoButton>
          ))}
        </S.PhotosContainer>
      )}
    </S.Container>
  );
};

export default WarningItem;
