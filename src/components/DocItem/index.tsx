import React, {useCallback} from 'react';
import {Linking, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IDocItem from '../../interfaces/DocITem';

import S from './style';

interface DocItemProps {
  data: IDocItem;
}

const DocItem: React.FC<DocItemProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const handleClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(data.fileurl);

    if (supported) {
      await Linking.openURL(data.fileurl);
    }
  }, [data]);

  return (
    <S.Button onPress={handleClick}>
      <Icon name="file-text" size={30} color={theme.purple} />
      <S.Title>{data.title}</S.Title>
    </S.Button>
  );
};

export default DocItem;
