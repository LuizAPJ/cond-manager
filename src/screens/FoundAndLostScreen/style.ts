import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  AddButton: styled.TouchableOpacity`
    margin-right: 15px;
  `,
  Title: styled.Text``,
};
