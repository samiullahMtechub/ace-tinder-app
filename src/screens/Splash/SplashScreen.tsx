import {ImageBackground, StyleSheet} from 'react-native';
import {Image, Row, Text, View} from 'native-base';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 2000);
  });
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      resizeMode="cover">
      <View mb={'30%'} alignItems={'center'}>
        <Image
          source={require('../../assets/onboardlogo.png')}
          resizeMode="contain"
          size={'xl'}
          alt="splash"
        />
        <Row>
          <Text fontSize={50} color={'white'} fontFamily={'Diagramm-Regular'}>
            fate
          </Text>
          <Text fontSize={50} color={'primary.400'} fontFamily={'Jost-Medium'}>
            .
          </Text>
        </Row>
      </View>
      <View
        mb={'30%'}
        // mt={''}
        bg={'white'}
        p={5}
        w={'100%'}
        alignItems={'center'}
        justifyContent={'center'}>
        <Text fontSize={20} color={'black'} fontFamily={'Jost-Regular'}>
          Stop Swiping, Start Typing
        </Text>
      </View>
    </ImageBackground>
    // </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
