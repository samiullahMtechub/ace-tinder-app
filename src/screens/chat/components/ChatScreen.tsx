import {View, Image, Text, Pressable, Row, Avatar, Input} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ChatScreen = props => {
  const navigation = useNavigation();
  return (
    <>
      <Row justifyContent={'space-between'} alignItems={'center'}>
        <Row alignItems={'center'}>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name={'chevron-left'} size={30} color={'white'} />
          </Pressable>
          <Avatar source={require('../../../assets/home1.png')} h={10} w={10} />
          <View ml={3}>
            <Text color={'white'} fontSize={16} fontFamily={'Jost-SemiBold'}>
              Sahara Ardia
            </Text>
            <Text color={'txtColor'} fontSize={12} fontFamily={'Jost-Regular'}>
              Online
            </Text>
          </View>
        </Row>
        <Row alignItems={'center'}>
          <Image
            h={4}
            w={4}
            resizeMode={'contain'}
            alt={'audio'}
            mr={5}
            source={require('../../../assets/call.png')}
          />
          <Image
            h={7}
            w={8}
            resizeMode={'contain'}
            alt={'audio'}
            source={require('../../../assets/video.png')}
          />
        </Row>
      </Row>
    </>
  );
};
export default ChatScreen;
