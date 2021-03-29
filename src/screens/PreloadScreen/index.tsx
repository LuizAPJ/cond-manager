import React, {useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, useColorScheme} from 'react-native';

import {AuthContext} from '../../contexts/auth';
import api from '../../services/api';
import themes from '../../themes';

import S from './style';

const PreloadScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {dispatch} = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await api.post('/auth/validate');

        if (!data.error) {
          dispatch({type: 'setUser', payload: {user: data.user}});

          navigation.reset({
            index: 1,
            routes: [{name: 'ChoosePropertyScreen'}],
          });
        } else {
          Alert.alert('Erro!', `${data.error}`);

          dispatch({type: 'setToken', payload: {token: ''}});

          navigation.reset({
            index: 1,
            routes: [{name: 'LoginScreen'}],
          });
        }
      } catch (error) {
        navigation.reset({
          index: 1,
          routes: [{name: 'LoginScreen'}],
        });
      }
    })();
  }, [dispatch, navigation]);

  return (
    <S.Container>
      <S.LoadingIcon color={theme.purple} size="large" />
    </S.Container>
  );
};

export default PreloadScreen;
