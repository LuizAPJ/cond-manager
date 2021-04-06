import React, {useCallback, useState} from 'react';
import {Alert, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import themes from '../../themes';
import IProperty from '../../interfaces/Property';

import S from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WarningAddScreen: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();

  const [warnText, setWarnText] = useState('');
  const [photoList, setPhotoList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleAddPhoto = useCallback(async () => {
    launchCamera(
      {
        mediaType: 'photo',
        maxWidth: 1280,
      },
      async res => {
        if (!res.didCancel) {
          setLoading(true);
          let photo = new FormData();
          photo.append('photo', {
            uri: res.uri,
            type: res.type,
            name: res.fileName,
          });

          const {data: response} = await api.post('/warning/file', photo, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          setLoading(false);

          if (!response.error) {
            let list = [...photoList];
            if (response.photo) {
              list.push(response.photo);
            }
            setPhotoList(list);
          } else {
            Alert.alert('Erro!', `${response.error}`);
          }
        }
      },
    );
  }, [photoList]);

  const handleDeletePhoto = useCallback(
    url => {
      let list = [...photoList];
      list = list.filter(value => value !== url);
      setPhotoList(list);
    },
    [photoList],
  );

  const handleSaveWarn = useCallback(async () => {
    const property = await AsyncStorage.getItem('property');
    if (property) {
      const parsedProperty: IProperty = JSON.parse(property);
      if (warnText) {
        const {data: response} = await api.post('/warning', {
          title: warnText,
          list: photoList,
          property: parsedProperty.id,
        });

        if (!response.error) {
          navigation.navigate('WarningScreen');
        } else {
          Alert.alert('Erro!', `${response.error}`);
        }
      } else {
        Alert.alert('Erro!', 'Descreva a ocorrência!');
      }
    }
  }, [navigation, photoList, warnText]);

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
            <S.PhotoAddButton onPress={handleAddPhoto}>
              <Icon name="camera" size={24} color={theme.text} />
            </S.PhotoAddButton>
            {photoList.map((item, index) => (
              <S.PhotoItem key={index}>
                <S.Photo source={{uri: item}} />
                <S.PhotoRemoveButtom onPress={() => handleDeletePhoto(item)}>
                  <Icon name="remove" size={16} color={theme.red} />
                </S.PhotoRemoveButtom>
              </S.PhotoItem>
            ))}
          </S.PhotoScroll>
        </S.PhotoContainer>

        {loading && <S.LoadingText>Enviado foto. Aguarde!</S.LoadingText>}

        <S.Button onPress={handleSaveWarn}>
          <S.ButtonText>SALVAR</S.ButtonText>
        </S.Button>
      </S.Scroller>
    </S.Container>
  );
};

export default WarningAddScreen;
