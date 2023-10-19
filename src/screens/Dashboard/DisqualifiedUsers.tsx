import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const DisqualifiedUsers = ({navigation}) => {
  return (
    // <ImageBa>
    //   <Header right />
    //   <OnBoardingComp />
    // </ImageBa>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <Text
          mt={5}
          textAlign={'left'}
          color={'white'}
          fontSize={28}
          fontFamily={'Jost-SemiBold'}>
          Sarah Disqualified You!
        </Text>
        <Text
          mt={5}
          //   mx=}
          textAlign={'left'}
          color={'txtColor'}
          fontSize={15}
          fontFamily={'Jost-Regular'}>
          upon getting to know each other, it became apparent that our
          interests, values, and long-term goals didn't quite align as much as
          we had hoped. In the interest of both of us finding more compatible
          and fulfilling connections, I believe it's important to take this step
          and continue our respective journeys in search of more harmonious
          relationships.
        </Text>
      </ScrollView>

      <View
        position={'absolute'}
        bottom={10}
        w={'80%'}
        alignSelf={'center'}></View>
    </ImageBackground>
  );
};

export default DisqualifiedUsers;

const styles = StyleSheet.create({});
