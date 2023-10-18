import {View, Text, Row, Avatar, VStack} from 'native-base';
import React from 'react';
const NotifiComp = props => {
  return (
    <>
      {props?.data?.map(item => {
        return (
          <View
            borderColor={item?.status === 'early' ? 'pro' : 'grey.500'}
            bg={item?.status === 'early' ? '#F9444933' : null}
            mb={5}
            borderWidth={1}
            borderRadius={10}
            key={item?.id}>
            <Row alignItems={'center'} m={2}>
              <Row alignItems={'center'}>
                <Avatar source={item?.img} h={9} w={9} mr={2} />
                <VStack>
                  <Row alignItems={'center'} justifyContent={'space-between'}>
                    <Text
                      color={'white'}
                      fontSize={14}
                      fontFamily={'Jost-Medium'}>
                      {item?.title}
                    </Text>
                    <Text
                      position={'absolute'}
                      right={-12}
                      color={'txtColor'}
                      fontSize={10}
                      fontFamily={'Jost-Regular'}>
                      {item?.time}
                    </Text>
                  </Row>
                  <Text
                    numberOfLines={1}
                    mt={2}
                    color={'txtColor'}
                    fontSize={12}
                    fontFamily={'Jost-Regular'}>
                    {item?.message}
                  </Text>
                </VStack>
              </Row>
            </Row>
          </View>
        );
      })}
    </>
  );
};
export default NotifiComp;
