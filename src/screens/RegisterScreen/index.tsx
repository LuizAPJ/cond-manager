import React, {useState} from 'react';
import {useColorScheme} from 'react-native';

import themes from '../../themes';

import S from './style';

const RegisterScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <S.Container>
      <S.Field
        placeholder="Digite seu Nome Completo"
        value={name}
        onChangeText={text => setName(text)}
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
        placeholder="Digite seu E-mail"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor={theme.text}
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

      <S.Button>
        <S.ButtonText>CADASTRAR</S.ButtonText>
      </S.Button>
    </S.Container>
  );
};

export default RegisterScreen;
