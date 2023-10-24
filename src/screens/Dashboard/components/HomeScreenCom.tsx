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
              imageStyle={{borderRadius: 12}}
              resizeMode={'cover'}
              source={props?.fromSearches ? null : item?.bgimg}
              style={{
                resizeMode: 'contain',
                // borderRadius: 100,
                height: 200,
                width: item?.id === 1 ? 150 : 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
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
                  h={
                    (item?.id === 6 && '58%') ||
                    (item?.id === 2 && '87%') ||
                    '83%'
                  }
                  w={item?.id === 6 ? '57%' : '71%'}
                  zIndex={99}
                  position={'absolute'}
                />
              )}

              <ImageBackground
                source={item?.blur}
                // opacity={}

                // w={'80%'}
                style={{
                  height: 140,
                  position: 'absolute',
                  bottom:
                    (props?.fromSearches && -22) ||
                    (item?.id === 6 && -12) ||
                    -40,

                  width:
                    (props?.fromSearches && 140) ||
                    (item?.id === 6 && 80) ||
                    100,
                  zIndex: 999,
                }}
                resizeMode={'contain'}>
                <View position={'absolute'} bottom={12} left={2}>
                  <Text fontSize={14} fontFamily={'Jost-Medium'}>
                    {item?.name}
                  </Text>
                  <Text mb={1} fontSize={12} fontFamily={'Jost-Regular'}>
                    {item?.status}
                  </Text>
                </View>
              </ImageBackground>
              {props?.fromSearches ? null : (
                <Pressable
                  onPress={() => {
                    props.open && props.open('open');
                    setActive(true);
                  }}
                  zIndex={99}
                  position={'absolute'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  top={1}
                  right={1}>
                  <View
                    bg={'pro'}
                    // p={2}
                    rounded={'full'}
                    h={5}
                    w={5}>
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
          props.close && props.close('open');
          setActive(false);
        }}
        heading={'Disqualify'}
        message={'Are you sure you want to disqualify sofia?'}
        btntxt1={'Disqualify'}
        btntxt2
        onPress={() => {
          props.close && props.close('open');
          navigation.navigate('Disqualify');
        }}></AlertModal>
    </View>
  );
};
export default HomeScreenComp;
