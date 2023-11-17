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
import * as Yup from 'yup';
import {Formik} from 'formik';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';

const SignIn = ({navigation}) => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required(`Password is required`),
  });
  const handleCreate = () => {
    navigation.navigate('Tabs', {screen: 'Home'});
  };
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
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={formSchema}
            onSubmit={values =>
              handleCreate(values.email, values.password, values.name)
            }>
            {({
              values,
              handleChange,

              handleSubmit,

              errors,
            }) => (
              <>
                <TextField
                  label={'Email'}
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                {errors.email && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} ml={2}>
                    <View
                      bg={'red.500'}
                      h={1}
                      w={1}
                      rounded={'full'}
                      mx={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.email}
                    </Text>
                  </View>
                )}
                <TextField
                  label={'Password'}
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                {errors.password && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} ml={1}>
                    <View
                      bg={'red.500'}
                      h={1}
                      w={1}
                      rounded={'full'}
                      mx={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.password}
                    </Text>
                  </View>
                )}
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
                  <AButtons label={'Sign In'} onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
          <Row alignSelf={'center'} my={5} mt={10}>
            <Text
              fontSize={16}
              color={'black'}
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
                underline
                fontFamily={'Jost-SemiBold'}
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
