import React, {useContext} from 'react';
import {useColorScheme} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import {AuthContext} from '../../contexts/auth';

import S from './style';

const CustomDrawer: React.FC = props => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const navigation = useNavigation();
  const {state: context, dispatch} = useContext(AuthContext);

  return (
    <S.Container>
      <S.LogoContainer>
        <S.Logo
          source={require('../../assets/homelogo.png')}
          resizeMode="contain"
        />
      </S.LogoContainer>

      <S.Scroller />

      <S.ChangeUnitContainer>
        <S.ChangeUnitBtn>
          <S.ChangeUnitBtnText>Trocar Propriedade</S.ChangeUnitBtnText>
        </S.ChangeUnitBtn>
      </S.ChangeUnitContainer>

      <S.FooterContainer>
        <S.FooterInfo>
          <S.FooterProfile>dgsagdusya</S.FooterProfile>
          <S.FooterUnitText>dhsaiduh</S.FooterUnitText>
        </S.FooterInfo>
      </S.FooterContainer>
    </S.Container>
  );
};

export default CustomDrawer;
