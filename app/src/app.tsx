import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainStackNavigator from './navigators/main-stack-navigator';

const App: FC = () => (
  <NavigationContainer>
    <MainStackNavigator />
  </NavigationContainer>
);

export default App;
