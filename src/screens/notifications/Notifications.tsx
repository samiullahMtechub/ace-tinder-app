import {View, Text, ScrollView} from 'native-base';
import React from 'react';
import NotifiComp from './components/NotifiComp';
import Header from '../../components/Header/Header';
import {ImageBackground} from 'react-native';

const Notifications = () => {
  const data = [
    {
      id: 1,
      title: 'Sarah Disqualified you',
      message: `Our interests and values didn't quite align.....`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
      status: 'early',
    },
    {
      id: 2,
      title: 'New message from sarah',
      message: `Do you have time in sunday ?`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
      status: 'early',
    },
    {
      id: 3,
      title: 'Sarah Disqualified you',
      message: `Our interests and values didn't quite align.....`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 4,
      title: 'New message from sarah',
      message: `Do you have time in sunday ?`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 5,
      title: 'Sarah Disqualified you',
      message: `Our interests and values didn't quite align.....`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 6,
      title: 'New message from sarah',
      message: `Do you have time in sunday ?`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 7,
      title: 'Sarah Disqualified you',
      message: `Our interests and values didn't quite align.....`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 8,
      title: 'New message from sarah',
      message: `Do you have time in sunday ?`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
    {
      id: 9,
      title: 'Sarah Disqualified you',
      message: `Our interests and values didn't quite align.....`,
      time: '12:20 AM',
      img: require('../../assets/notifi.png'),
    },
  ];
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
      <Header title={'Notifications'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View m={5}>
          <NotifiComp data={data} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default Notifications;
