import React, {useCallback, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import {AuthContext} from '../../contexts/auth';
import api from '../../services/api';

import S from './style';

const CustomDrawer: React.FC<DrawerContentComponentProps> = props => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context} = useContext(AuthContext);

  const menus = [
    {title: 'Mural de Avisos', icon: 'inbox', screen: 'WallScreen'},
    {title: 'Documentos', icon: 'file-text', screen: 'DocumentScreen'},
    {title: 'Reservas', icon: 'calendar', screen: 'ReservationScreen'},
    {title: 'Livro de Ocorrências', icon: 'bug', screen: 'WarningScreen'},
    {title: 'Achados e Perdidos', icon: 'search', screen: 'FoundAndLostScreen'},
    {title: 'Boletos', icon: 'wpforms', screen: 'BilletScreen'},
    {title: 'Perfil', icon: 'user', screen: 'ProfileScreen'},
  ];

  const handleLogoutButton = useCallback(async () => {
    await api.post('/auth/logout');
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('property');

    navigation.reset({
      index: 1,
      routes: [{name: 'LoginScreen'}],
    });
  }, [navigation]);

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

      <S.Scroller>
        {menus.map((item, index) => (
          <S.MenuButton
            key={index}
            onPress={() => navigation.navigate(item.screen)}>
            <S.MenuSquare />
            <Icon name={item.icon} size={20} color={theme.drawerText} />
            <S.MenuButtonText>{item.title}</S.MenuButtonText>
          </S.MenuButton>
        ))}

        <S.MenuButton onPress={handleLogoutButton}>
          <S.MenuSquare />
          <Icon name="toggle-left" size={20} color={theme.drawerText} />
          <S.MenuButtonText>Sair</S.MenuButtonText>
        </S.MenuButton>
      </S.Scroller>

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
