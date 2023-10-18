// da/``
import {ImageBackground, StyleSheet} from 'react-native';
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
import CustomSnackbar from '../../components/customSnackBar/CustomSnackBar';
import Header from '../../components/Header/Header';

const UpdatePassword = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header title={'update Password'} />
      <CustomSnackbar
        message={'Success'}
        visible={visible}
        height={'8%'}
        onDismiss={() => {
          setVisible(false);
          navigation.goBack();
        }}
        messageDescription={'Password updated Successfully'}
      />
      <ScrollView mx={5} mt={5}>
        <View>
          <TextField label={'Old Password'} />
          <TextField label={'New Password'} />
          <TextField label={'Confirm Password'} />

          <View mt={'90%'}>
            <AButtons label={'Update'} onPress={() => setVisible(true)} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({});
