import React, {useCallback, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {AuthContext} from '../../contexts/auth';
import themes from '../../themes';

import S from './style';

const ChoosePropertyScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  const handleLogoutButton = useCallback(async () => {}, []);

  return (
    <S.Container>
      <S.Scroller>
        {loading && <S.LoadingIcon color={theme.purple} size="large" />}

        {!loading && context.user && context.user.properties.length > 0 && (
          <>
            <S.HeadTitle>Olá {context.user.name}!</S.HeadTitle>
            <S.HeadTitle>Escolha uma das suas propriedades.</S.HeadTitle>
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
