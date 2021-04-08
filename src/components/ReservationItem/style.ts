import styled from 'styled-components/native';

export default {
  Container: styled.TouchableOpacity`
    background-color: ${props => props.theme.lighterBackground};
    border-width: 2px;
    border-color: ${props => props.theme.lighterBorder};
    border-radius: 15px;
    margin-bottom: 15px;
    padding-bottom: 10px;
  `,
  CoverImage: styled.Image`
    background-color: ${props => props.theme.background};
    height: 150px;
    border-radius: 15px;
  `,
  Title: styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.text};
    margin: 10px;
  `,
  DateText: styled.Text`
    font-size: 13px;
    font-weight: bold;
    color: ${props => props.theme.grayText};
    margin: 0 10px;
    text-transform: uppercase;
  `,
  DateItem: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
    margin: 0 10px;
  `,
};
