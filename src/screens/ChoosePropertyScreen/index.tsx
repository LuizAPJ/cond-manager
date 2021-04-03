import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../../services/api';
import {AuthContext} from '../../contexts/auth';
import themes from '../../themes';
import IProperty from '../../interfaces/Property';

import S from './style';

const ChoosePropertyScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const handleLogoutButton = useCallback(async () => {
    await api.post('/auth/logout');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('property');

    navigation.reset({
      index: 1,
      routes: [{name: 'LoginScreen'}],
    });
  }, [navigation]);

  const handleChoosePropertybtn = useCallback(
    async (property: IProperty) => {
      await AsyncStorage.setItem('property', JSON.stringify(property));

      dispatch({type: 'setProperty', payload: {property}});

      navigation.reset({
        index: 1,
        routes: [{name: 'MainDrawer'}],
      });
    },
    [dispatch, navigation],
  );

  useEffect(() => {
    (async () => {
      const property = await AsyncStorage.getItem('property');

      if (property) {
        const parsedProperty: IProperty = JSON.parse(property);
        await handleChoosePropertybtn(parsedProperty);
      }

      setLoading(false);
    })();
  }, [handleChoosePropertybtn]);

  return (
    <S.Container>
      <S.Scroller>
        {loading && <S.LoadingIcon color={theme.purple} size="large" />}

        {!loading && context.user && context.user.properties.length > 0 && (
          <>
            <S.HeadTitle>Olá {context.user.name}!</S.HeadTitle>
            <S.HeadTitle>Escolha uma das suas propriedades.</S.HeadTitle>

            <S.PropertyList>
              {context.user.properties.map((item, index) => (
                <S.ChoosePropertyBtn
                  key={index}
                  onPress={() => handleChoosePropertybtn(item)}>
                  <S.ChoosePropertyBtnText>{item.name}</S.ChoosePropertyBtnText>
                </S.ChoosePropertyBtn>
              ))}
            </S.PropertyList>
          </>
        )}

        {!loading && context.user && context.user.properties.length <= 0 && (
          <S.BigArea>
            <S.HeadTitle>
              {context.user.name}, parabéns pelo cadastro!
            </S.HeadTitle>
            <S.HeadTitle>
              Agora a administração precisa liberar seu cadastro.
            </S.HeadTitle>
          </S.BigArea>
        )}
      </S.Scroller>

      <S.LogoutButton onPress={handleLogoutButton}>
        <S.LogoutButtonText>Sair</S.LogoutButtonText>
      </S.LogoutButton>
    </S.Container>
  );
};

export default ChoosePropertyScreen;
