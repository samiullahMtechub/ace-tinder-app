import {ImageBackground, StyleSheet} from 'react-native';
import {Image, Text, View} from 'native-base';
import React, {useEffect} from 'react';

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
      <Image
        source={require('../../assets/spalsh.png')}
        resizeMode="contain"
        size={'2xl'}
        alt="splash"
      />
    </ImageBackground>
    // </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
