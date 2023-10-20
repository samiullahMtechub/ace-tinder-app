import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';
var {width, height} = Dimensions.get('window');
const AiFeedback = ({navigation}) => {
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
          title={'What are you enjoying about John Doe?'}
          listen={`e.g ‘John Doe seems to have a never-ending fascination with the intricacies of underwater basket weaving and the art of juggling flaming pineapples while riding a unicycle.’`}
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
            label={'Submit'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </ScrollView>
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </ImageBackground>
  );
};

export default AiFeedback;

const styles = StyleSheet.create({
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
