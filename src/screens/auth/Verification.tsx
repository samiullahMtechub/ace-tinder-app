import React, {useState} from 'react';
import {ScrollView, Text, View} from 'native-base';
import {StyleSheet, ImageBackground} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AButtons from '../../components/button/AButtons';
import Header from '../../components/Header/Header';
// import JdButton from '../../components/button/Buttons';
// import Header from '../../components/Header/Header';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'space-around',
  },
  title: {fontSize: 30, fontWeight: 'bold', textAlign: 'center'},
  codeFieldRoot: {marginHorizontal: 20, marginTop: 50},
  cell: {
    width: 60,
    height: 50,
    lineHeight: 40,
    fontSize: 24,
    // borderWidth: 2,\C
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    borderRadius: 30,
    borderColor: '#00000030',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  focusCell: {
    borderColor: '#F94449',
    borderWidth: 0,
  },
});

const CELL_COUNT = 4;

const Verification = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={{flex: 1}}
      resizeMode="cover">
      <View position={'absolute'} top={0} left={0}>
        <Header />
      </View>
      <ScrollView>
        <View mt={32} mx={5}>
          <Text
            fontSize={30}
            fontWeight={'700'}
            color={'white'}
            textAlign={'left'}>
            Verification
          </Text>
          <Text color={'grey.400'} textAlign={'left'} mt={2} mb={50}>
            Enter the code that you received on your email
          </Text>
        </View>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text fontSize={16} textAlign={'center'} color={'pro'} mt={5}>
          Resend Code
        </Text>
        <View mx={5} mb={'20%'} mt={'35%'}>
          <AButtons
            label={'Verify'}
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Verification;
