import {View, Text, ScrollView, Image} from 'native-base';
import React from 'react';
import Header from '../../components/Header/Header';
import {ImageBackground} from 'react-native';

const Games = () => {
  const data = [
    {
      id: 1,
      img: require('../../assets/game1.png'),
      name: 'Break the brick',
      players: '1.5 k',
      blur: require('../../assets/gameblur1.png'),
    },
    {
      id: 2,
      img: require('../../assets/game2.png'),
      name: 'Carom',
      players: '1.5 k ',
      blur: require('../../assets/gameblur2.png'),
    },
    {
      id: 3,
      img: require('../../assets/game3.png'),
      name: 'Two Dots',
      players: '1.5 k',
      blur: require('../../assets/gameblur3.png'),
    },
    {
      id: 4,
      img: require('../../assets/game4.png'),
      blur: require('../../assets/gameblur4.png'),
      name: 'Couple Quiz',
      players: '1.5 k',
    },
    {
      id: 5,
      img: require('../../assets/game5.png'),
      blur: require('../../assets/gameblur5.png'),
      name: 'Balloon Pop',
      players: '1.5 k',
    },
  ];
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Header title={'Let the Game Begin!'} />
      <ScrollView>
        <View mx={5} mt={5}>
          {/* <Text
            color={'white'}
            fontSize={18}
            mb={5}
            fontFamily={'Jost-SemiBold'}>
            Let the Game Begin!
          </Text> */}
          {data?.map(item => {
            return (
              <ImageBackground
                source={item?.img}
                style={{
                  height: 200,
                  width: 320,
                  alignSelf: 'center',
                  marginBottom: 20,
                  padding: 10,
                }}>
                <ImageBackground
                  source={item?.blur}
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    bottom: 5,
                    padding: 8,
                    width: 280,
                    borderRadius: 80,
                  }}>
                  <Text
                    ml={2}
                    color={item?.id === 3 ? 'black' : 'white'}
                    fontSize={16}
                    fontFamily={'Jost-SemiBold'}>
                    {item?.name}
                  </Text>
                  <Text
                    ml={2}
                    color={item?.id === 3 ? 'black' : 'white'}
                    fontSize={12}
                    fontFamily={'Jost-SemiBold'}>
                    {item?.players} players
                  </Text>
                  <Image
                    position={'absolute'}
                    right={5}
                    top={2}
                    source={require('../../assets/play.png')}
                    h={10}
                    w={10}
                    alt={'img'}
                    resizeMode={'contain'}
                  />
                </ImageBackground>
              </ImageBackground>
            );
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Games;
