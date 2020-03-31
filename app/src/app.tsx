import 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

Promise.all([SimpleLineIcons.loadFont(), MaterialCommunityIcons.loadFont()])
  .then(() => {
    console.log('all fonts are loaded');
  })
  .catch(e => {
    console.error('failed to load fonts', e);
  });

import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthorizedNavigator from './navigators/authorized-navigator';

const App: FC = () => (
  <NavigationContainer>
    <AuthorizedNavigator />
  </NavigationContainer>
);

export default App;
