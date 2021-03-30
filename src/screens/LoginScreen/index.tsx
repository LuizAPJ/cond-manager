import React, {useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import api from '../../services/api';
import themes from '../../themes';

import S from './style';

const LoginScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');

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

      <S.Button onPress={() => {}}>
        <S.ButtonText>ENTRAR</S.ButtonText>
      </S.Button>

      <S.Button onPress={() => {}}>
        <S.ButtonText>CADASTRAR-SE</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default LoginScreen;
