import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, Image, Text, View} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const AButtons = props => {
  return (
    <>
      {props?.label !== 'Get Started' ? (
        <TouchableOpacity
          onPressIn={props?.onPress}
          style={{height: 40}}
          //   activeOpacity={0.7}
          onPress={() => {}}>
          <LinearGradient
            colors={['#C30010', '#F94449']}
            style={{flex: 1, borderRadius: 25, justifyContent: 'center'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Text
              alignSelf={'center'}
              color={'white'}
              fontSize={18}
              fontFamily={'Jost-Medium'}>
              {props?.label}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{height: 50}}
          onPressIn={props?.onPress}
          //   activeOpacity={0.7}
          onPress={() => {}}>
          <LinearGradient
            colors={['#C30010', '#F94449']}
            style={{
              flex: 1,
              borderRadius: 25,
              justifyContent: 'center',
              padding: 8,
            }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <View
              flexDir={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <View bg={'white'} rounded={'full'} p={1}>
                <Image
                  source={require('../../assets/heart.png')}
                  alt={'img'}
                  h={6}
                  w={6}
                  resizeMode="contain"
                />
              </View>
              <Text
                alignSelf={'center'}
                color={'white'}
                fontSize={18}
                fontFamily={'Jost-Medium'}>
                {props?.label}
              </Text>
              <Text color={'transparent'}>hhhhh</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    </>
  );
};

export default AButtons;

const styles = StyleSheet.create({});
