import {Text, Image, View, ScrollView, Row} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  //   Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import AButtons from '../../components/button/AButtons';
import AlertModal from '../../components/Modal/AlertModal';

const Premium = ({navigation}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (active === true) {
        setActive(false);
        navigation.navigate('Tabs', {screen: 'Home'});
      }
    }, 2000);
  });
  const width = Dimensions.get('window').width;

  const handlePageChange = event => {
    const offset = event.nativeEvent.contentOffset.x;
    const currentPage = Math.floor(offset / width);
    setCurrentPage(currentPage);
  };
  const data = [
    {
      id: 1,
      img: require('../../assets/p1.png'),
    },
    {
      id: 2,
      img: require('../../assets/p2.png'),
    },
    {
      id: 3,
      img: require('../../assets/p4.png'),
    },
    {
      id: 4,
      img: require('../../assets/p3.png'),
    },
  ];
  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.container}>
      <View style={{margin: 10, marginTop: 10}} m={5} mx={8}>
        <Text color={'pro'} fontSize={22} fontFamily={'Jost-SemiBold'}>
          Go Premium
        </Text>
      </View>

      <ScrollView
        mx={5}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}>
        <Row h={500}>
          {/* Add your images here */}
          {data?.map(item => {
            return (
              <Image
                alt="img"
                source={item?.img}
                // size={'2xl'}
                borderRadius={20}
                mx={2}
                h={490}
                w={300}
                // flex={1}
                // h={500}
                resizeMode={'cover'}
              />
            );
          })}
        </Row>
        {/* <View
          position={'absolute'}
          bottom={24}
          flexDir={'row'}
          alignSelf={'center'}>
          {[...Array(3).keys()].map(index => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentPage ? '#3498db' : '#ABABAB',
                },
              ]}
            />
          ))}
        </View> */}
        {/* Add more images as needed */}
      </ScrollView>
      {/* </View> */}
      <View mx={7} mb={5}>
        <AButtons label={'Pay Now'} onPress={() => setActive(true)} />
      </View>
      <AlertModal
        modalVisible={active}
        // cancelPress={() => {
        //   setActive(false);
        // }}
        fromPremium
        heading={'Subscription Paid'}
        message={'Updating your application'}

        // btntxt2
      ></AlertModal>
      {/* Add pagination dots */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200, // Adjust the height as needed
  },
  paginationDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default Premium;
