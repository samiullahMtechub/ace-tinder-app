import {
  View,
  Text,
  Pressable,
  Input,
  ScrollView,
  Row,
  Divider,
} from 'native-base';
import React from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenComp from './components/HomeScreenCom';
import SearchBox from './components/SearchBox';

const AllConnections = ({navigation}) => {
  const [focused, setFocued] = React.useState(false);
  const data = [
    {
      id: 1,
      bgimg: require('../../assets/Aspades.png'),
      blur: require('../../assets/blur1.png'),
      img: require('../../assets/home1.png'),
      name: 'Sofia',
      status: 'offline',
    },
    {
      id: 2,
      bgimg: require('../../assets/kingbg.png'),
      blur: require('../../assets/blur2.png'),
      img: require('../../assets/search2.png'),
      name: 'Isabell',
      status: 'offline',
    },

    {
      id: 3,
      bgimg: require('../../assets/heartcard10.png'),
      blur: require('../../assets/blur3.png'),
      img: require('../../assets/search3.png'),
      name: 'Scarlet',
      status: 'online',
    },

    {
      id: 4,
      bgimg: require('../../assets/clubcard9.png'),
      img: require('../../assets/search4.png'),
      blur: require('../../assets/blursearch4.png'),
      name: 'Isabell',
      status: 'online',
    },

    {
      id: 5,
      bgimg: require('../../assets/8bgclub.png'),
      blur: require('../../assets/blur5.png'),
      img: require('../../assets/search5.png'),
      name: 'Daniel',
      status: 'online',
    },

    {
      id: 6,
      bgimg: require('../../assets/jokerbg.png'),
      img: require('../../assets/home2.png'),
      blur: require('../../assets/blur6.png'),
      name: 'Sameul',
      status: 'online',
    },
  ];

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <View
        mt={5}
        mx={3}
        mr={5}
        flexDir={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Entypo name={'chevron-left'} size={30} color={'white'} />
        </Pressable>
        <Text color={'white'} fontSize={18} fontFamily={'Jost-SemiBold'}>
          Connections
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <Ionicons name={'search-outline'} size={20} color={'white'} />
        </Pressable>
      </View>
      <ScrollView>
        <View mx={5} my={5}>
          <HomeScreenComp data={data} fromSearches />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default AllConnections;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  historyList: {
    marginTop: 10,
  },
  historyItem: {
    color: '#CCCCCC',
    fontSize: 16,
    marginBottom: 5,
  },
  found: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

//  {
//    recentSearchData?.map((item, index) => (
//      <Row mt={1} alignItems="center">
//        {/* <AntDesign name="clockcircleo" size={18} color="black" /> */}
//        <Text
//          mx="4"<CancelRecentSearch width={10} height={10} />
//          key={index}
//          fontSize="md"
//          onPress={() => {
//            handleRecentSearch(item.recentSearch);
//          }}>
//          {item.recentSearch}
//        </Text>
//      </Row>
//    ));
//  }
//
