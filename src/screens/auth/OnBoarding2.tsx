// da/``
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Box,
  Center,
  Circle,
  Image,
  Row,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import Header from '../../components/Header/Header';

const OnBoarding2 = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bgContinue.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <View mx={5} mt={5}>
        <Row
          justifyContent={'space-between'}
          alignItems={'center'}
          mx={-10}
          mt={16}>
          <Stack alignSelf={'flex-start'}>
            <Avatar
              source={require('../../assets/onBoarding1.png')}
              h={20}
              w={20}
              borderColor={'#F944494D'}
              borderWidth={4}
            />
            <View
              bg={'white'}
              rounded={'full'}
              p={1}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              bottom={5}
              right={-8}>
              <Image
                source={require('../../assets/heart.png')}
                alt={'img'}
                h={5}
                w={5}
                resizeMode="contain"
              />
            </View>
          </Stack>
          <Stack>
            <Avatar
              source={require('../../assets/onBoarding2.png')}
              size={'xl'}
              borderColor={'#F944494D'}
              borderWidth={4}
            />
            <View
              bg={'white'}
              rounded={'full'}
              p={1}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              top={1}
              left={0}>
              <Image
                source={require('../../assets/heart.png')}
                alt={'img'}
                h={5}
                w={5}
                resizeMode="contain"
              />
            </View>
          </Stack>
        </Row>
        <View>
          <Text
            mt={5}
            color={'white'}
            textAlign={'center'}
            fontSize={26}
            fontFamily={'Jost-SemiBold'}>
            We'd love to get to know you better
          </Text>
          <Text
            color={'white'}
            fontSize={16}
            mt={5}
            textAlign={'center'}
            fontFamily={'Jost-Regular'}>
            Your information will helps us match you with like-minded
            individuals and create meaningful connections.
          </Text>
        </View>
        <Row mx={-10} justifyContent={'space-between'} my={10}>
          <Stack alignSelf={'flex-end'}>
            <Avatar
              source={require('../../assets/onBoarding3.png')}
              h={20}
              w={20}
              reseizeMode={'contain'}
              borderColor={'#F944494D'}
              borderWidth={4}
            />

            <View
              bg={'white'}
              rounded={'full'}
              p={1}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              bottom={2}
              right={0}>
              <Image
                source={require('../../assets/heart.png')}
                alt={'img'}
                h={5}
                w={5}
                resizeMode="contain"
              />
            </View>
          </Stack>
          <Stack>
            <Avatar
              source={require('../../assets/onBoarding4.png')}
              size={'xl'}
              borderColor={'#F944494D'}
              borderWidth={4}
            />
            <View
              bg={'white'}
              rounded={'full'}
              p={1}
              position={'absolute'}
              alignItems={'center'}
              justifyContent={'center'}
              bottom={3}
              left={0}>
              <Image
                source={require('../../assets/heart.png')}
                alt={'img'}
                h={5}
                w={5}
                resizeMode="contain"
              />
            </View>
          </Stack>
        </Row>
        <AButtons
          label={'Continue'}
          onPress={() => navigation.navigate('OnBoarding3')}
        />
      </View>
    </ImageBackground>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({});
