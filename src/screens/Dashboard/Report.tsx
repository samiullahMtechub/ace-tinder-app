import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
import {ScrollView, Text, View} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import OnBoardingComp from '../../components/OnBoardingComp/OnBoardingComp';
import AButtons from '../../components/button/AButtons';
import AlertModal from '../../components/Modal/AlertModal';
import CustomSnackbar from '../../components/customSnackBar/CustomSnackBar';
var {width, height} = Dimensions.get('window');

const ReportUser = ({navigation}) => {
  const [pressed, setPressed] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [layer, setLayer] = React.useState(false);
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header right />
      <CustomSnackbar
        message={'Success'}
        visible={active}
        height={'8%'}
        onDismiss={() => {
          setActive(false);
          navigation.navigate('Tabs', {screen: 'Home'});
        }}
        messageDescription={'Report reason submitted successfully'}
      />
      <ScrollView mx={5} mt={5}>
        <OnBoardingComp
          title={`Tell AI the reason why are you reporting John Doe?`}
          listen={`I'm reporting John Doe because I have observed behavior that appears to violate our community guidelines and terms of service..’`}
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
      </ScrollView>
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </ImageBackground>
  );
};

export default ReportUser;

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
