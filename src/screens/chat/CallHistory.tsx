import {
  View,
  Text,
  Image,
  Row,
  Pressable,
  ScrollView,
  Avatar,
} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import {ImageBackground} from 'react-native';

const CallHistory = ({navigation}) => {
  const data = [
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia',
      callType: 'Voice call',
      duration: '00:30:42',
    },
  ];
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Header title={'Call History'} />
      <View m={5}>
        <ScrollView>
          {data?.map(item => {
            return (
              <View
                borderColor={'white'}
                borderWidth={0.5}
                borderRadius={10}
                p={2}
                my={2}>
                <Row
                  alignItems={'center'}
                  justifyContent={'space-between'}
                  mx={2}>
                  <Row alignItems={'center'}>
                    <Avatar source={item?.img} size={'sm'} />
                    <View ml={2}>
                      <Text
                        color={'white'}
                        fontSize={16}
                        fontFamily={'Jost-SemiBold'}>
                        {item?.name}
                      </Text>
                      <Text
                        color={'txtColor'}
                        fontSize={10}
                        fontFamily={'Jost-SemiBold'}>
                        {item?.callType} {item?.duration}
                      </Text>
                    </View>
                  </Row>
                  <Row alignItems={'center'}>
                    <Pressable onPress={() => navigation.navigate('AudioCall')}>
                      <Image
                        h={4}
                        w={4}
                        resizeMode={'contain'}
                        alt={'audio'}
                        mr={5}
                        source={require('../../assets/call.png')}
                      />
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('VideoCall')}>
                      <Image
                        h={6}
                        w={6}
                        resizeMode={'contain'}
                        alt={'audio'}
                        source={require('../../assets/video.png')}
                      />
                    </Pressable>
                  </Row>
                </Row>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default CallHistory;
