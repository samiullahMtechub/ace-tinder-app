import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const Instructions = ({navigation, route}) => {
  const fromAi = route?.params;
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
      <Header />
      <ScrollView mx={5} mt={5}>
        <Text
          mt={5}
          textAlign={'center'}
          color={'white'}
          fontSize={28}
          fontFamily={'Jost-SemiBold'}>
          Instructions for you
        </Text>
        <Text
          mt={5}
          //   mx=}
          textAlign={'center'}
          color={'txtColor'}
          fontSize={15}
          fontFamily={'Jost-Regular'}>
          In order to ensure that your speech is clear and audible for AI
          systems, it's important to create an environment conducive to
          effective communication. Begin by finding a quiet and relatively
          noise-free space where you can comfortably converse with the AI.
        </Text>
      </ScrollView>

      <View position={'absolute'} bottom={10} w={'80%'} alignSelf={'center'}>
        <AButtons
          label={'Ok, i got it'}
          onPress={() => {
            if (fromAi) {
              navigation.navigate('AiTip');
            } else {
              navigation.goBack();
            }
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Instructions;

const styles = StyleSheet.create({});
