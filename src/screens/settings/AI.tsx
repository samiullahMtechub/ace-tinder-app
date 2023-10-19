import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View, Pressable, Image} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const AI = ({navigation}) => {
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
      <Header right fromAi />
      <ScrollView mx={5} mt={5}>
        <OnBoardingComp
          fromSettings
          title={`Hi, I'm here your dating coach. How can i assist you?`}
          listen={`e.g ‘Could you please provide a guide on effective dating tip?’`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default AI;

const styles = StyleSheet.create({});
