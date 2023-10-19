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
import {FlatList, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeScreenComp from './components/HomeScreenCom';
import SearchBox from './components/SearchBox';

const SearchScreen = ({navigation}) => {
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
  const [searchText, setSearchText] = React.useState('');
  const [searchHistory, setSearchHistory] = React.useState([
    'Sofia Rodriguez',
    'Sofia Lopez',
    'Sofia Ramirez',
    'Sofia Morales',
  ]);
  const [found, setFound] = React.useState();

  const handleSearch = () => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const isFound = searchHistory.includes(lowerCaseSearchText);

    // Update search history
    setSearchHistory(prevHistory =>
      isFound ? prevHistory : [...prevHistory, lowerCaseSearchText],
    );

    // Clear the input
    setSearchText('');
  };

  const highlightMatches = item => {
    const lowerCaseSearchText = searchText.toLowerCase();

    if (!lowerCaseSearchText) {
      // No search text, return the original item
      return (
        <Pressable
          onPress={() => {
            navigation.navigate('OtherUser');
            setFocued(false);
          }}>
          <Text style={styles.historyItem}>{item}</Text>
          <Divider my={2} />
        </Pressable>
      );
    }

    // Split the item into parts based on the search text
    const parts = item.split(new RegExp(`(${lowerCaseSearchText})`, 'gi'));

    return (
      <Pressable
        onPress={() => {
          navigation.navigate('OtherUser');
          setFocued(false);
        }}>
        <Text style={styles.historyItem}>
          {parts.map((part, index) =>
            part.toLowerCase() === lowerCaseSearchText ? (
              <Text key={index} style={styles.found}>
                {part}
              </Text>
            ) : (
              part
            ),
          )}
        </Text>
        <Divider my={2} />
        {/* <Text ml={2} color={'white'} fontSize={14} fontFamily={'Jost-Regular'}>
          Sofia Lopez
        </Text>
        <Divider my={2} />
        <Text ml={2} color={'white'} fontSize={14} fontFamily={'Jost-Regular'}>
          Sofia Ramirez
        </Text>
        <Divider my={2} />
        <Text ml={2} color={'white'} fontSize={14} fontFamily={'Jost-Regular'}>
          Sofia Morales
        </Text> */}
      </Pressable>
    );
  };

  const renderItem = ({item}) => highlightMatches(item);

  return (
    <View flex={1} bg={'black'}>
      <View mt={5} mx={3} flexDir={'row'} alignItems={'center'}>
        <Pressable onPress={() => navigation.goBack()}>
          <Entypo name={'chevron-left'} size={30} color={'white'} />
        </Pressable>
        <Input
          onTouchStart={() => setFocued(true)}
          onFocus={() => console.log('focus')}
          onBlur={() => {
            handleSearch();
            // setTimeout(() => {
            //   setFocued(false);
            // }, 2000);
          }}
          backgroundColor={'#2F2F2F'}
          value={searchText}
          onChangeText={setSearchText}
          mx={4}
          borderRadius={12}
          placeholder="search here"
          color={'txtColor'}
          fontSize={14}
          borderWidth={0}
          w={'85%'}
        />
      </View>
      <ScrollView>
        <View mx={5} my={5}>
          <Text color={'pro'} fontSize={18} fontFamily={'Jost-Medium'}>
            Recent Searches
          </Text>
          <HomeScreenComp data={data} fromSearches />
        </View>
      </ScrollView>
      {focused === true && (
        <View
          bg={'#2F2F2F'}
          position={'absolute'}
          borderRadius={10}
          zIndex={999}
          h={48}
          w={'78%'}
          top={20}
          right={5}>
          <View m={2} mx={4} my={4}>
            <FlatList
              data={searchHistory}
              renderItem={renderItem}
              keyExtractor={item => item}
              //   style={styles.historyList}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default SearchScreen;
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
