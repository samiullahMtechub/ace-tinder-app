import {StyleSheet} from 'react-native';
import {Button, Divider, TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import {View, Pressable} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const TextField = props => {
  const [signin_ShowPassword1, setsignin_ShowPassword1] = React.useState(true);
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <>
      <TextInput
        mode="outlined"
        label={props?.label}
        // placeholder={props?.label}
        theme={{colors: {onSurfaceVariant: '#ABABAB'}}}
        value={props?.value}
        onChangeText={props?.onChangeText}
        style={styles.ti}
        placeholderTextColor={'#ABABAB'}
        textColor="#ABABAB"
        outlineColor={'#0000001F'}
        activeOutlineColor="#F94449"
        secureTextEntry={show === true ? true : false}
        onFocus={() => setFocused(true)}
        outlineStyle={{borderRadius: 25}}
        right={
          props?.label === 'Password' || props?.label === 'Confirm Password' ? (
            <TextInput.Icon
              icon={() => (
                <Pressable onPress={() => setShow(!show)}>
                  <MaterialIcons
                    name={show ? 'visibility-off' : 'visibility'}
                    size={20}
                    color="#ABABAB"
                  />
                </Pressable>
              )}
            />
          ) : null
        }
        // <Pressable onPress={() => setShow(!show)}>
        //     <Icon
        //       as={
        //         <MaterialIcons
        //           name={show ? 'visibility-off' : 'visibility'}
        //         />
        //       }
        //       size={5}
        //       mx="2"
        //       color="muted.400"
        //     />
        //   </Pressable>
      />

      {/* <TextInput
        mode="outlined"
        label={props?.label}
        // onChangeText={text => setsignup_pass(text)}
        style={styles.ti}
        placeholderTextColor={'#ABABAB'}
        outlineColor="#0000001F"
        outlineStyle={{borderRadius: 20}}
        activeOutlineColor="#F94449"
        // secureTextEntry={signin_ShowPassword1}
        // onFocus={handleFocus4}
        // onBlur={handleBlur4}
        // left={<TextInput.Icon
        //     icon={() => (
        //         <MaterialCommunityIcons
        //             name={'lock-outline'}
        //             size={23}
        //             color={isTextInputActive4 == true ? '#FACA4E' : '#64646485'}
        //         />
        //     )}
        // />
        // }
      /> */}
    </>
  );
};

export default TextField;
const styles = StyleSheet.create({
  ti: {
    borderRadius: 100,
    height: 40,
    // marginHorizontal: '9%',
    marginTop: '5%',
    // width: 300,
    backgroundColor: '#2F2F2F',
    fontSize: 14,
    paddingLeft: '2%',
  },
});
