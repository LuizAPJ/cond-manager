import React, {useCallback, useContext, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import api from '../../services/api';
import themes from '../../themes';

import S from './style';

const RegisterScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {dispatch} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleRegisterButton = useCallback(async () => {
    if (name && email && cpf && password && passwordConfirm) {
      const {data: response} = await api.post('/auth/register', {
        name,
        email,
        cpf,
        password,
        password_confirm: passwordConfirm,
      });

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
  }, [cpf, dispatch, email, name, navigation, password, passwordConfirm]);

  return (
    <S.Container>
      <S.Field
        placeholder="Digite seu Nome Completo"
        value={name}
        onChangeText={text => setName(text)}
        placeholderTextColor={theme.text}
      />

      <S.Field
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor={theme.text}
      />

      <S.Field
        placeholder="Digite seu CPF"
        value={cpf}
        onChangeText={text => setCpf(text)}
        placeholderTextColor={theme.text}
        keyboardType="numeric"
      />

      <S.Field
        placeholder="Digite sua Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor={theme.text}
        secureTextEntry
      />

      <S.Field
        placeholder="Confirme sua Senha"
        value={passwordConfirm}
        onChangeText={text => setPasswordConfirm(text)}
        placeholderTextColor={theme.text}
        secureTextEntry
      />

      <S.Button onPress={handleRegisterButton}>
        <S.ButtonText>CADASTRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default RegisterScreen;
