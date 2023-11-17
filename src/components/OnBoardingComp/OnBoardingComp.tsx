import {View, Text, Row, Image, Pressable, TextArea} from 'native-base';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomSheet from '../bottomSheet/BottomSheet';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Voice from '@react-native-voice/voice';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Tts from 'react-native-tts';
const OnBoardingComp = props => {
  const bottomSheetRef = React.useRef(null);
  //new commit
  const [active, setActive] = React.useState(false);
  const [assist, setAssist] = React.useState(false);
  const navigation = useNavigation();
  const openBottomSheet = (id: string) => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
      startRecognizing();
    }
    //  (bottomSheetRef.current) {
    //     bottomSheetRef.current.close()
    // console.error(id);
    //   setPostId(id);
  };

  React.useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  const [waves, setWaves] = React.useState('');
  const [started, setStarted] = React.useState();
  const [error, setError] = React.useState();
  const [value, setValue] = React.useState('');
  const [end, setEnd] = React.useState();
  const onSpeechStart = e => {
    //Invoked when .start() is called without error

    setStarted('√');
  };
  const onSpeechEnd = e => {
    setActive(true);

    bottomSheetRef?.current?.close();
  };
  const onSpeechPartialResults = e => {
    console.log('partial', e);
    // setValue(e.value[0]);
    // setValue(e.value[0]);
    //Invoked when SpeechRecognizer stops recognition
    // setEnd('√');
    // setWaves(false);
  };
  const onSpeechError = e => {
    //Invoked when an error occurs.
    setError(JSON.stringify(e.error));
    // setWaves(false);
  };
  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    // console.log('Speech Recognizer', e.value[0]);
    setValue(e.value[0]);
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    //console.log('onSpeechVolumeChanged: ', e);
    //  setPitch(e.value);
  };
  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    try {
      let res = await Voice.start('en-US');
      //  setPitch('');
      //  setError('');/
      // console.log(res);
      setStarted('');
      //  setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      //console.error(e);
    }
  };
  /////////////text states////////////
  const [result, setResult] = React.useState(false);

  React.useEffect(() => {
    if (result === true) {
      Tts.speak(props?.title);
    } else {
      Tts.stop();
    }
  }, [result]);
  Tts.addEventListener('tts-finish', event => {
    setResult(false);
  });
  Tts.addEventListener('tts-start', event => {
    setResult(true);
  });
  React.useEffect(() => {
    if (value !== '' && value !== ' ') {
      setWaves(prevText => prevText + ' ' + value);
    }
  }, [value]);
  console.log(waves);
  return (
    <>
      <Pressable onPress={() => setResult(!result)} alignSelf={'center'} p={4}>
        {result === true ? (
          <Image
            // ml={10}
            // alignSelf={'flex-start'}
            source={require('../../assets/soundWaves2.png')}
            alt={'img'}
            h={10}
            w={10}
            resizeMode="contain"
          />
        ) : null}
        {result === false ? (
          <Ionicons name={'volume-medium'} size={25} color={'white'} />
        ) : // <Image
        //   // ml={10}
        //   // alignSelf={'flex-start'}
        //   source={require('../../assets/volume.png')}
        //   alt={'img'}
        //   h={6}
        //   w={6}
        //   resizeMode="contain"
        // />
        null}
      </Pressable>
      <Row justifyContent={'center'} mx={8}>
        <Text
          fontSize={28}
          // w={'78%'}
          color={'white'}
          fontFamily={'Jost-SemiBold'}
          textAlign={'center'}>
          {props?.fromSettings && assist === true
            ? `Tell Ai if you need further Assistance`
            : props?.title}
        </Text>
      </Row>
      <TextArea
        placeholder={
          waves === '' ? `e.g ${props?.listen}` : `e.g ${props?.listen}`
        }
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
            : waves
        }
        mt={10}
        bg={'white'}
        placeholderTextColor={'#999'}
        p={4}
        h={props?.fromSettings && assist === true ? 'full' : 40}
        color={'#999'}
        borderWidth={0}
        fontSize={14}
        borderRadius={20}
        _focus={{borderColor: 'primaryu', borderWidth: 0, bg: 'white'}}
        onChangeText={txt => setWaves(txt)}
      />
      {props?.fromSettings && assist === true ? null : (
        <>
          <Pressable
            onPress={() => openBottomSheet()}
            alignSelf={'center'}
            mt={props?.fromSettings ? '40%' : 0}>
            <Image
              mt={10}
              source={require('../../assets/assist.png')}
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
        onClose={() => props.close && props.close('ok')}
        onOpen={() => props.open && props.open('open')}
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
            <Entypo name={'cross'} color={'black'} size={18} />
          </View>
        </Pressable>
        <Text
          fontSize={14}
          //   mb={5}
          alignSelf="center"
          w={'90%'}
          mt={9}
          color={'black'}
          fontFamily={'Jost-Regular'}
          textAlign={'center'}>
          {active === true ? waves : 'Listening...'}
        </Text>
        {active === true && value != undefined ? (
          <Row mt={3} alignItems={'center'} justifyContent={'center'}>
            <Image
              source={require('../../assets/sound-wave.png')}
              h={20}
              resizeMode="contain"
              alt={'img'}
            />
          </Row>
        ) : null}
        {active === true && value === undefined && (
          <Text color={'white'} fontSize={16} textAlign={'center'}>
            Speak again
          </Text>
        )}
        <Pressable
          onPress={() => {
            startRecognizing();
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
// if (props?.fromSettings) {
//   navigation.navigate('AiTip');
//   bottomSheetRef.current.close();
// } else {
//   bottomSheetRef.current.close();
// }
