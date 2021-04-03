import React, {useContext, useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import {AuthContext} from '../../contexts/auth';
import themes from '../../themes';

import S from './style';

const ChoosePropertyScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);

  return (
    <S.Container>
      <S.Scroller>
        {loading && <S.LoadingIcon color={theme.purple} size="large" />}
      </S.Scroller>
    </S.Container>
  );
};

export default ChoosePropertyScreen;
