import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const OnBoarding7 = ({navigation}) => {
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
          title={'What AIre your hobbies?'}
          listen={`I'm hoping to find someone who makes my heart skip a beat, shares my interests and brings joy into my life every day`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
        />
        <View mt={20} mb={5}>
          <AButtons
            label={'Next'}
            onPress={() => {
              navigation.navigate('AddName');
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnBoarding7;

const styles = StyleSheet.create({});
