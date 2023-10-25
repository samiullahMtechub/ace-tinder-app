// da/``
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Center, Circle, Image, Row, Text, View} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';

const OnBoarding = ({navigation}) => {
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <View mx={5} mt={5}>
        <View mx={4}>
          <Text color={'white'} fontSize={35} fontFamily={'Jost-SemiBold'}>
            The future of
          </Text>
          <Row alignItems={'center'}>
            <Text color={'white'} fontSize={35} fontFamily={'Jost-SemiBold'}>
              meaningful
            </Text>
          </Row>
          <Text
            color={'primary.200'}
            fontFamily={'Pacifico-Regular'}
            fontSize={35}>
            matches
          </Text>
        </View>
        <Center>
          <Row>
            <Image
              mt={0}
              source={require('../../assets/onboard.png')}
              alt={'onbaording'}
              h={300}
              resizeMode="contain"
            />
          </Row>
        </Center>
        <View mt={10}>
          <Text
            fontSize={16}
            mb={8}
            color={'white'}
            alignSelf={'center'}
            fontFamily={'Jost-Regular'}
            textAlign={'center'}
            w={'75%'}>
            Stop swiping, Start typing
          </Text>
          <View w={'80%'} alignSelf={'center'}>
            <AButtons
              label={'Get Started'}
              onPress={() => {
                navigation.navigate('OnBoarding2');
              }}
            />
          </View>
          <Row alignSelf={'center'} my={5}>
            <Text
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Regular'}
              textAlign={'center'}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignIn');
              }}>
              <Text
                fontSize={16}
                color={'pro'}
                alignSelf={'center'}
                fontFamily={'Jost-Regular'}
                textAlign={'center'}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Row>
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({});
//  <Box bg={'secondary'} h={250} w={250} rounded={'full'} mt={3}>
//   <Image
//     source={require('../../assets/lines.png')}
//     size={'sm'}
//     position={'absolute'}
//     top={-40}
//     right={-56}
//     //   zIndex={999}

//     alt={'img'}
//     resizeMode="contain"
//     alignSelf={'flex-end'}
//   />
//   <Image
//     alignSelf={'flex-end'}
//     mt={-14}
//     mr={-20}
//     source={require('../../assets/balon1.png')}
//     h={'60%'}
//     resizeMode="contain"
//     alt={'img'}
//   />
//   <View
//     position={'absolute'}
//     bottom={'10'}
//     right={-36}
//     bg={'pro'}
//     p={2}
//     //   ml={100}
//     //   mr={-10}
//     alignSelf={'flex-end'}
//     rounded={'full'}
//     w={'67%'}
//     alignItems={'center'}
//     justifyContent={'center'}>
//     <Row alignItems={'center'}>
//       <Image
//         source={require('../../assets/two-hearts.png')}
//         //   size={'xs'}
//         h={8}
//         w={8}
//         resizeMode="contain"
//         alt={'img'}
//       />
//       <Text
//         mx={2}
//         color={'black'}
//         fontSize={20}
//         fontFamily={'Jost-Regular'}>
//         Connection
//       </Text>
//     </Row>
//   </View>
//   <Image
//     source={require('../../assets/balonline.png')}
//     size={'sm'}
//     position={'absolute'}
//     top={20}
//     left={-50}
//     //   zIndex={999}
//     resizeMode="contain"
//     alignSelf={'flex-start'}
//     alt={'img'}
//   />
//   <Image
//     alignSelf={'flex-start'}
//     //   mt={-10}
//     mt={-10}
//     ml={-90}
//     source={require('../../assets/balon2.png')}
//     //   size={'xl'}
//     h={'56%'}
//     resizeMode="contain"
//     alt={'img'}
//   />
// // </Box>
