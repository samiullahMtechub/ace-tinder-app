import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';
import {BlurView} from '@react-native-community/blur';
var {width, height} = Dimensions.get('window');
const OnBoarding3 = ({navigation}) => {
  const [pressed, setPressed] = React.useState(false);
  const [layer, setLayer] = React.useState(false);
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
          title={'How long have you been single / Available?'}
          listen={`I've been single/Available for approximately 2,347,892,107 nanoseconds, but who's counting?`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
          close={() => {
            setLayer(false);
          }}
          open={() => {
            setLayer(true);
          }}
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
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}

      {/* <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={10}
        reducedTransparencyFallbackColor="black"
      /> */}
    </ImageBackground>
  );
};

export default OnBoarding3;

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    flex: 1,
    top: -100,
    left: -200,
    bottom: -20,
    right: -20,
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: width,
  },
});
