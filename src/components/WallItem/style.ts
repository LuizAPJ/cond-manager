import styled from 'styled-components/native';

export default {
  Container: styled.View`
    background-color: ${props => props.theme.lighterBackground};
    border-width: 2px;
    border-color: ${props => props.theme.lighterBorder};
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 10px;
  `,
  HeaderContainer: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  InfoContainer: styled.View`
    flex: 1;
    margin-left: 15px;
  `,
  Title: styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.theme.text};
  `,
  Date: styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.grayText};
  `,
  Body: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
    margin: 15px 0;
  `,
  FooterArea: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  LikeButton: styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
  `,
  LikeText: styled.Text`
    font-size: 13px;
    color: ${props => props.theme.grayText};
    margin-left: 5px;
  `,
};
