/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App'; // Your main App component
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppWrapper = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
