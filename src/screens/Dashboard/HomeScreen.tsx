// da/``
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {
  Box,
  Center,
  Circle,
  Image,
  Pressable,
  Row,
  ScrollView,
  Stack,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenComp from './components/HomeScreenCom';
import LinearGradient from 'react-native-linear-gradient';
var {width, height} = Dimensions.get('window');
const HomeScreen = ({navigation}) => {
  const data = [
    {
      id: 1,
      bgimg: require('../../assets/Aspades.png'),
      blur: require('../../assets/blur1.png'),
      img: require('../../assets/home1.png'),
      name: 'Isabell',
      status: 'offline',
    },
    {
      id: 2,
      bgimg: require('../../assets/kingbg.png'),
      blur: require('../../assets/blur2.png'),
      img: require('../../assets/home2.png'),
      name: 'Robert',
      status: 'offline',
    },

    {
      id: 3,
      bgimg: require('../../assets/heartcard10.png'),
      blur: require('../../assets/blur3.png'),
      img: require('../../assets/home3.png'),
      name: 'Olivia',
      status: 'Offline',
    },

    {
      id: 4,
      bgimg: require('../../assets/clubcard9.png'),
      img: require('../../assets/home4.png'),
      blur: require('../../assets/blur4.png'),
      name: 'Isabell',
      status: 'Offline',
    },

    {
      id: 5,
      bgimg: require('../../assets/8bgclub.png'),
      blur: require('../../assets/blur5.png'),
      img: require('../../assets/home1.png'),
      name: 'Emily',
      status: 'Offline',
    },

    {
      id: 6,
      bgimg: require('../../assets/jokerbg.png'),
      img: require('../../assets/home6.png'),
      blur: require('../../assets/blur6.png'),
      name: 'William',
      status: 'online',
    },
  ];
  const [layer, setLayer] = React.useState(false);
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <ScrollView mx={5} mt={5} showsVerticalScrollIndicator={false}>
        <Image
          alignSelf="center"
          source={require('../../assets/spalsh.png')}
          resizeMode="cover"
          h={40}
          w={40}
          alt="splash"
        />
        <Text
          color={'white'}
          fontSize={18}
          fontFamily={'Jost-Medium'}
          textAlign={'center'}
          mt={-8}>
          I'm AIce, nice to meet you
        </Text>
        <Row my={5} alignItems={'center'} justifyContent={'space-between'}>
          <Text fontSize={22} fontFamily={'Jost-SemiBold'} color={'pro'}>
            Connections
          </Text>
          <Row>
            <Pressable
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Ionicons name={'search-outline'} size={20} color={'#F94449'} />
            </Pressable>
            <Pressable
              onPress={() => {
                navigation.navigate('Notifications');
              }}>
              <Stack>
                <Image
                  ml={3}
                  alignSelf="center"
                  source={require('../../assets/bell.png')}
                  resizeMode="contain"
                  h={5}
                  w={5}
                  alt="splash"
                />
                <View
                  bg={'white'}
                  h={2}
                  w={2}
                  rounded={'full'}
                  position={'absolute'}
                  right={0}></View>
              </Stack>
            </Pressable>
          </Row>
        </Row>
        <HomeScreenComp
          data={data}
          close={() => {
            console.log('ok');
            setLayer(false);
          }}
          open={() => {
            console.log('open');
            setLayer(true);
          }}
        />
      </ScrollView>
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
      {/* <LinearGradient
        colors={['#C30010', '#F94449']}
        style={{
          // flex: 1,
          marginHorizontal: 0,

          justifyContent: 'center',
          position: 'absolute',
          padding: 10,
          bottom: 0,
          width: '100%',
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View flexDir={'row'} alignItems={'center'} ml={4}>
          <Text
            alignSelf={'center'}
            color={'white'}
            fontSize={14}
            fontFamily={'Jost-Regular'}>
            Next match will appear in
          </Text>
          <Text color={'white'} fontSize={16} fontFamily={'Jost-Medium'} ml={2}>
            24:00:00
          </Text>
        </View>
      </LinearGradient> */}
    </ImageBackground>
  );
};

export default HomeScreen;

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
