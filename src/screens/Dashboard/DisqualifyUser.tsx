import {StyleSheet, ImageBackground} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';
import AlertModal from '../../components/Modal/AlertModal';

const DisqualifyUser = ({navigation}) => {
  const [pressed, setPressed] = React.useState(false);
  const [active, setActive] = React.useState(false);
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
          title={`I'm now able to disqualify a user but You should tell AI why?`}
          listen={`e.g ‘Our interests and values didn't quite align, and I believe it's important to find a better match for both of us.’`}
          onPress={() => setPressed(!pressed)}
          pressed={pressed}
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
          heading={'Disqualify'}
          message={'Next match will appeaar in 24 hours'}
          onPress={() => {
            navigation.goBack();
          }}></AlertModal>
      </ScrollView>
    </ImageBackground>
  );
};

export default DisqualifyUser;

const styles = StyleSheet.create({});
