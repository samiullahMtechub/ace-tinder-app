// da/``
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {
  Box,
  Center,
  Circle,
  Image,
  Row,
  ScrollView,
  Text,
  View,
} from 'native-base';
import React from 'react';
import AButtons from '../../components/button/AButtons';
import TextField from '../../components/TextField';
import Header from '../../components/Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProfilePicComp from '../../components/ProfilePhotosCom/ProfilePicComp';
var {width, height} = Dimensions.get('window');
const AddPhotos = ({navigation}) => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },

    {
      id: 3,
    },

    {
      id: 4,
    },

    {
      id: 5,
    },

    {
      id: 6,
    },

    {
      id: 7,
    },

    {
      id: 8,
    },

    {
      id: 9,
    },
  ];
  const [layer, setLayer] = React.useState(false);
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <View mx={4}>
        <Header />
      </View>
      <ScrollView ml={3}>
        <View mt={5} mx={5}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            {`Add your best ${'\n'}Photos`}
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            // w={'90%'}
            mb={10}
            mt={2}>
            {`The photo in your album must be a picture ${'\n'}of you.`}
          </Text>
          <ProfilePicComp
            data={data}
            label={'Next'}
            close={() => {
              setLayer(false);
            }}
            open={() => {
              setLayer(true);
            }}
          />
        </View>
      </ScrollView>
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </ImageBackground>
  );
};

export default AddPhotos;

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
