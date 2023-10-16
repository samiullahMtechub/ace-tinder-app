// da/``
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Box,
  Center,
  Circle,
  Image,
  Row,
  ScrollView,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      img: require('../../assets/Aspades.png'),
      name: 'Isabell',
      status: 'offline',
    },
    {
      id: 2,
      img: require('../../assets/kingbg.png'),
      name: 'Robert',
      status: 'offline',
    },

    {
      id: 3,
      img: require('../../assets/heartcard10.png'),
      name: 'Olivia',
      status: 'Offline',
    },

    {
      id: 4,
      img: require('../../assets/clubcard9.png'),
      name: 'Isabell',
      status: 'Offline',
    },

    {
      id: 5,
      img: require('../../assets/8bgclub.png'),
      name: 'Emily',
      status: 'Offline',
    },

    {
      id: 6,
      img: require('../../assets/jokerbg.png'),
      name: 'William',
      status: 'online',
    },
  ];
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <ScrollView mx={5} mt={5}>
        <Image
          alignSelf="center"
          source={require('../../assets/spalsh.png')}
          resizeMode="contain"
          size={'lg'}
          alt="splash"
        />
        <Text
          color={'white'}
          fontSize={18}
          fontFamily={'Jost-Medium'}
          textAlign={'center'}
          mt={3}>
          I'm AIce, nice to meet you
        </Text>
        <Row mt={5} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={22} fontFamily={'Jost-SemiBold'} color={'pro'}>
            Connections
          </Text>
          <Row>
            <Ionicons name={'search-outline'} size={20} color={'#F94449'} />
            <Stack>
              <Image
                ml={3}
                alignSelf="center"
                source={require('../../assets/bell.png')}
                resizeMode="contain"
                h={5}
                w={5}
                alt="splash"
              />
              <View
                bg={'white'}
                h={2}
                w={2}
                rounded={'full'}
                position={'absolute'}
                right={0}></View>
            </Stack>
          </Row>
        </Row>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
