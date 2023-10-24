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
  Progress,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import Header from '../../components/Header/Header';
import CircularProgress from 'react-native-circular-progress-indicator';

const ProfileProcessing = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bgContinue.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <View
        mx={5}
        mt={5}
        alignItems={'center'}
        justifyContent={'center'}
        flex={1}>
        <Text
          color={'white'}
          textAlign={'center'}
          fontSize={22}
          fontFamily={'Jost-SemiBold'}>
          Pairing you with someone compatible
        </Text>
        <CircularProgress
          value={100}
          inActiveStrokeColor={'#F94449'}
          inActiveStrokeOpacity={0.2}
          activeStrokeColor="white"
          progressValueColor={'#fff'}
          valueSuffix={'%'}
          onAnimationComplete={() => {
            navigation.navigate('Tabs', {screen: 'Home'});
          }}
        />
        <Text
          fontSize={16}
          fontFamily={'Jost-Regular'}
          color={'white'}
          textAlign={'center'}>
          Building a profile that showcases your personality and interests.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default ProfileProcessing;

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: 'blue', // Change the color to your desired color
  },
  progressText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'black', // Change the color to your desired color
  },
});
