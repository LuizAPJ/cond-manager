import React, {useContext, useEffect, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import {AuthContext} from '../../contexts/auth';
import themes from '../../themes';
import WallItem from '../../components/WallItem';

import S from './style';

interface WallItemData {
  id: number;
  title: string;
  body: string;
  datecreated: string;
  likes: number;
  liked: boolean;
}

const ChoosePropertyScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [wallList, setWallList] = useState<WallItemData[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const {data: response} = await api.get('/walls');
      setLoading(false);

      if (!response.error) {
        setWallList(response.list);
      } else {
        Alert.alert('Erro!', `${response.error}`);
      }
    })();
  }, []);

  return (
    <S.Container>
      {loading && <S.LoadingIcon color={theme.purple} size="large" />}

      {!loading && wallList.length === 0 && (
        <S.NoListContainer>
          <S.NoListText>Não há avisos no momento.</S.NoListText>
        </S.NoListContainer>
      )}

      {wallList.length > 0 && (
        <S.List
          data={wallList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <WallItem data={item} />}
        />
      )}
    </S.Container>
  );
};

export default ChoosePropertyScreen;
