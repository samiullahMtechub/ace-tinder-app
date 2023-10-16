import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const OnBoarding3 = ({navigation}) => {
  const [pressed, setPressed] = React.useState(false);
  return (
    // <ImageBa>
    //   <Header right />
    //   <OnBoardingComp />
    // </ImageBa>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header right />
      <ScrollView mx={5} mt={5}>
        <OnBoardingComp
          title={'How long have you been single / Alvailable?'}
          listen={`I've been single/AIvailable for approximately 2,347,892,107 nanoseconds, but who's counting?`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
        />
        <View mt={20} mb={5}>
          <AButtons
            label={'Next'}
            onPress={() => {
              navigation.navigate('OnBoarding4');
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({});
