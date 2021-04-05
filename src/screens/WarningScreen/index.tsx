import React, {ElementType, useCallback, useEffect, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';
import themes from '../../themes';
import WarningItem from '../../components/WarningItem';
import IWarningItem from '../../interfaces/WarningItem';
import IProperty from '../../interfaces/Property';

import S from './style';

const WarningScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<IWarningItem[]>([]);

  const getWarnings = useCallback(async () => {
    setLoading(true);
    const property = await AsyncStorage.getItem('property');
    if (property) {
      const parsedProperty: IProperty = JSON.parse(property);

      const {data: response} = await api.get(
        `/warnings?property=${parsedProperty.id}`,
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
    navigation.setOptions({
      headerRight: () => (
        <S.AddButton onPress={() => navigation.navigate('WarningAddScreen')}>
          <Icon name="plus" size={24} color={theme.text} />
        </S.AddButton>
      ),
    });

    getWarnings();
  }, [getWarnings, navigation, theme]);

  return (
    <S.Container>
      {!loading && list.length === 0 && (
        <S.NoListArea>
          <S.NoListText>Não há ocorrências.</S.NoListText>
        </S.NoListArea>
      )}
      <S.List<ElementType>
        data={list}
        onRefresh={getWarnings}
        refreshing={loading}
        keyExtractor={(item: IWarningItem) => item.id.toString()}
        renderItem={({item}: {item: IWarningItem}) => (
          <WarningItem data={item} />
        )}
      />
    </S.Container>
  );
};

export default WarningScreen;
