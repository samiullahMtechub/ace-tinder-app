// da/``
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Box,
  Center,
  Circle,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';

const AddLocation = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <View mt={8}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Your Location
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            We will need your location to give you better experience
          </Text>
          <Image
            mt={10}
            alignSelf={'center'}
            source={require('../../assets/location.png')}
            size={'xl'}
            resizeMode="contain"
            alt={'img'}
          />

          <View mt={'40%'}>
            <AButtons
              label={'Use my Current Location'}
              onPress={() => navigation.navigate('PreviewProfile')}
            />
            <Pressable onPress={() => navigation.navigate('PreviewProfile')}>
              <Text
                my={5}
                color={'white'}
                fontSize={16}
                fontFamily={'Jost-Medium'}
                textAlign={'center'}>
                Maybe Later
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddLocation;

const styles = StyleSheet.create({});
