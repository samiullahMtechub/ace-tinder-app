import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import SignIn from '../../screens/auth/SignIn';
import OnBoarding from '../../screens/auth/OnBoarding';
import AddAge from '../../screens/auth/AddAge';
import OnBoarding3 from '../../screens/auth/OnBoarding3';
import HomeScreen from '../../screens/Dashboard/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#F94449',
        // tabBarShowLabel: false,
        headerShadowVisible: false,
        tabBarStyle: [
          {
            backgroundColor: 'black',
            borderColor: '#F94449',
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
              <Octicons
                name="home"
                size={22}
                style={{color: focused ? '#F94449' : 'white'}}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={AddAge}
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
        name="Adjust Availability"
        component={OnBoarding}
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
        component={SignIn}
        options={{
          tabBarIcon: ({focused}) => (
            <View alignItems={'center'} justifyContent={'center'}>
              <Feather
                name="settings"
                size={22}
                style={{color: focused ? '#F94449' : 'white'}}
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
