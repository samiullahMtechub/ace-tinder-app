import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';
import AlertModal from '../../components/Modal/AlertModal';
var {width, height} = Dimensions.get('window');
const DisqualifyUser = ({navigation}) => {
  const [pressed, setPressed] = React.useState(false);
  const [active, setActive] = React.useState(false);
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
          title={`Tell Aice why you would like to disqualify this user?`}
          listen={`Our interests and values didn't quite align, and I believe it's important to find a better match for both of us.’`}
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
              setActive(true);
            }}
          />
        </View>
        <AlertModal
          modalVisible={active}
          heading={'Disqualified'}
          message={'Next match will appeaar in 24 hours'}
          onPress={() => {
            navigation.goBack();
          }}></AlertModal>
      </ScrollView>
      {layer === true || active === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </ImageBackground>
  );
};

export default DisqualifyUser;

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
