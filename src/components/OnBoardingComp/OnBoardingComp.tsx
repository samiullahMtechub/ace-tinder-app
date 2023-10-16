import {View, Text, Row, Image, Pressable, TextArea} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../bottomSheet/BottomSheet';
import Entypo from 'react-native-vector-icons/Entypo';

const OnBoardingComp = props => {
  const bottomSheetRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
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
          {props?.title}
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
        mt={10}
        bg={'grey.500'}
        placeholderTextColor={'txtColor'}
        p={4}
        h={40}
        color={'txtColor'}
        borderWidth={0}
        fontSize={14}
        borderRadius={20}
        _focus={{borderColor: 'secondary', borderWidth: 1}}
      />
      <Pressable onPress={openBottomSheet} alignSelf={'center'}>
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
      <BottomSheet
        defaultOff={true}
        height={'40%'}
        width="100%"
        openBottom={bottomSheetRef}>
        {/* <View> */}
        <Pressable onPress={() => bottomSheetRef.current.close()}>
          <View
            position={'absolute'}
            right={2}
            top={0}
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
          mt={7}
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
          onPress={() => bottomSheetRef.current.close()}
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
    </>
  );
};
export default OnBoardingComp;
