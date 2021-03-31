import React, {useCallback, useContext, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import api from '../../services/api';
import themes from '../../themes';

import S from './style';

const LoginScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {dispatch} = useContext(AuthContext);

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginButton = useCallback(async () => {
    if (cpf && password) {
      const {data: response} = await api.post('/auth/login', {cpf, password});

      if (!response.error) {
        dispatch({type: 'setToken', payload: {token: response.token}});
        dispatch({type: 'setUser', payload: {user: response.user}});

        navigation.reset({
          index: 1,
          routes: [{name: 'ChoosePropertyScreen'}],
        });
      } else {
        Alert.alert('Erro!', `${response.error}`);
      }
    } else {
      Alert.alert('Erro!', 'Preencha todos os campos.');
    }
  }, [cpf, dispatch, navigation, password]);

  const handleRegisterLogin = useCallback(() => {
    navigation.navigate('RegisterScreen');
  }, [navigation]);

  return (
    <S.Container>
      <S.Logo
        source={require('../../assets/undraw_home.png')}
        resizeMode="contain"
      />

      <S.Field
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={text => setCpf(text)}
        keyboardType="numeric"
        placeholderTextColor={theme.text}
      />

      <S.Field
        placeholder="Digite sua senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        placeholderTextColor={theme.text}
      />

      <S.Button onPress={handleLoginButton}>
        <S.ButtonText>ENTRAR</S.ButtonText>
      </S.Button>

      <S.Button onPress={handleRegisterLogin}>
        <S.ButtonText>CADASTRAR-SE</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default LoginScreen;
