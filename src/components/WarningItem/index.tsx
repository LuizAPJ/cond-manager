import React, {useCallback, useState} from 'react';
import {useColorScheme, Modal} from 'react-native';
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

  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = useCallback(img => {
    setModalImage(img);
    setShowModal(true);
  }, []);

  return (
    <S.Container>
      <S.Date>{data.datecreated}</S.Date>
      <S.Title>{data.title}</S.Title>

      <S.StatusContainer>
        <Icon name="inbox" size={24} color={theme.purple} />
        <S.StatusText>
          {data.status === 'RESOLVED' ? 'Resolvido' : 'Ocorrência em análise'}
        </S.StatusText>
      </S.StatusContainer>

      {data.photos.length > 0 && (
        <S.PhotosContainer>
          {data.photos.map((item, index) => (
            <S.PhotoButton key={index} onPress={() => openModal(item)}>
              <S.PhotoImage source={{uri: item}} resizeMode="cover" />
            </S.PhotoButton>
          ))}
        </S.PhotosContainer>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}>
        <S.ModalContainer>
          <S.ModalCloseButton onPress={() => setShowModal(false)}>
            <Icon name="close" size={24} color={theme.ice} />
          </S.ModalCloseButton>

          <S.ModalImage source={{uri: modalImage}} resizeMode="contain" />
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
};

export default WarningItem;
