import {View, Text, Pressable, Image} from 'native-base';
import {ImageBackground} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AlertModal from '../../../components/Modal/AlertModal';
import {useNavigation} from '@react-navigation/native';

const HomeScreenComp = props => {
  const [active, setActive] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View
      flexDir={'row'}
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      mb={7}>
      {props?.data?.map(item => {
        return (
          <Pressable
            my={2}
            mb={props?.fromSearches ? -4 : 0}
            onPress={() => {
              navigation.navigate('OtherUser');
            }}>
            <ImageBackground
              source={props?.fromSearches ? null : item?.bgimg}
              style={{
                borderRadius: 100,
                height: 200,
                width: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              resizeMode="contain">
              {props?.fromSearches ? (
                <Image
                  alt="home"
                  source={item?.img}
                  resizeMode="cover"
                  borderRadius={10}
                  h={'80%'}
                  w={'100%'}
                  zIndex={999}
                  position={'absolute'}
                />
              ) : (
                <Image
                  alt="home"
                  source={item?.img}
                  resizeMode="contain"
                  borderRadius={10}
                  h={item?.id === 6 ? '70%' : '80%'}
                  w={props?.fromSearches ? '80%' : '70%'}
                  zIndex={99}
                  position={'absolute'}
                />
              )}

              <ImageBackground
                source={item?.blur}
                // opacity={}

                // w={'80%'}
                style={{
                  height: 120,
                  position: 'absolute',
                  bottom: props?.fromSearches ? -15 : -30,

                  width: 130,
                  zIndex: 999,
                }}
                resizeMode={'contain'}>
                <View position={'absolute'} bottom={10} left={2}>
                  <Text fontSize={14} fontFamily={'Jost-Medium'}>
                    {item?.name}
                  </Text>
                  <Text fontSize={12} fontFamily={'Jost-Regular'}>
                    {item?.status}
                  </Text>
                </View>
              </ImageBackground>
              {props?.fromSearches ? null : (
                <Pressable
                  onPress={() => setActive(true)}
                  zIndex={99}
                  position={'absolute'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  top={2}
                  right={1}>
                  <View
                    bg={'pro'}
                    // p={2}
                    rounded={'full'}
                    h={6}
                    w={6}>
                    <Text color={'white'} textAlign={'center'} fontSize={14}>
                      i
                    </Text>
                  </View>
                </Pressable>
              )}
            </ImageBackground>
          </Pressable>
        );
      })}
      <AlertModal
        modalVisible={active}
        cancelPress={() => {
          setActive(false);
        }}
        heading={'Disqualify'}
        message={'Are you sure you want to disqualify sofia?'}
        btntxt1={'Disqualify'}
        btntxt2
        onPress={() => {
          navigation.navigate('Disqualify');
        }}></AlertModal>
    </View>
  );
};
export default HomeScreenComp;
