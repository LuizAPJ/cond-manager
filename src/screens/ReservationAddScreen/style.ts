import styled from 'styled-components/native';

interface TimeItemProps {
  active: boolean;
}

export default {
  Container: styled.SafeAreaView`
    flex: 1;
    background-color: ${props => props.theme.background};
  `,
  Scroller: styled.ScrollView.attrs({
    contentContainerStyle: {
      paddingBottom: 40,
    },
  })`
    flex: 1px;
  `,
  CoverImage: styled.Image`
    height: 150px;
  `,
  LoadingIcon: styled.ActivityIndicator`
    margin-top: 20px;
  `,
  CalendarContainer: styled.View`
    margin: 20px;
  `,
  Title: styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${props => props.theme.text};
    margin: 10px 20px;
  `,
  NoSchedules: styled.Text`
    font-size: 15px;
    color: ${props => props.theme.grayText};
    margin: 10px 20px;
  `,
  TimeList: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 30px;
  `,
  TimeItem: styled.TouchableOpacity<TimeItemProps>`
    border-width: 1px;
    border-color: ${props => props.theme.border};
    border-radius: 5px;
    margin: 5px 20px;
    background-color: ${props =>
      props.active ? props.theme.purple : 'transparent'};
    padding: 10px;
  `,
  TimeItemText: styled.Text<TimeItemProps>`
    font-size: 14px;
    color: ${props =>
      props.active ? props.theme.buttonText : props.theme.text};
  `,
  SaveButton: styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.purple};
    padding: 15px;
  `,
  SaveButtonText: styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: ${props => props.theme.buttonText};
  `,
};
