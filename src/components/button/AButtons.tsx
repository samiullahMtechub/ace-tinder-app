import {StyleSheet, TouchableOpacity} from 'react-native';
import {Button, FavouriteIcon, Image, Text, View} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const AButtons = props => {
  return (
    <>
      {props?.label !== 'Get Started' || props?.fromChat ? (
        <TouchableOpacity
          onPressIn={props?.onPress}
          style={{height: 40}}
          //   activeOpacity={0.7}
          onPress={() => {}}>
          <LinearGradient
            colors={['#AC0077', '#AC0077']}
            style={{flex: 1, justifyContent: 'center', borderRadius: 25}}
            start={{x: 0, y: 0.9}}
            end={{x: 0.8, y: 0}}>
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
            colors={['#A90074', '#A90074']}
            style={{
              flex: 1,
              justifyContent: 'center',
              borderRadius: 25,
              padding: 5,
            }}
            start={{x: 0, y: 0.9}}
            end={{x: 0.8, y: 0}}>
            <View
              flexDir={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}>
              <View
                bg={'primary.400'}
                rounded={'full'}
                p={2}
                ml={1}
                alignItems={'center'}
                justifyContent={'center'}>
                <FavouriteIcon color={'white'} h={6} w={6} />
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
