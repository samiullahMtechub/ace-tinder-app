import {
  View,
  Image,
  Text,
  ScrollView,
  Row,
  Input,
  Icon,
  Pressable,
} from 'native-base';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
import ChatScreen from './components/ChatScreen';
import {useFocusEffect} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AlertModal from '../../components/Modal/AlertModal';
var {width, height} = Dimensions.get('window');
const Chatting = ({navigation}) => {
  const scrollRef = React.useRef(null);
  const [focus, setFocus] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [layer, setLayer] = React.useState(false);
  const chat = [
    {
      id: 1,
      sent: 'Hi Alex, nice to meet you and thanks for add me',
      time: '12:02 Am',
    },
    {
      id: 2,
      recieved: 'Hi Sahara, your welcome nice to meet you too',
      time: '12:04 Am',
    },
    {
      id: 3,
      sent: 'Okay by the way, can you meet me today ?',
      time: '12:04 Am',
    },
    {
      id: 4,
      recieved: 'Ohh yes sure, I will can meet with you anytime',
      time: '12:20 Am',
    },
    {
      id: 5,
      sent: 'Okay, you can meet with me at Zoo Cafe for today ?',
      time: '12:28 Am',
    },
  ];
  const flatListRef = React.useRef(null);
  useFocusEffect(
    React.useCallback(() => {
      flatListRef.current.scrollToEnd();
      console.log('okss');
    }, [focus]),
  );
  React.useEffect(() => {
    flatListRef.current.scrollToEnd();
    console.log('ok');
  }, [focus]);
  const renderConversation = ({item}) => {
    return (
      <View
        bg={item?.sent ? 'grey.500' : 'pro'}
        borderRadius={10}
        flex={1}
        p={2}
        w={'85%'}
        mb={5}
        alignSelf={item?.sent ? 'flex-start' : 'flex-end'}>
        <Pressable onPress={() => setVisible(true)}>
          {item?.sent ? (
            <Text
              fontSize={13}
              fontFamily={'Jost-Medium'}
              color={item?.sent ? 'white' : 'black'}>
              {item?.sent}
            </Text>
          ) : (
            <Text color={item?.recieved ? 'white' : 'black'}>
              {item?.recieved}
            </Text>
          )}

          <Row alignSelf={'flex-end'} alignItems={'center'} mt={4}>
            <Text
              color={item?.sent ? 'txtColor' : 'black'}
              mr={2}
              fontSize={10}>
              {item?.time}
            </Text>
            {item?.recieved ? (
              <Icon
                size="4"
                _light={{
                  color: 'black',
                }}
                _dark={{
                  color: 'coolGray.400',
                }}
                as={MaterialIcons}
                name={'done-all'}
              />
            ) : null}
          </Row>
        </Pressable>
      </View>
    );
  };

  return (
    <View bg={'black'} flex={1}>
      <View mx={5} mt={5}>
        <ChatScreen />
      </View>
      <View mx={5} mt={5} mb={16} flex={1}>
        <FlatList
          data={chat}
          ref={flatListRef}
          showsVerticalScrollIndicator={false}
          renderItem={renderConversation}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      {/* <View mt={5}> */}
      <Row alignItems={'center'} position={'absolute'} bottom={5} mx={5}>
        <Input
          bg={'grey.500'}
          _focus={{bg: 'grey.500'}}
          placeholder={'Type a message'}
          w={'85%'}
          color={'txtColor'}
          p={2}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          borderWidth={0}
          borderRadius={12}
          InputLeftElement={
            <Icon
              as={
                <Image
                  source={require('../../assets/happiness.png')}
                  h={5}
                  w={5}
                  resizeMode="contain"
                  alt={'img'}
                />
              }
              ml={2}
            />
          }
        />
        <Pressable>
          <Image
            source={require('../../assets/send.png')}
            h={10}
            w={10}
            alt={'img'}
            ml={2}
          />
        </Pressable>
      </Row>
      <AlertModal
        modalVisible={visible}
        cancelPress={() => {
          setVisible(false);
        }}
        fromChat
        heading={'Speak to AI'}
        message={'Let’s speak to AI about John Doe'}
        btntxt1={'Get Started'}
        onPress={() => {
          navigation.navigate('AiFeedback');
          setVisible(false);
        }}></AlertModal>
      {visible === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </View>
    // </View>
  );
};
export default Chatting;

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
