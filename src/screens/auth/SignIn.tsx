// da/``
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
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

const SignIn = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header color={'black'} />
      <ScrollView mx={5}>
        <View mt={12}>
          <Text fontSize={30} color={'white'} fontFamily={'Jost-SemiBold'}>
            Sign In
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Ready to Dive In? Sign In and Let the Magic Begin!
          </Text>
          <TextField label={'Email'} />
          <TextField label={'Password'} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ForgetPassword');
            }}>
            <Text
              fontSize={'16'}
              mr={2}
              textAlign={'right'}
              color={'pro'}
              mt={4}
              fontFamily={'Jost-Medium'}>
              Forget Password?
            </Text>
          </TouchableOpacity>

          <View mt={'40%'}>
            <AButtons
              label={'Sign In'}
              onPress={() => {
                navigation.navigate('Tabs', {screen: 'Home'});
              }}
            />
          </View>
          <Row alignSelf={'center'} my={5} mt={10}>
            <Text
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Regular'}
              textAlign={'center'}>
              Don't have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OnBoarding2');
              }}>
              <Text
                fontSize={16}
                color={'pro'}
                alignSelf={'center'}
                fontFamily={'Jost-Regular'}
                textAlign={'center'}>
                Create Account
              </Text>
            </TouchableOpacity>
          </Row>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
