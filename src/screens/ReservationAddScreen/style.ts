import styled from 'styled-components/native';

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
};
