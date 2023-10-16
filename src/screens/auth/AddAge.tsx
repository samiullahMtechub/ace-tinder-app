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

const AddAge = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <View mt={12}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Your Age
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Your age will be visible to other users
          </Text>
          <TextField label={'Age'} />

          <View mt={'65%'}>
            <AButtons
              label={'Next'}
              onPress={() => navigation.navigate('Verification')}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddAge;

const styles = StyleSheet.create({});
