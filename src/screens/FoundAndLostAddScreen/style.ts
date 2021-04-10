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
  PhotoContainer: styled.View``,
  PhotoItem: styled.Image`
    height: 150px;
  `,
  Title: styled.Text`
    font-size: 17px;
    color: ${props => props.theme.text};
    margin: 10px 0;
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color: ${props => props.theme.border};
    background-color: ${props => props.theme.lighterBackground};
    border-radius: 5px;
    color: ${props => props.theme.text};
    font-size: 15px;
    padding: 10px;
    margin-bottom: 15px;
  `,
  Button: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ButtonText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.text};
  `,
};
