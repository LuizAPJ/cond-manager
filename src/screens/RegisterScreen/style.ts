import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    padding: 20px;
    background-color: ${props => props.theme.background};
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color: ${props => props.theme.border};
    background-color: ${props => props.theme.lighterBackground};
    border-radius: 5px;
    color: ${props => props.theme.text};
    font-size: 15px;
    padding: 10px 15px;
    margin-bottom: 15px;
  `,
  Button: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 12px;
    margin-bottom: 15px;
  `,
  ButtonText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
};
