import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Scroller: styled.ScrollView`
    flex: 1px;
    padding: 20px;
  `,
  LoadingIcon: styled.ActivityIndicator``,
  Button: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    justify-content: center;
    align-items: center;
    padding: 12px;
    border-radius: 10px;
  `,
  ButtonText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
  Title: styled.Text`
    font-size: 17px;
    color: ${props => props.theme.text};
    margin: 10px 0;
  `,
  NoListContainer: styled.View`
    justify-content: center;
    align-items: center;
    padding: 30px;
  `,
  NoListText: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
  `,
};
