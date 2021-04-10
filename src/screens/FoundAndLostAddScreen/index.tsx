import React, {useCallback, useState} from 'react';
import {useColorScheme} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, ImagePickerResponse} from 'react-native-image-picker';

import themes from '../../themes';
// import DocItem from '../../components/DocItem';

import S from './style';

const FoundAndLostAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  // const navigation = useNavigation();

  const [photo, setPhoto] = useState<ImagePickerResponse>(
    {} as ImagePickerResponse,
  );
  const [description, setDescription] = useState('');
  const [where, setWhere] = useState('');

  const handleAddPhoto = useCallback(() => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280,
      },
      response => {
        if (!response.didCancel) {
          setPhoto(response);
        }
      },
    );
  }, []);

  return (
    <S.Container>
      <S.Scroller>
        <S.PhotoContainer>
          {!photo.uri && (
            <S.Button onPress={handleAddPhoto}>
              <S.ButtonText>Tirar uma foto</S.ButtonText>
            </S.Button>
          )}

          {photo.uri && (
            <>
              <S.PhotoItem source={{uri: photo.uri}} resizeMode="cover" />
              <S.Button onPress={handleAddPhoto}>
                <S.ButtonText>Tirar outra foto</S.ButtonText>
              </S.Button>
            </>
          )}
        </S.PhotoContainer>

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

        <S.Button>
          <S.ButtonText>SALVAR</S.ButtonText>
        </S.Button>
      </S.Scroller>
    </S.Container>
  );
};

export default FoundAndLostAddScreen;
