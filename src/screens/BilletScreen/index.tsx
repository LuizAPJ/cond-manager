import React, {ElementType, useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import DocItem from '../../components/DocItem';
import IDocItem from '../../interfaces/DocITem';
import IProperty from '../../interfaces/Property';

import S from './style';

const BilletScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [billetsList, setBilletsList] = useState<IDocItem[]>([]);

  const getDocs = useCallback(async () => {
    setLoading(true);
    const property = await AsyncStorage.getItem('property');
    if (property) {
      const parsedProperty: IProperty = JSON.parse(property);

      const {data: response} = await api.get(
        `/billets?property=${parsedProperty.id}`,
      );

      setLoading(false);

      if (!response.error) {
        setBilletsList(response.list);
      } else {
        Alert.alert('Erro!', `${response.error}`);
      }
    }
  }, []);

  useEffect(() => {
    getDocs();
  }, [getDocs]);

  return (
    <S.Container>
      {!loading && billetsList.length === 0 && (
        <S.NoListArea>
          <S.NoListText>Não há boletos.</S.NoListText>
        </S.NoListArea>
      )}
      <S.List<ElementType>
        data={billetsList}
        onRefresh={getDocs}
        refreshing={loading}
        keyExtractor={(item: IDocItem) => item.id.toString()}
        renderItem={({item}: {item: IDocItem}) => <DocItem data={item} />}
      />
    </S.Container>
  );
};

export default BilletScreen;
