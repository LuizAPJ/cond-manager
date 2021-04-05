import React, {useCallback} from 'react';
import {Linking, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import themes from '../../themes';
import IWarningItem from '../../interfaces/WarningItem';

import S from './style';

interface WarningItemProps {
  data: IWarningItem;
}

const WarningItem: React.FC<WarningItemProps> = ({data}) => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;

  const handleClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(data.photos[1]);

    if (supported) {
      await Linking.openURL(data.photos[1]);
    }
  }, [data]);

  return (
    <S.Button onPress={handleClick}>
      <Icon name="file-text" size={30} color={theme.purple} />
      <S.Title>{data.title}</S.Title>
    </S.Button>
  );
};

export default WarningItem;
