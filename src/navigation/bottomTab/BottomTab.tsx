import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SignIn from '../../screens/auth/SignIn';
import OnBoarding from '../../screens/auth/OnBoarding';
import AddAge from '../../screens/auth/AddAge';
import OnBoarding3 from '../../screens/auth/OnBoarding3';
import HomeScreen from '../../screens/Dashboard/HomeScreen';
import AllChats from '../../screens/chat/AllChats';
import Premium from '../../screens/Premium/Premium';
import Settings from '../../screens/settings/Settings';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#f258d1',
        tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: [
          {
            backgroundColor: 'white',
            borderColor: '#f258d1',
            // height: '8%',
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              <MaterialIcons
                name="home-filled"
                size={28}
                style={{color: focused ? '#f258d1' : '#2F2F2F'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={AllChats}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              {!focused ? (
                <Image
                  source={require('../../assets/unSelectedChat.png')}
                  h={6}
                  w={6}
                  alt="png"
                />
              ) : (
                <Image
                  source={require('../../assets/selectedChat.png')}
                  h={6}
                  w={6}
                  alt="png"
                />
              )}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              {focused ? (
                <Image
                  source={require('../../assets/selectedSubscribe.png')}
                  h={6}
                  w={6}
                  alt="png"
                />
              ) : (
                <Image
                  source={require('../../assets/unSelectedSubscribe.png')}
                  h={6}
                  w={6}
                  alt="png"
                />
              )}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              <Feather
                name="settings"
                size={22}
                style={{color: focused ? '#f258d1' : '#2F2F2F'}}
              />
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="AllOrders"
        component={TotalBookings}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              <Icon
                name="shoppingcart"
                size={25}
                style={{color: focused ? 'white' : '#748c94'}}
              />
            </View>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabs;
