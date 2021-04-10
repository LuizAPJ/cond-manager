import React, {useCallback, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, ImagePickerResponse} from 'react-native-image-picker';
import api from '../../services/api';
import themes from '../../themes';

import S from './style';

const FoundAndLostAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

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
        maxHeight: 1280,
      },
      response => {
        if (!response.didCancel) {
          setPhoto(response);
        }
      },
    );
  }, []);

  const handleSave = useCallback(async () => {
    if (photo && where && photo.uri) {
      let formData = new FormData();
      formData.append('description', description);
      formData.append('where', where);
      formData.append('photo', {
        uri: photo.uri,
        type: photo.type,
        name: photo.fileName,
      });

      const {data: response} = await api.post('/foundandlost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.error) {
        setPhoto({});
        setDescription('');
        setWhere('');
        navigation.navigate('FoundAndLostScreen');
      } else {
        Alert.alert('Erro!', `${response.error}`);
      }
    } else {
      Alert.alert('Erro!', 'Preencha todos os campos e tire uma foto.');
    }
  }, [description, navigation, photo, where]);

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

        <S.Button onPress={handleSave}>
          <S.ButtonText>SALVAR</S.ButtonText>
        </S.Button>
      </S.Scroller>
    </S.Container>
  );
};

export default FoundAndLostAddScreen;
