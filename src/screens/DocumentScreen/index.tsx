import React, {ElementType, useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';

import api from '../../services/api';
import DocItem from '../../components/DocItem';
import IDocItem from '../../interfaces/DocITem';

import S from './style';

const DocumentScreen: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [docList, setDocList] = useState<IDocItem[]>([]);

  const getDocs = useCallback(async () => {
    setLoading(true);
    const {data: response} = await api.get('/docs');
    setLoading(false);

    if (!response.error) {
      setDocList(response.list);
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, []);

  useEffect(() => {
    getDocs();
  }, [getDocs]);

  return (
    <S.Container>
      {!loading && docList.length === 0 && (
        <S.NoListArea>
          <S.NoListText>Não há documentos.</S.NoListText>
        </S.NoListArea>
      )}
      <S.List<ElementType>
        data={docList}
        onRefresh={getDocs}
        refreshing={loading}
        keyExtractor={(item: IDocItem) => item.id.toString()}
        renderItem={({item}: {item: IDocItem}) => <DocItem data={item} />}
      />
    </S.Container>
  );
};

export default DocumentScreen;
