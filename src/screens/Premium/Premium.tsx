import {Text, Image, View} from 'native-base';
import React, {useState} from 'react';
import {
  ScrollView,
  //   Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import AButtons from '../../components/button/AButtons';

const Premium = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const width = Dimensions.get('window').width;

  const handlePageChange = event => {
    const offset = event.nativeEvent.contentOffset.x;
    const currentPage = Math.floor(offset / width);
    setCurrentPage(currentPage);
  };

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
        horizontal
        // pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handlePageChange}>
        {/* Add your images here */}
        <Image
          source={require('../../assets/p1.png')}
          resizeMode={'contain'}
          h={500}
        />
        <Image
          source={require('../../assets/p2.png')}
          resizeMode={'contain'}
          h={500}
        />
        <Image
          source={require('../../assets/p4.png')}
          resizeMode={'contain'}
          h={500}
        />
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
      <View mx={7}>
        <AButtons label={'Pay Now'} />
      </View>
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
