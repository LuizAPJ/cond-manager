import React, {useCallback, useEffect, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import api from '../../services/api';
import LostItem from '../../components/LostItem';
import ILostItem from '../../interfaces/LostItem';

import S from './style';

const FoundAndLostScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [lostList, setLostList] = useState<ILostItem[]>([]);
  const [recoveredList, setRecoveredList] = useState<ILostItem[]>([]);

  const getFoundAndLost = useCallback(async () => {
    setLostList([]);
    setRecoveredList([]);
    setLoading(true);
    const {data: response} = await api.get('/foundandlost');
    setLoading(false);

    if (!response.error) {
      setLostList(response.lost);
      setRecoveredList(response.recovered);
    } else {
      Alert.alert('Erro!', `${response.error}`);
    }
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <S.AddButton>
          <Icon name="plus" size={24} color={theme.text} />
        </S.AddButton>
      ),
    });

    const unsubscribe = navigation.addListener('focus', () => {
      getFoundAndLost();
    });
    return unsubscribe;
  }, [getFoundAndLost, navigation, theme]);

  return (
    <S.Container>
      <S.Scroller>
        {loading && <S.LoadingIcon color={theme.purple} size="large" />}

        {!loading && lostList.length === 0 && recoveredList.length === 0 && (
          <S.NoListContainer>
            <S.NoListText>Não há itens perdidos/recuperados.</S.NoListText>
          </S.NoListContainer>
        )}

        {!loading && lostList.length > 0 && (
          <>
            <S.Title>Itens Perdidos</S.Title>
            <S.ProductScroller
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {lostList.map((item, index) => (
                <LostItem
                  key={index}
                  data={item}
                  showButton={true}
                  refreshFunction={getFoundAndLost}
                />
              ))}
            </S.ProductScroller>
          </>
        )}

        {!loading && recoveredList.length > 0 && (
          <>
            <S.Title>Itens Recuperados</S.Title>
            <S.ProductScroller
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {recoveredList.map((item, index) => (
                <LostItem
                  key={index}
                  data={item}
                  showButton={false}
                  refreshFunction={getFoundAndLost}
                />
              ))}
            </S.ProductScroller>
          </>
        )}
      </S.Scroller>
    </S.Container>
  );
};

export default FoundAndLostScreen;
