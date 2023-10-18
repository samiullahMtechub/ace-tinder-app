import {
  View,
  Text,
  Pressable,
  Row,
  ScrollView,
  Image,
  Avatar,
} from 'native-base';
import {ImageBackground} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import React from 'react';
import AButtons from '../../components/button/AButtons';

const OtherUser = ({navigation}) => {
  const [active, setActive] = React.useState(false);
  return (
    <ImageBackground
      source={
        active === false
          ? require('../../assets/other1.png')
          : require('../../assets/other2.png')
      }
      style={{flex: 1}}>
      <Pressable mt={5} flex={1} mx={5} onPress={() => setActive(!active)}>
        <View flex={1}>
          <View flexDir={'row'} alignItems={'center'}>
            <Pressable onPress={() => navigation.goBack()}>
              <Entypo name={'chevron-left'} size={30} color={'white'} />
            </Pressable>
            <Row justifyContent={'space-between'}>
              <View
                h={1}
                w={9}
                borderRadius={10}
                bg={active === true ? 'txtColor' : 'pro'}
                ml={2}></View>
              <View
                h={1}
                w={9}
                borderRadius={10}
                bg={active === false ? 'txtColor' : 'pro'}
                ml={2}></View>
              <View h={1} w={9} borderRadius={10} bg={'txtColor'} ml={2}></View>
              <View h={1} w={9} borderRadius={10} bg={'txtColor'} ml={2}></View>
              <View h={1} w={9} borderRadius={10} bg={'txtColor'} ml={2}></View>
              <View h={1} w={9} borderRadius={10} bg={'txtColor'} ml={2}></View>
            </Row>
          </View>
          <View position={'absolute'} bottom={20}>
            <Row>
              <Avatar
                source={require('../../assets/home1.png')}
                size={'md'}
                borderColor={'pro'}
                borderWidth={1}
                mb={2}
              />
              <Pressable onPress={() => navigation.navigate('Report')}>
                <View
                  bg={'#F9444933'}
                  h={10}
                  w={16}
                  rounded={'full'}
                  ml={3}
                  alignItems={'center'}
                  justifyContent={'center'}>
                  <Text color={'pro'} fontSize={14} fontFamily={'Jost-Medium'}>
                    Report
                  </Text>
                </View>
              </Pressable>
            </Row>
            <Text fontSize={18} fontFamily={'Jost-SemiBold'} color={'white'}>
              Jenny Wilson, 22
            </Text>
            <Text
              // position={'absolute'}
              // bottom={20}
              fontSize={14}
              fontFamily={'Jost-Regular'}
              color={'white'}>
              Santorini, a picturesque island in the southern Aegean Sea
            </Text>
          </View>

          <Row position={'absolute'} bottom={0} left={0} alignItems={'center'}>
            <View w={'80%'}>
              <View position={'absolute'} zIndex={5}>
                <Image
                  source={require('../../assets/unSelectedChat.png')}
                  h={5}
                  w={5}
                  alt={'chat'}
                  resizeMode={'contain'}
                  alignSelf={'center'}
                  left={30}
                  top={3}
                />
              </View>
              <AButtons
                label={'Start Conversation'}
                onPress={() => navigation.navigate('Chatting')}
              />
            </View>
            <Pressable onPress={() => navigation.navigate('Games')}>
              <Image
                source={require('../../assets/games.png')}
                h={20}
                w={20}
                alt={'img'}
              />
            </Pressable>
          </Row>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

export default OtherUser;
