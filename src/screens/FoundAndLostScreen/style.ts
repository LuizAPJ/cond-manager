import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Scroller: styled.ScrollView`
    flex: 1;
  `,
  LoadingIcon: styled.ActivityIndicator``,
  NoListContainer: styled.View`
    justify-content: center;
    align-items: center;
    padding: 30px;
  `,
  NoListText: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
  `,
  Title: styled.Text`
    font-size: 17px;
    color: ${props => props.theme.text};
    margin: 10px 20px;
  `,
  ProductScroller: styled.ScrollView`
    width: 100%;
    padding-left: 20px;
    margin-bottom: 20px;
  `,
  AddButton: styled.TouchableOpacity`
    margin-right: 15px;
  `,
};
