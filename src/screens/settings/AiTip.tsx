import {
  View,
  Text,
  Row,
  Image,
  Pressable,
  TextArea,
  ScrollView,
} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../components/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, ImageBackground, Dimensions} from 'react-native';
var {width, height} = Dimensions.get('window');
const AiTip = ({navigation}) => {
  const bottomSheetRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [assist, setAssist] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const [layer, setLayer] = React.useState(false);
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
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={{flex: 1}}
        resizeMode="cover">
        <View mb={5}>
          <Header right fromAiTip />
        </View>
        <Pressable onPress={() => setPressed(true)} alignSelf={'center'}>
          {pressed === true ? (
            <Image
              mt={3}
              ml={10}
              alignSelf={'flex-start'}
              source={require('../../assets/soundWaves2.png')}
              alt={'img'}
              h={10}
              w={10}
              resizeMode="contain"
            />
          ) : null}
          {pressed === false ? (
            <Ionicons name={'volume-medium'} size={25} color={'white'} />
          ) : null}
        </Pressable>
        <ScrollView mx={5} mb={2}>
          <Text
            fontSize={28}
            // w={'78%'}

            color={'white'}
            fontFamily={'Jost-SemiBold'}
            textAlign={'center'}>
            Tell Ai if you need further Assistance
          </Text>

          <TextArea
            value={`Dating can be an exciting and fulfilling experience when approached with the right mindset and strategies. This guide will provide you with practical tips and advice to help you navigate the world of dating effectively. Whether you're just starting out or looking to enhance your dating experiences, these principles can help you build healthy and meaningful connections.
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
Stay safe while dating online by following best practices`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            mt={10}
            //   isReadOnly={true}
            bg={'grey.500'}
            placeholderTextColor={'txtColor'}
            p={4}
            h={'full'}
            color={'txtColor'}
            borderWidth={0}
            fontSize={14}
            borderRadius={20}
            _focus={{borderColor: 'secondary', borderWidth: 1}}
          />
        </ScrollView>
        <BottomSheet
          defaultOff={true}
          height={'41%'}
          width="100%"
          onOpen={() => setLayer(true)}
          onClose={() => setLayer(false)}
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
            {active === true
              ? `Tell Ai if you need further Assistance`
              : 'Listening...'}
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
              setAssist(true);
              bottomSheetRef.current.close();
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
      </ImageBackground>
      {focused === true ? null : (
        <Pressable
          onPress={openBottomSheet}
          alignSelf={'center'}
          bottom={5}
          position={'absolute'}>
          <View
            // bg={'pro'}
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
      )}
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </>
  );
};
export default AiTip;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.7,
    backgroundColor: 'black',
    width: width,
  },
});
