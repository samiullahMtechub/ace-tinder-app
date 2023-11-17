import {
  VStack,
  Modal,
  Text,
  Button,
  Heading,
  Row,
  View,
  Image,
  Pressable,
} from 'native-base';
import React from 'react';
import AButtons from '../button/AButtons';
import Lottie from 'lottie-react-native';

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
  cancelPress,
  fromChat,
  fromPremium,
}) {
  // const [modalVisible, setModalVisible] = React.useState();
  return (
    <Modal isOpen={modalVisible}>
      <Modal.Content
        w={'80%'}
        borderRadius={20}
        h={btntxt2 ? '40%' : '35%'}
        _light={{bg: 'white'}}
        // alignItems={'flex-start'}
        _dark={{bg: 'black'}}>
        {fromPremium ? (
          <View
            // h={40}
            flex={1}
            // w={40}
            alignItems={'center'}
            alignSelf={'center'}>
            <Lottie
              source={require('../../assets/spinner.json')}
              autoPlay
              loop
              style={{
                // marginBottom: 5,
                height: 150,
                width: 250,
                // backgroundColor: 'black',
              }}></Lottie>
            <Text
              // mt={5}
              // mx={5}
              // w={'100%'}
              textAlign="center"
              color={'pro'}
              fontFamily={'Jost-SemiBold'}
              fontSize={20}>
              {heading}
            </Text>
            <Text
              mt={3}
              fontSize={12}
              // mx={5}
              textAlign={'center'}
              color={'white'}>
              {message}
            </Text>
          </View>
        ) : (
          <>
            {fromChat ? (
              <Image
                mt={3}
                alignSelf={'center'}
                source={require('../../assets/bot.png')}
                size={'sm'}
                alt={'img'}
                resizeMode="contain"
              />
            ) : (
              <Image
                mt={3}
                alignSelf={'center'}
                source={require('../../assets/warning.png')}
                size={'sm'}
                alt={'img'}
                resizeMode="contain"
              />
            )}

            <Text
              mt={5}
              mx={5}
              // w={'100%'}
              textAlign="center"
              color={'black'}
              fontFamily={'Jost-SemiBold'}
              fontSize={20}>
              {heading}
            </Text>

            <Text
              mt={3}
              fontSize={14}
              mx={5}
              textAlign={'center'}
              color={'grey.400'}>
              {message}
            </Text>
            {/* <View w={'60%'} alignSelf={'center'} my={6}>
          <AButtons label={'Ok'} onPress={onPress} />
        </View> */}
            {btntxt2 ? (
              <View
                flexDir={'row'}
                mt={5}
                alignItems={'center'}
                justifyContent={'space-around'}
                mx={5}>
                <Pressable onPress={cancelPress}>
                  <Text color={'black'} fontSize={16}>
                    Cancel
                  </Text>
                </Pressable>
                <View w={'50%'}>
                  <AButtons label={btntxt1} onPress={onPress} />
                </View>
              </View>
            ) : (
              <View w={'60%'} alignSelf={'center'} my={6}>
                <AButtons
                  label={btntxt1 === 'Get Started' ? btntxt1 : 'Ok'}
                  onPress={onPress}
                  fromChat
                />
              </View>
            )}
          </>
        )}

        {/* </View> */}
      </Modal.Content>
    </Modal>
  );
}
