// da/``
import {ImageBackground, StyleSheet} from 'react-native';
import {
  Avatar,
  Box,
  Center,
  Circle,
  Image,
  Row,
  ScrollView,
  Text,
  View,
  Divider,
  Stack,
  Pressable,
} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import ProfilePicComp from '../../components/ProfilePhotosCom/ProfilePicComp';
import BottomSheet from '../../components/bottomSheet/BottomSheet';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import CustomSnackbar from '../../components/customSnackBar/CustomSnackBar';

const UpdateProfile = ({navigation}) => {
  const bottomSheetRef = React.useRef(null);
  const [imageUrl, setImageUrl] = React.useState<string>();
  const [active, setActive] = React.useState(false);
  const openBottomSheet = (id: string) => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.open();
      //   setTimeout(() => {
      //     // setActive(true);
      //   }, 1000);
    }
    //  (bottomSheetRef.current) {
    //     bottomSheetRef.current.close()
    // console.error(id);
    //   setPostId(id);
  };

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
    bottomSheetRef.current.close();
  }, []);
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header title={'Update Profile'} />
      <CustomSnackbar
        message={'Success'}
        visible={active}
        height={'8%'}
        onDismiss={() => {
          setActive(false);
          navigation.goBack();
        }}
        messageDescription={'Profile updated Successfully'}
      />
      <ScrollView mx={5} mt={3}>
        <View mt={5}>
          <Text
            fontSize={32}
            color={'white'}
            fontFamily={'Jost-SemiBold'}></Text>
          {imageUrl ? (
            <Avatar
              mt={5}
              source={{uri: imageUrl}}
              size={'xl'}
              alignSelf={'center'}
            />
          ) : (
            <Avatar
              mt={5}
              source={require('../../assets/onBoarding2.png')}
              size={'xl'}
              alignSelf={'center'}
            />
          )}

          <Pressable
            onPress={() => {
              openBottomSheet();
            }}>
            <Text
              color={'pro'}
              fontSize={16}
              mt={3}
              fontFamily={'Jost-Medium'}
              textAlign={'center'}>
              Change
            </Text>
          </Pressable>
          <TextField label={'Full Name'} />
          <TextField label={'Age'} />
        </View>
        <View mt={'50%'} mb={5}>
          <AButtons label={'Update'} onPress={() => setActive(true)} />
        </View>
      </ScrollView>
      {/* BottomSheet For adding pics */}
      <BottomSheet
        defaultOff={true}
        height={'20%'}
        width="100%"
        openBottom={bottomSheetRef}>
        {/* <View> */}
        <Pressable onPress={() => bottomSheetRef.current.close()}>
          <View
            position={'absolute'}
            right={2}
            top={5}
            // borderWidth={2}
            rounded={'full'}>
            <Entypo name={'cross'} color={'white'} size={18} />
          </View>
        </Pressable>
        <Pressable
          mt={10}
          onPress={() => {
            handleCamera();
            bottomSheetRef.current.close();
          }}>
          <Row alignItems={'center'}>
            <Feather name={'camera'} size={20} color={'#F94449'} />
            <Text
              mx={2}
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Medium'}>
              Upload from Camera
            </Text>
          </Row>
        </Pressable>
        <Divider my={4} />
        <Pressable
          onPress={() => {
            handlePickImage();
            bottomSheetRef.current.close();
          }}>
          <Row alignItems={'center'}>
            <MaterialCommunityIcons
              name={'image-outline'}
              size={20}
              color={'#F94449'}
            />
            <Text
              mx={2}
              fontSize={16}
              color={'white'}
              fontFamily={'Jost-Medium'}>
              Upload from Gallery
            </Text>
          </Row>
        </Pressable>
        {/* </View> */}
      </BottomSheet>
    </ImageBackground>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({});
