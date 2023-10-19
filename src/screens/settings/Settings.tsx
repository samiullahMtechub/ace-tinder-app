import {View, Text, Avatar, Row, Image, Divider, Pressable} from 'native-base';
import React from 'react';
import {ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AlertModal from '../../components/Modal/AlertModal';

const Settings = ({navigation}) => {
  const [active, setActive] = React.useState(false);
  const data = [
    {
      id: 1,
      name: 'Update Profile',
      img: require('../../assets/profile.png'),
      screen: 'UpdateProfile',
    },
    {
      id: 2,
      name: 'Update Password',
      img: require('../../assets/lock.png'),
      screen: 'UpdatePassword',
    },
    {
      id: 3,
      name: 'My Photos',
      img: require('../../assets/gallery.png'),
      screen: 'AddPhotos',
    },
    {
      id: 4,
      name: 'AI Coach',
      img: require('../../assets/ai.png'),
      screen: 'AI',
    },
    {
      id: 5,
      name: 'Privacy Policy',
      img: require('../../assets/privacy.png'),
      screen: 'PrivacyPolicy',
    },
    {
      id: 6,
      name: 'Terms & Conditions',
      img: require('../../assets/terms.png'),
      screen: 'Terms & Conditions',
    },
  ];
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <View m={5}>
        <Text color={'pro'} fontSize={24} fontFamily={'Jost-SemiBold'}>
          Settings
        </Text>
        <View h={16} my={5} mb={10}>
          <LinearGradient
            colors={['#C30010', '#F94449']}
            style={{flex: 1, borderRadius: 18, justifyContent: 'center'}}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}>
            <Row p={2} justifyContent={'space-between'} alignItems={'center'}>
              <Pressable onPress={() => navigation.navigate('OtherUser')}>
                <Row alignItems={'center'}>
                  <Avatar
                    source={require('../../assets/home1.png')}
                    h={10}
                    w={10}
                  />
                  <View ml={2}>
                    <Text
                      fontSize={16}
                      fontFamily={'Jost-Medium'}
                      color={'white'}>
                      Olivia Reynolds
                    </Text>
                    <Text
                      fontSize={14}
                      fontFamily={'Jost-Regular'}
                      color={'white'}>
                      22
                    </Text>
                  </View>
                </Row>
              </Pressable>
              <Pressable onPress={() => setActive(true)}>
                <Image
                  source={require('../../assets/logout.png')}
                  h={10}
                  w={10}
                  resizeMode="contain"
                  alt="img"
                />
              </Pressable>
            </Row>
          </LinearGradient>
        </View>
        {data?.map(item => {
          return (
            <Pressable onPress={() => navigation.navigate(item?.screen)}>
              <Row alignItems={'center'}>
                <Image
                  source={item?.img}
                  h={4}
                  w={4}
                  resizeMode={'contain'}
                  alt={'settings'}
                />
                <Text
                  ml={4}
                  fontSize={16}
                  fontFamily={'Jost-Medium'}
                  color={'white'}>
                  {item?.name}
                </Text>
              </Row>
              <Divider
                my={4}
                bg={item?.id === 6 ? 'transparent' : 'grey.500'}
              />
            </Pressable>
          );
        })}
      </View>
      <AlertModal
        modalVisible={active}
        cancelPress={() => {
          setActive(false);
        }}
        heading={'Logout'}
        message={'Are you sure you want to logout?'}
        btntxt1={'Logout'}
        btntxt2
        onPress={() => {
          navigation.navigate('SignIn');
        }}></AlertModal>
    </ImageBackground>
  );
};

export default Settings;
