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
import {Formik} from 'formik';
import * as Yup from 'yup';
const ForgetPassword = ({navigation}) => {
  const formSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });
  const handleCreate = em => {
    navigation.navigate('Verification');
  };
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <View mt={16}>
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
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={formSchema}
            onSubmit={values => handleCreate(values.email)}>
            {({
              values,
              handleChange,

              handleSubmit,

              errors,
            }) => (
              <>
                <TextField
                  label={'Email Address'}
                  value={values.email}
                  onChangeText={handleChange('email')}
                />
                {errors.email && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} ml={1}>
                    <View
                      bg={'red.500'}
                      h={1}
                      w={1}
                      rounded={'full'}
                      mr={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.email}
                    </Text>
                  </View>
                )}
                <View mt={'50%'}>
                  <AButtons label={'Send Code'} onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
