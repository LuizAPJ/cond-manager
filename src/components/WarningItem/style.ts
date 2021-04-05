import styled from 'styled-components/native';

export default {
  Button: styled.TouchableOpacity`
    background-color: ${props => props.theme.lighterBackground};
    border-width: 2px;
    border-color: ${props => props.theme.purple};
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
  `,
  Title: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
    margin-left: 10px;
  `,
};
