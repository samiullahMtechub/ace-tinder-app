// da/``
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Box,
  Center,
  Circle,
  Image,
  Row,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';

const ForgetPassword = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <View mt={100}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Forget Password
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Lost Your Way? Let's Get You Back In!
          </Text>
          <TextField label={'Email Address'} />

          <View mt={'50%'}>
            <AButtons
              label={'Send Code'}
              onPress={() => navigation.navigate('Verification')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
