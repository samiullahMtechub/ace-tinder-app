// da/``
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Avatar,
  Box,
  Center,
  Circle,
  Image,
  Pressable,
  Row,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import Feather from 'react-native-vector-icons/Feather';

const AddProfile = ({navigation, route}) => {
  const image = route?.params;
  const [imageUrl, setImageUrl] = React.useState<string>();
  const handlePickImage = React.useCallback(async () => {
    const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('Error:', response.error);
        // setMediaType(ContentType.NONE);
      } else if (response.customButton) {
        // console.log('User tapped custom button:', response.customButton);
      } else {
        const source = response.assets?.[0]?.base64 || '';
        // console.log("source",source);

        setImageUrl(`data:image/png;base64,${source}`); // Process the selected video
      }
    });
  }, []);
  const handleCamera = React.useCallback(async () => {
    const options = {
      maxHeight: 200,
      maxWidth: 200,
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        // console.log('Error:', response.error);
        // setMediaType(ContentType.NONE);
      } else if (response.customButton) {
        // console.log('User tapped custom button:', response.customButton);
      } else {
        const source = response.assets?.[0]?.base64 || '';
        // console.log("source",source);

        setImageUrl(`data:image/png;base64,${source}`); // Process the selected video
      }
    });
  }, []);
  const handleImage = id => {
    setImageUrl(image);
    navigation.goBack();
  };
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header />
      <ScrollView mx={5} mt={5}>
        <View mt={8}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Profile Photo
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Your profile photo helps others recognize you on our platform
          </Text>
          {imageUrl ? (
            <Avatar alignSelf={'center'} source={{uri: imageUrl}} size={'xl'} />
          ) : (
            <Avatar
              borderStyle={'dashed'}
              borderWidth={1.5}
              borderColor={'black'}
              // source={require('../../assets/profileBack.png')}
              bg={'white'}
              size={'xl'}
              alignSelf={'center'}>
              <Feather name={'camera'} size={20} color={'#F258D4'} />
            </Avatar>
          )}
          {imageUrl ? (
            <Pressable onPress={() => setImageUrl()}>
              <Text
                alignSelf={'center'}
                mt={4}
                color={'white'}
                fontFamily={'Jost-Medium'}>
                Change
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => handleImage(1)}>
              <Text
                alignSelf={'center'}
                mt={4}
                color={'white'}
                fontFamily={'Jost-Medium'}>
                Select from Previous Photos
              </Text>
            </Pressable>
          )}
          {imageUrl ? (
            <View mt={'50%'}>
              <AButtons
                label={'Next'}
                onPress={() => navigation.navigate('AddLocation')}
              />
            </View>
          ) : (
            <View mt={'50%'}>
              <AButtons label={'Take a Photo'} onPress={() => handleCamera()} />
              <Pressable mt={5} onPress={() => handlePickImage()}>
                <Text
                  textAlign={'center'}
                  fontSize={16}
                  fontFamily={'Jost-Medium'}
                  color={'white'}>
                  Choose a Photo
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AddProfile;

const styles = StyleSheet.create({});
