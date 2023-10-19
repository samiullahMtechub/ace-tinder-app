import {View, Text, Row, Image, Pressable, TextArea} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../bottomSheet/BottomSheet';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const OnBoardingComp = props => {
  const bottomSheetRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [assist, setAssist] = React.useState(false);
  const navigation = useNavigation();
  const openBottomSheet = (id: string) => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
      setTimeout(() => {
        setActive(true);
      }, 1000);
    }
    //  (bottomSheetRef.current) {
    //     bottomSheetRef.current.close()
    // console.error(id);
    //   setPostId(id);
  };
  return (
    <>
      <Row>
        <Text
          fontSize={28}
          w={'78%'}
          color={'white'}
          fontFamily={'Jost-SemiBold'}
          textAlign={'left'}>
          {props?.fromSettings && assist === true
            ? `Tell Ai if you need furtherAssistance`
            : props?.title}
        </Text>
        <Pressable onPress={props?.onPress}>
          {props?.pressed === true ? (
            <Image
              mt={3}
              ml={10}
              alignSelf={'flex-start'}
              source={require('../../assets/sound-wave.png')}
              alt={'img'}
              h={6}
              w={6}
              resizeMode="contain"
            />
          ) : null}
          {props?.pressed === false ? (
            <Image
              mt={3}
              ml={10}
              alignSelf={'flex-start'}
              source={require('../../assets/volume.png')}
              alt={'img'}
              h={6}
              w={6}
              resizeMode="contain"
            />
          ) : null}
        </Pressable>
      </Row>
      <TextArea
        placeholder={props?.title}
        value={
          props?.fromSettings && assist === true
            ? `Dating can be an exciting and fulfilling experience when approached with the right mindset and strategies. This guide will provide you with practical tips and advice to help you navigate the world of dating effectively. Whether you're just starting out or looking to enhance your dating experiences, these principles can help you build healthy and meaningful connections.
Set Clear Intentions:
Know what you're looking for in a relationship.
Define your goals and expectations before you start dating.
Self-Reflection:
Understand your own values, needs, and desires.
Reflect on past relationships and what you've learned from them.
Effective Communication:
Hone your communication skills.
Listen actively and express your thoughts and feelings honestly.
Building Confidence:
Work on self-confidence and self-esteem.
Embrace self-improvement and self-care.
Choosing the Right Partner:
Identify compatible qualities and values.
Don't settle for someone who doesn't meet your essential criteria.
Online Dating Tips:
Create a genuine and appealing online dating profile.
Stay safe while dating online by following best practices`
            : null
        }
        mt={10}
        bg={'grey.500'}
        placeholderTextColor={'txtColor'}
        p={4}
        h={props?.fromSettings && assist === true ? 'full' : 40}
        color={'txtColor'}
        borderWidth={0}
        fontSize={14}
        borderRadius={20}
        _focus={{borderColor: 'secondary', borderWidth: 1}}
      />
      {props?.fromSettings && assist === true ? null : (
        <>
          <Pressable
            onPress={openBottomSheet}
            alignSelf={'center'}
            mt={props?.fromSettings ? '40%' : 0}>
            <Image
              mt={10}
              source={require('../../assets/mic.png')}
              h={10}
              w={10}
              resizeMode={'contain'}
              alt={'img'}
            />
          </Pressable>
          <Text color={'white'} alignSelf={'center'} mt={2}>
            Tap to talk!
          </Text>
        </>
      )}

      <BottomSheet
        defaultOff={true}
        height={'41%'}
        width="100%"
        openBottom={bottomSheetRef}>
        {/* <View> */}
        <Pressable onPress={() => bottomSheetRef.current.close()}>
          <View
            position={'absolute'}
            right={2}
            top={2}
            borderColor={'white'}
            borderWidth={2}
            rounded={'full'}>
            <Entypo name={'cross'} color={'white'} size={18} />
          </View>
        </Pressable>
        <Text
          fontSize={14}
          //   mb={5}
          alignSelf="center"
          w={'90%'}
          mt={9}
          color={'txtColor'}
          fontFamily={'Jost-Regular'}
          textAlign={'center'}>
          {active === true ? props?.listen : 'Listening...'}
        </Text>
        {active === true ? (
          <Image
            mt={3}
            source={require('../../assets/soundWaves2.png')}
            h={20}
            resizeMode="contain"
            alt={'img'}
          />
        ) : null}
        <Pressable
          onPress={() => {
            if (props?.fromSettings) {
              navigation.navigate('AiTip');
              bottomSheetRef.current.close();
            } else {
              bottomSheetRef.current.close();
            }
          }}
          position="absolute"
          alignSelf={'center'}
          bottom={5}>
          <Image
            // mt={active === true ? 5 : 12}
            source={require('../../assets/recorder.png')}
            resizeMode="contain"
            h={16}
            w={16}
            alt={'img'}
          />
        </Pressable>
        {/* </View> */}
      </BottomSheet>
      {props?.fromSettings && assist === true ? (
        <Pressable
          onPress={openBottomSheet}
          alignSelf={'center'}
          bottom={32}
          position={'absolute'}>
          <View
            bg={'pro'}
            rounded={'full'}
            h={12}
            w={12}
            alignItems={'center'}
            justifyContent={'center'}>
            <Image
              // mt={10}
              source={require('../../assets/assist.png')}
              h={8}
              w={8}
              resizeMode={'contain'}
              alt={'img'}
            />
          </View>
        </Pressable>
      ) : null}
    </>
  );
};
export default OnBoardingComp;
