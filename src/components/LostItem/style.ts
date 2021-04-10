import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    width: 200px;
    border-width: 1px;
    border-color: ${props => props.theme.border};
    border-radius: 5px;
    background-color: ${props => props.theme.lighterBackground};
    margin-right: 20px;
  `,
  Photo: styled.Image`
    height: 150px;
    border-radius: 5px;
  `,
  Title: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
    margin: 10px;
    height: 50px;
  `,
  InfoTitle: styled.Text`
    font-weight: bold;
    color: ${props => props.theme.grayText};
    margin: 10px 10px 0 10px;
  `,
  InfoText: styled.Text`
    font-weight: bold;
    color: ${props => props.theme.text};
    margin: 0 10px 10px 10px;
  `,
  MineButton: styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.purple};
    padding: 10px;
    border-radius: 5px;
    margin: 10px;
  `,
  MineButtonText: styled.Text`
    color: ${props => props.theme.buttonText};
    font-weight: bold;
    margin-left: 10px;
  `,
};
