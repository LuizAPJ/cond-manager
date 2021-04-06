import styled from 'styled-components/native';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Scroller: styled.ScrollView`
    flex: 1;
    padding: 20px;
  `,
  Title: styled.Text`
    font-size: 17px;
    color: ${props => props.theme.text};
    margin: 10px 0;
  `,
  Field: styled.TextInput`
    border-width: 1px;
    border-color: ${props => props.theme.border};
    background-color: ${props => props.theme.lighterBackground};
    border-radius: 5px;
    color: ${props => props.theme.text};
    font-size: 15px;
    padding: 10px;
  `,
  PhotoContainer: styled.View`
    margin-bottom: 30px;
  `,
  PhotoScroll: styled.ScrollView`
    flex: 1;
  `,
  PhotoAddButton: styled.TouchableOpacity`
    width: 65px;
    height: 65px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: ${props => props.theme.border};
    border-radius: 5px;
  `,
  PhotoItem: styled.View`
    width: 65px;
    border-width: 1px;
    border-color: ${props => props.theme.border};
    border-radius: 5px;
    padding-bottom: 5px;
    margin-left: 5px;
    align-items: center;
  `,
  Photo: styled.Image`
    width: 63px;
    height: 63px;
    margin-bottom: 5px;
    border-radius: 5px;
  `,
  PhotoRemoveButton: styled.TouchableOpacity``,
  PhotoRemoveButtom: styled.Text``,
  Button: styled.TouchableOpacity`
    background-color: ${props => props.theme.purple};
    padding: 12px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `,
  ButtonText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
  LoadingText: styled.Text`
    font-size: 15px;
    margin: 10px 0;
  `,
};
