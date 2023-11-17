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

const AddName = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5} flex={1}>
        <View mt={12} flex={1}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Your Full Name
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Yes, that should be your real name
          </Text>
          <TextField label={'Full Name'} />
        </View>
        <View mt={'94%'}>
          <AButtons
            label={'Next'}
            onPress={() => navigation.navigate('AddAge')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddName;

const styles = StyleSheet.create({});
