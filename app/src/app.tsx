import 'react-native-gesture-handler';

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizedNavigator from './navigators/authorized-navigator';

const App: FC = () => (
  <NavigationContainer>
    <AuthorizedNavigator />
  </NavigationContainer>
);

export default App;
