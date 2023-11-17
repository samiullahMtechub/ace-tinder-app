import React, {useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  Center,
  Image,
  Row,
  ScrollView,
  Stack,
  FavouriteIcon,
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
// import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AlertModal from '../../components/Modal/AlertModal';
var {width, height} = Dimensions.get('window');

function AllChats({navigation}) {
  const [mode, setMode] = useState('Basic');
  const [layer, setLayer] = React.useState(false);
  const [connections, setConnections] = useState([
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Olivia',
      message: 'Okay see you soon',
      time: '12:32 AM',
      recieved: '2',
      status: 'online',
    },
    {
      id: 2,
      img: require('../../assets/home2.png'),
      name: 'Rose',
      message: 'Thankyou Alex after interested',
      time: '12:22 AM',
      sent: '2',
      status: 'offline',
    },
    {
      id: 3,
      img: require('../../assets/home3.png'),
      name: 'Isabell',
      message: 'Do you have time in sunday ?',
      time: '12:20 AM',
      sent: '2',
      status: 'online',
    },
    {
      id: 4,
      img: require('../../assets/home4.png'),
      name: 'Emma',
      message: 'Where your home ? I want . . .',
      time: '12:08 AM',
      sent: '2',
      status: 'offline',
    },
    {
      id: 5,
      img: require('../../assets/home6.png'),
      name: 'Isabell',
      message: 'Okee makasih yaa waktunya',
      time: '12:08 AM',
      sent: '2',
      status: 'online',
    },
    {
      id: 6,
      img: require('../../assets/home6.png'),
      name: 'Sofia',
      message: 'Maaf yaa kalo pernah ngerepotin',
      time: '12:32 AM',
      sent: '2',
      status: 'online',
    },
  ]);
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Row mt={5} mx={6} justifyContent={'space-between'} alignItems={'center'}>
        <Image
          source={require('../../assets/onboardlogo.png')}
          h={16}
          w={16}
          alt={'im'}
          resizeMode={'contain'}
        />
        <Text
          color={'pro'}
          fontSize={30}
          fontFamily={'Diagramm-Regular'}
          textAlign={'center'}>
          Chats
        </Text>

        <Text
          color={'transparent'}
          fontSize={26}
          fontFamily={'Jost-SemiBold'}
          textAlign={'center'}>
          Chat
        </Text>
      </Row>
      <ScrollView>
        <Row
          mt={8}
          mx={6}
          mb={5}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Row alignItems={'center'}>
            <Text color={'white'} fontSize={16} fontFamily={'Jost-SemiBold'}>
              Connections
            </Text>
            <FavouriteIcon color={'primary.400'} h={5} w={5} ml={2} />
          </Row>
          <Pressable
            onPress={() => {
              navigation.navigate('AllConnections');
            }}>
            <Text color={'pro'} fontSize={14}>
              See all
            </Text>
          </Pressable>
        </Row>
        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true}>
            {connections?.map(item => {
              return (
                <Stack
                  alignItems={'center'}
                  key={item?.id}
                  mr={4}
                  ml={item?.id === 1 ? 6 : 0}>
                  <Stack>
                    <Avatar source={item?.img} size={'md'} />
                    {item?.status === 'online' ? (
                      <Stack
                        h={2}
                        w={2}
                        rounded={'full'}
                        position={'absolute'}
                        bottom={0}
                        right={2}
                        bg={'#04C200'}></Stack>
                    ) : null}
                  </Stack>
                  <Text
                    mt={2}
                    color={'white'}
                    fontSize={12}
                    fontFamily={'Jost-Regular'}>
                    {item?.name}
                  </Text>
                </Stack>
              );
            })}
          </ScrollView>
        </View>
        <Row
          mt={6}
          mb={3}
          mx={6}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text
            textAlign="left"
            fontSize={16}
            fontFamily={'Jost-SemiBold'}
            color={'white'}>
            Converstations
          </Text>
          <Row alignItems={'center'}>
            <Pressable onPress={() => navigation.navigate('CallHistory')}>
              <Image
                source={require('../../assets/callhistory.png')}
                h={5}
                w={5}
                resizeMode={'contain'}
                alt={'chat'}
              />
            </Pressable>
            <Pressable
              ml={3}
              onPress={() => {
                navigation.navigate('Search');
              }}>
              <Ionicons name={'search-outline'} size={20} color={'white'} />
            </Pressable>
          </Row>
        </Row>
        <Basic
          close={() => {
            setLayer(false);
          }}
          open={() => {
            setLayer(true);
          }}
        />
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Games')}
        position={'absolute'}
        bottom={0}
        right={4}>
        <Image
          source={require('../../assets/games.png')}
          h={16}
          w={16}
          alt={'img'}
        />
      </Pressable>
      {layer === true ? (
        <View style={[styles.overlay, {height: height}]} />
      ) : null}
    </ImageBackground>
  );
}
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
function Basic(props) {
  const navigation = useNavigation();
  const [active, setActive] = useState(false);
  const [listData, setListData] = useState([
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Sahara Ardia Fadia',
      message: 'Okay see you soon',
      time: '12:32 AM',
      recieved: '2',
      status: 'rec',
    },
    {
      id: 2,
      img: require('../../assets/home2.png'),
      name: 'Zahra Putri Stephanie',
      message: 'Thankyou Alex after interested',
      time: '12:22 AM',
      sent: '2',
      status: 'sent',
    },
    {
      id: 3,
      img: require('../../assets/home3.png'),
      name: 'Shiren Putri Sungkar',
      message: 'Do you have time in sunday ?',
      time: '12:20 AM',
      sent: '2',
      status: 'seen',
    },
    {
      id: 4,
      img: require('../../assets/home4.png'),
      name: 'Natasya Valentina',
      message: 'Where your home ? I want . . .',
      time: '12:08 AM',
      sent: '2',
      status: 'seen',
    },
    {
      id: 5,
      img: require('../../assets/home6.png'),
      name: 'Chesya Zhaharani',
      message: 'Okee makasih yaa waktunya',
      time: '12:08 AM',
      sent: '2',
      status: 'sent',
    },
    {
      id: 6,
      img: require('../../assets/home6.png'),
      name: 'Saqila Septiani Anggun',
      message: 'Maaf yaa kalo pernah ngerepotin',
      time: '12:32 AM',
      sent: '2',
      status: 'sent',
    },
  ]);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item, index}) => (
    <Box mx={5}>
      <Pressable
        my={1}
        borderColor={'grey.500'}
        onPress={() => navigation.navigate('Chatting')}
        alignItems="center"
        bg="white"
        // borderBottomColor="trueGray.200"View
        borderWidth={1}
        borderRadius={12}
        justifyContent="center"
        height={60}
        underlayColor={'#AAA'}
        _pressed={{
          bg: 'white',
        }}
        p={2}>
        <HStack
          width="100%"
          px={4}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <HStack alignItems={'center'}>
            <Stack>
              <Avatar size={'sm'} source={item?.img} />
              {item?.id === 1 ? (
                <Stack
                  h={2}
                  w={2}
                  rounded={'full'}
                  position={'absolute'}
                  bottom={0}
                  right={0}
                  bg={'#04C200'}></Stack>
              ) : null}
            </Stack>
            <Box ml={5}>
              <Text color={'black'} fontFamily={'Jost-SemiBold'} fontSize={14}>
                {item?.name}
              </Text>
              <Text color={'grey.400'} fontSize={12} numberOfLines={1}>
                {item?.message}
              </Text>
            </Box>
          </HStack>
          <Box alignItems={'center'}>
            <Text color={'grey.400'} mb={1} fontSize={10} numberOfLines={1}>
              {item?.time}
            </Text>
            {item?.status === 'sent' ? (
              <Icon
                size="4"
                _light={{
                  color: 'grey.400',
                }}
                _dark={{
                  color: 'coolGray.400',
                }}
                as={MaterialIcons}
                name={'done-all'}
              />
            ) : null}
            {item?.status === 'rec' ? (
              <Box
                rounded={'full'}
                h={4}
                w={4}
                bg={'primary.400'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text fontSize={10} color={'white'}>
                  {item?.recieved}
                </Text>
              </Box>
            ) : null}
          </Box>
        </HStack>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack pr={6} mt={2}>
      <Pressable
        // p={}
        ml="auto"
        // cursor="pointer"
        // borderRadius={10}
        // bg="#F9444933"
        justifyContent="center"
        onPress={() => navigation.navigate('Report')}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/report.png')}
          h={12}
          w={12}
          alt={'img'}
          resizeMode={'cover'}
        />
      </Pressable>
      <Pressable
        mx={2}
        // px={4}
        cursor="pointer"
        // borderRadius={10}

        onPress={() => navigation.navigate('Disqualify')}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/delete-user.png')}
          h={12}
          w={12}
          alt={'img'}
          resizeMode={'cover'}
        />
      </Pressable>
      <Pressable
        // px={4}
        // cursor="pointer"
        borderRadius={10}
        // justifyContent="center"
        onPress={() => {
          props.open && props.open('open');
          setActive(true);
        }}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/bin.png')}
          h={12}
          w={12}
          alt={'img'}
          resizeMode={'cover'}
        />
      </Pressable>
    </HStack>
  );

  return (
    <Box>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-170}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onRowDidOpen={onRowDidOpen}
      />
      <AlertModal
        modalVisible={active}
        cancelPress={() => {
          props.close && props.close('open');
          setActive(false);
        }}
        heading={'Delete Chat'}
        message={'Are you sure you want to delete chat with sahara ardia?'}
        btntxt1={'Delete'}
        btntxt2
        onPress={() => {
          props.close && props.close('open');

          setActive(false);
        }}></AlertModal>
    </Box>
  );
}

export default AllChats;
