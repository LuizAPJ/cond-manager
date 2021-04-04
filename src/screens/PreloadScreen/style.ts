import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
    justify-content: center;
    align-items: center;
  `,
  LoadingIcon: styled.ActivityIndicator``,
};
