import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    background-color: ${props => props.theme.lighterBackground};
    border-width: 2px;
    border-color: ${props => props.theme.lighterBorder};
    border-radius: 15px;
    margin-bottom: 15px;
    flex-direction: row;
    align-items: center;
  `,
  CoverImage: styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 15px;
  `,
  InfoContainer: styled.View`
    flex: 1;
    margin-left: 10px;
  `,
  Title: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme.text};
    margin-bottom: 5px;
  `,
  InfoText: styled.Text`
    color: ${props => props.theme.grayText};
  `,
  DateText: styled.Text`
    color: ${props => props.theme.text};
  `,
  Button: styled.TouchableOpacity`
    margin: 20px;
  `,
};
