import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  LoadingIcon: styled.ActivityIndicator``,
  NoListContainer: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 30px;
  `,
  NoListText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.text};
  `,
};
