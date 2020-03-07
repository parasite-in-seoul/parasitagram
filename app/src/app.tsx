import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainTabNavigator from './navigators/main-tab-navigator';

const App: FC = () => (
  <NavigationContainer>
    <MainTabNavigator />
  </NavigationContainer>
);

export default App;
