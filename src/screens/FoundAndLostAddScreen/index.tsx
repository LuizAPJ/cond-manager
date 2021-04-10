import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import themes from '../../themes';
// import DocItem from '../../components/DocItem';

import S from './style';

const FoundAndLostAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  const [photo, setPhoto] = useState({});
  const [description, setDescription] = useState('');
  const [where, setWhere] = useState('');

  return (
    <S.Container>
      <S.Scroller>
        <S.PhotoContainer />

        <S.Title>Descreva o produto</S.Title>
        <S.Field
          placeholder="Ex: celular da marca X"
          value={description}
          onChangeText={text => setDescription(text)}
          placeholderTextColor={theme.grayText}
        />

        <S.Title>Onde foi encontrado?</S.Title>
        <S.Field
          placeholder="Ex: estacionamento"
          value={where}
          onChangeText={text => setWhere(text)}
          placeholderTextColor={theme.grayText}
        />

        <S.SaveButton>
          <S.SaveButtonText>SALVAR</S.SaveButtonText>
        </S.SaveButton>
      </S.Scroller>
    </S.Container>
  );
};

export default FoundAndLostAddScreen;
