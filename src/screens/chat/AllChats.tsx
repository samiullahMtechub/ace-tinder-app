import React, {useState} from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  ImageBackground,
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
} from 'native-base';
import {SwipeListView} from 'react-native-swipe-list-view';
// import {MaterialIcons, Ionicons} from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import AlertModal from '../../components/Modal/AlertModal';

function AllChats({navigation}) {
  const [mode, setMode] = useState('Basic');
  const [connections, setConnections] = useState([
    {
      id: 1,
      img: require('../../assets/home1.png'),
      name: 'Olivia',
      message: 'Okay see you soon',
      time: '12:32 AM',
      recieved: '2',
      status: 'rec',
    },
    {
      id: 2,
      img: require('../../assets/home2.png'),
      name: 'Rose',
      message: 'Thankyou Alex after interested',
      time: '12:22 AM',
      sent: '2',
      status: 'sent',
    },
    {
      id: 3,
      img: require('../../assets/home3.png'),
      name: 'Isabell',
      message: 'Do you have time in sunday ?',
      time: '12:20 AM',
      sent: '2',
      status: 'seen',
    },
    {
      id: 4,
      img: require('../../assets/home4.png'),
      name: 'Emma',
      message: 'Where your home ? I want . . .',
      time: '12:08 AM',
      sent: '2',
      status: 'seen',
    },
    {
      id: 5,
      img: require('../../assets/home6.png'),
      name: 'Isabell',
      message: 'Okee makasih yaa waktunya',
      time: '12:08 AM',
      sent: '2',
      status: 'sent',
    },
    {
      id: 6,
      img: require('../../assets/home6.png'),
      name: 'Sofia',
      message: 'Maaf yaa kalo pernah ngerepotin',
      time: '12:32 AM',
      sent: '2',
      status: 'sent',
    },
  ]);
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Row mt={5} mx={6} justifyContent={'space-between'} alignItems={'center'}>
        <Text color={'pro'} fontSize={26} fontFamily={'Jost-SemiBold'}>
          Chat
        </Text>
        <Row alignItems={'center'}>
          <Pressable onPress={() => navigation.navigate('Callhistory')}>
            <Image
              source={require('../../assets/callhistory.png')}
              h={5}
              w={5}
              resizeMode={'contain'}
              alt={'chat'}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate('Search');
            }}>
            <Image
              ml={4}
              source={require('../../assets/search.png')}
              h={5}
              w={5}
              resizeMode={'contain'}
              alt={'chat'}
            />
          </Pressable>
        </Row>
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
            <Text color={'txtColor'} fontSize={10} ml={2}>
              (20)
            </Text>
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
                  <Avatar source={item?.img} size={'md'} />
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
        <Text
          mt={6}
          mb={3}
          mx={6}
          textAlign="left"
          fontSize={16}
          fontFamily={'Jost-SemiBold'}
          color={'white'}>
          Converstations
        </Text>

        <Basic />
      </ScrollView>
      <Pressable
        onPress={() => navigation.navigate('Games')}
        position={'absolute'}
        bottom={0}
        right={0}>
        <Image
          source={require('../../assets/games.png')}
          h={20}
          w={20}
          alt={'img'}
        />
      </Pressable>
    </ImageBackground>
  );
}

function Basic() {
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
        my={2}
        borderColor={'grey.500'}
        onPress={() => navigation.navigate('Chatting')}
        alignItems="center"
        bg="black"
        // borderBottomColor="trueGray.200"View
        borderWidth={1}
        borderRadius={12}
        justifyContent="center"
        height={50}
        underlayColor={'#AAA'}
        _pressed={{
          bg: 'black',
        }}
        p={2}>
        <HStack
          width="100%"
          px={4}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <HStack>
            <Avatar size={'sm'} source={item?.img} />
            <Box ml={5}>
              <Text color={'white'} fontFamily={'Jost-SemiBold'} fontSize={14}>
                {item?.name}
              </Text>
              <Text color={'txtColor'} fontSize={12} numberOfLines={1}>
                {item?.message}
              </Text>
            </Box>
          </HStack>
          <Box alignItems={'center'}>
            <Text color={'txtColor'} mb={3} fontSize={10} numberOfLines={1}>
              {item?.time}
            </Text>
            {item?.status === 'sent' ? (
              <Icon
                size="4"
                _light={{
                  color: 'txtColor',
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
                bg={'pro'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text fontSize={10}>{item?.recieved}</Text>
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
        p={4}
        ml="auto"
        cursor="pointer"
        borderRadius={10}
        bg="#F9444933"
        justifyContent="center"
        onPress={() => navigation.navigate('Report')}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/report.png')}
          h={4}
          w={4}
          alt={'img'}
          resizeMode={'contain'}
        />
      </Pressable>
      <Pressable
        mx={2}
        px={4}
        cursor="pointer"
        borderRadius={10}
        bg="#F9444933"
        justifyContent="center"
        onPress={() => navigation.navigate('Disqualify')}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/delete-user.png')}
          h={4}
          w={4}
          alt={'img'}
          resizeMode={'contain'}
        />
      </Pressable>
      <Pressable
        px={4}
        cursor="pointer"
        borderRadius={10}
        bg="#F9444933"
        justifyContent="center"
        onPress={() => setActive(true)}
        _pressed={{
          opacity: 0.5,
        }}>
        <Image
          source={require('../../assets/bin.png')}
          h={4}
          w={4}
          alt={'img'}
          resizeMode={'contain'}
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
          setActive(false);
        }}
        heading={'Delete Chat'}
        message={'Are you sure you want to delete chat with sahara ardia?'}
        btntxt1={'Delete'}
        btntxt2
        onPress={() => {
          setActive(false);
        }}></AlertModal>
    </Box>
  );
}

export default AllChats;
