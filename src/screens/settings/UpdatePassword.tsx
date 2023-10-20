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
import * as Yup from 'yup';
import {Formik} from 'formik';
const UpdatePassword = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const formSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });
  const handleCreate = () => {
    setVisible(true);
  };
  return (
    // <View flex={1}>
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <Header title={'Update Password'} />

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
          <Formik
            initialValues={{
              oldPassword: '',
              newPassword: '',
              confirmPassword: '',
            }}
            validationSchema={formSchema}
            onSubmit={values =>
              handleCreate(
                values.oldPassword,
                values.newPassword,
                values.confirmPassword,
              )
            }>
            {({
              values,
              handleChange,

              handleSubmit,

              errors,
            }) => (
              <>
                <TextField
                  label={'Old Password'}
                  value={values.oldPassword}
                  onChangeText={handleChange('oldPassword')}
                />
                {errors.oldPassword && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} ml={1}>
                    <View
                      bg={'red.500'}
                      h={2}
                      w={2}
                      rounded={'full'}
                      mx={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.oldPassword}
                    </Text>
                  </View>
                )}
                <TextField
                  label={'New Password'}
                  value={values.newPassword}
                  onChangeText={handleChange('newPassword')}
                />
                {errors.newPassword && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} mx={1}>
                    <View
                      bg={'red.500'}
                      h={2}
                      w={2}
                      rounded={'full'}
                      mx={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.newPassword}
                    </Text>
                  </View>
                )}
                <TextField
                  label={'Confirm Password'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <View flexDir={'row'} alignItems={'center'} mt={1} ml={1}>
                    <View
                      bg={'red.500'}
                      h={2}
                      w={2}
                      rounded={'full'}
                      mx={1}></View>
                    <Text color={'red.500'} fontSize={12}>
                      {errors.confirmPassword}
                    </Text>
                  </View>
                )}
                <View mt={'90%'}>
                  <AButtons label={'Update'} onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default UpdatePassword;

const styles = StyleSheet.create({});
