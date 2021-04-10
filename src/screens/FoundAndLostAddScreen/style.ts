import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Title: styled.Text`
    color: ${props => props.theme.text};
  `,
};
