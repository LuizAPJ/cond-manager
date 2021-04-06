import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';

import S from './style';

const WarningAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const [warnText, setWarnText] = useState('');

  return (
    <S.Container>
      <S.Scroller>
        <S.Title>Descreva a ocorrência</S.Title>
        <S.Field
          placeholder="Ex: Vizinho X está com som alto."
          value={warnText}
          onChangeText={text => setWarnText(text)}
        />

        <S.Title>Fotos relacionadas</S.Title>

        <S.PhotoContainer>
          <S.PhotoScroll horizontal>
            <S.PhotoAddButton onPress={() => {}}>
              <Icon name="camera" size={24} color={theme.text} />
            </S.PhotoAddButton>
          </S.PhotoScroll>
        </S.PhotoContainer>

        <S.Button onPress={() => {}}>
          <S.ButtonText>SALVAR</S.ButtonText>
        </S.Button>
      </S.Scroller>
    </S.Container>
  );
};

export default WarningAddScreen;
