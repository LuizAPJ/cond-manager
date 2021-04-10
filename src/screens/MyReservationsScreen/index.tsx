import React, {ElementType, useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useNavigation} from '@react-navigation/native';

import IProperty from '../../interfaces/Property';
import IReservationItem from '../../interfaces/ReservationItem';
import MyReservationItem from '../../components/MyReservationItem';
import api from '../../services/api';

import S from './style';

const MyReservationsScreen: React.FC = () => {
  // const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IReservationItem[]>([]);

  const getList = useCallback(async () => {
    setLoading(true);
    const property = await AsyncStorage.getItem('property');
    if (property) {
      const parsedProperty: IProperty = JSON.parse(property);

      const {data: response} = await api.get(
        `/myreservations?property=${parsedProperty.id}`,
      );
      setLoading(false);

      if (!response.error) {
        setList(response.list);
      } else {
        Alert.alert('Erro!', `${response.error}`);
      }
    }
  }, []);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <S.Container>
      {!loading && list.length === 0 && (
        <S.NoListArea>
          <S.NoListText>Não há reservas.</S.NoListText>
        </S.NoListArea>
      )}

      <S.List<ElementType>
        data={list}
        onRefresh={getList}
        refreshing={loading}
        keyExtractor={(item: IReservationItem) => item.id.toString()}
        renderItem={({item}: {item: IReservationItem}) => (
          <MyReservationItem data={item} refreshFunction={getList} />
        )}
      />
    </S.Container>
  );
};

export default MyReservationsScreen;
