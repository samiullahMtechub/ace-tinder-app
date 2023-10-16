import {View, Text, Pressable, Row, Divider, Image, Stack} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import BottomSheet from '../bottomSheet/BottomSheet';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AlertModal from '../Modal/AlertModal';
import AButtons from '../button/AButtons';
import {useNavigation} from '@react-navigation/native';

const ProfilePicComp = props => {
  const navigation = useNavigation();
  const bottomSheetRef = React.useRef(null);
  const [active, setActive] = React.useState(false);
  const [imageUrl, setImageUrl] = React.useState<string>();
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
    <>
      <View flexDir={'row'} flexWrap={'wrap'} flex={1}>
        {props?.data?.map(item => {
          return (
            <Pressable
              onPress={() => {
                openBottomSheet();
              }}>
              <View
                mb={4}
                borderStyle={'dashed'}
                borderWidth={imageUrl ? 0 : 2}
                mr={5}
                bg={'grey.500'}
                borderColor={'txtColor'}
                h={'24'}
                borderRadius={20}
                alignItems={'center'}
                justifyContent={'center'}
                w={20}>
                {imageUrl ? (
                  <Stack>
                    <Image
                      source={{uri: imageUrl}}
                      alt={'img'}
                      h={24}
                      w={20}
                      borderRadius={20}
                      resizeMode={'contain'}
                    />
                    <View
                      position={'absolute'}
                      right={-4}
                      bg={'pro'}
                      rounded={'full'}
                      top={-7}

                      // borderWidth={2}
                    >
                      <Entypo name={'cross'} color={'black'} size={18} />
                    </View>
                  </Stack>
                ) : (
                  <AntDesign name="pluscircleo" color={'#CCCCCC'} size={30} />
                )}
              </View>
            </Pressable>
          );
        })}
      </View>
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
      <AlertModal
        modalVisible={active}
        heading={'Error'}
        message={'Upload atleast one image to continue'}
        onPress={() => {
          setActive(false);
        }}></AlertModal>
      <View mx={5} ml={-2} my={5}>
        <AButtons
          label={props?.label}
          onPress={() => {
            if (!props?.fromPreview && !imageUrl) {
              setActive(true);
            } else if (props?.fromPreview) {
              navigation.navigate('ProfileProcessing');
            } else {
              // let fromAddPhoto=true;
              navigation.navigate('AddProfile', imageUrl);
            }
          }}
        />
      </View>
    </>
  );
};
export default ProfilePicComp;
