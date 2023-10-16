import {
  VStack,
  Modal,
  Text,
  Button,
  Heading,
  Row,
  View,
  Image,
} from 'native-base';
import React from 'react';
import AButtons from '../button/AButtons';

export default function ({
  modalVisible,
  setModalVisible,
  heading,
  message,
  btntxt1,
  btntxt2,
  children,
  onPress,
  fromSettings,
}) {
  // const [modalVisible, setModalVisible] = React.useState();
  return (
    <Modal isOpen={modalVisible}>
      <Modal.Content
        w={'80%'}
        h={'35%'}
        _light={{bg: 'black'}}
        // alignItems={'flex-start'}
        _dark={{bg: 'black'}}>
        <Image
          mt={3}
          alignSelf={'center'}
          source={require('../../assets/warning.png')}
          size={'xs'}
          alt={'img'}
          resizeMode="contain"
        />
        <Text
          mt={5}
          mx={5}
          // w={'100%'}
          textAlign="center"
          color={'pro'}
          fontFamily={'Jost-SemiBold'}
          fontSize={20}>
          {heading}
        </Text>

        <Text mt={4} fontSize={14} mx={5} textAlign={'center'} color={'white'}>
          {message}
        </Text>
        <View w={'60%'} alignSelf={'center'} my={8}>
          <AButtons label={'Ok'} onPress={onPress} />
        </View>
        {/* </View> */}
      </Modal.Content>
    </Modal>
  );
}
