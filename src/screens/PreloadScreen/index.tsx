import React from 'react';
import {useColorScheme} from 'react-native';
import themes from '../../themes';

import S from './style';

const PreloadScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  return (
    <S.Container>
      <S.LoadingIcon color={theme.purple} size="large" />
    </S.Container>
  );
};

export default PreloadScreen;
