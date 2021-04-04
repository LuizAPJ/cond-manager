import React, {ElementType, useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';

import api from '../../services/api';
import WallItem from '../../components/WallItem';
import IWallItem from '../../interfaces/WallItem';

import S from './style';

const ChoosePropertyScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [wallList, setWallList] = useState<IWallItem[]>([]);

  const getWall = useCallback(async () => {
    setLoading(true);
    const {data: response} = await api.get('/walls');
    setLoading(false);

    if (!response.error) {
      setWallList(response.list);
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, []);

  useEffect(() => {
    getWall();
  }, [getWall]);

  return (
    <S.Container>
      {!loading && wallList.length === 0 && (
        <S.NoListContainer>
          <S.NoListText>Não há avisos no momento.</S.NoListText>
        </S.NoListContainer>
      )}

      <S.List<ElementType>
        data={wallList}
        onRefresh={getWall}
        refreshing={loading}
        keyExtractor={(item: IWallItem) => item.id.toString()}
        renderItem={({item}: {item: IWallItem}) => <WallItem data={item} />}
      />
    </S.Container>
  );
};

export default ChoosePropertyScreen;
