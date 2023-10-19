import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';

const AiFeedback = ({navigation}) => {
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
          title={'What are you enjoying about John Doe?'}
          listen={`e.g ‘John Doe seems to have a never-ending fascination with the intricacies of underwater basket weaving and the art of juggling flaming pineapples while riding a unicycle.’`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
        />
        <View mt={20} mb={5}>
          <AButtons
            label={'Submit'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AiFeedback;

const styles = StyleSheet.create({});