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

const ResetPassword = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <CustomSnackbar
        message={'Success'}
        visible={visible}
        height={'8%'}
        onDismiss={() => {
          setVisible(false);
          navigation.navigate('SignIn');
        }}
        messageDescription={'Password reset Successfully'}
      />
      <ScrollView mx={5} mt={5}>
        <View mt={100}>
          <Text fontSize={32} color={'white'} fontFamily={'Jost-SemiBold'}>
            Reset Password
          </Text>
          <Text
            fontSize={16}
            color={'txtColor'}
            textAlign={'left'}
            fontFamily={'Jost-Regular'}
            w={'90%'}
            mb={10}
            mt={2}>
            Create a strong password
          </Text>
          <TextField label={'Password'} />
          <TextField label={'Confirm Password'} />

          <View mt={'50%'}>
            <AButtons
              label={'Reset Password'}
              onPress={() => setVisible(true)}
            />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
