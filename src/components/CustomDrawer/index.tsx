import React, {useCallback, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import {AuthContext} from '../../contexts/auth';

import S from './style';

const CustomDrawer: React.FC = props => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  const handleChangeProperty = useCallback(async () => {
    await AsyncStorage.removeItem('property');

    navigation.reset({
      index: 1,
      routes: [{name: 'ChoosePropertyScreen'}],
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo
          source={require('../../assets/homelogo.png')}
          resizeMode="contain"
        />
      </S.LogoContainer>

      <S.Scroller />

      <S.ChangePropertyContainer>
        <S.ChangePropertyBtn onPress={handleChangeProperty}>
          <S.ChangePropertyBtnText>Trocar Propriedade</S.ChangePropertyBtnText>
        </S.ChangePropertyBtn>
      </S.ChangePropertyContainer>

      <S.FooterContainer>
        <S.FooterInfo>
          <S.FooterProfile>
            Olá {context.user?.name ? context.user.name : 'inquilino'}
          </S.FooterProfile>
          <S.FooterPropertyText>{context.property?.name}</S.FooterPropertyText>
        </S.FooterInfo>

        <S.FooterPropertyButton
          onPress={() => navigation.navigate('PropertyScreen')}>
          <Icon name="gear" size={24} color={theme.drawerText} />
        </S.FooterPropertyButton>
      </S.FooterContainer>
    </S.Container>
  );
};

export default CustomDrawer;
