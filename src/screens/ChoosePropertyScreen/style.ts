import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 20px;
  `,
  LoadingIcon: styled.ActivityIndicator``,
  HeadTitle: styled.Text`
    font-size: 16px;
    color: ${props => props.theme.text};
    text-align: center;
    margin-top: 10px;
  `,
  BigArea: styled.View`
    margin: 50px 0;
    align-items: center;
  `,
  LogoutButton: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    padding: 15px;
    justify-content: center;
    align-items: center;
  `,
  LogoutButtonText: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
  PropertyList: styled.View`
    margin: 20px 0;
  `,
  ChoosePropertyBtn: styled.TouchableOpacity`
    background-color: ${props => props.theme.lighterBackground};
    border-color: ${props => props.theme.lighterBorder};
    border-width: 2px;
    border-radius: 20px;
    padding: 15px;
    align-items: center;
    margin-bottom: 10px;
  `,
  ChoosePropertyBtnText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.text};
  `,
};
