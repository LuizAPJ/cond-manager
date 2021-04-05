import styled from 'styled-components/native';

export default {
  Container: styled.TouchableOpacity`
    background-color: ${props => props.theme.lighterBackground};
    border-width: 2px;
    border-color: ${props => props.theme.purple};
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 10px;
  `,
  Date: styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: ${props => props.theme.grayText};
    margin-bottom: 10px;
  `,
  Title: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.text};
  `,
  StatusContainer: styled.View`
    flex-direction: row;
    align-items: center;
    margin: 10px 0;
  `,
  StatusText: styled.Text`
    font-size: 14px;
    color: ${props => props.theme.grayText};
    margin-left: 10px;
  `,
  PhotosContainer: styled.View`
    flex-direction: row;
  `,
  PhotoButton: styled.TouchableOpacity`
    margin-right: 10px;
  `,
  PhotoImage: styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 10px;
  `,
  ModalContainer: styled.View`
    flex: 1;
    background-color: ${props => props.theme.black};
  `,
  ModalImage: styled.Image`
    flex: 1;
  `,
  ModalCloseButton: styled.TouchableOpacity`
    align-self: flex-end;
    margin: 10px;
  `,
};
