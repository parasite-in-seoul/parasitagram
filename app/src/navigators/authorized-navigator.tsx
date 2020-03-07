import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizedNavigatorParamList } from '../types/navigation';

import MainTabNavigator from './main-tab-navigator';
import UploadScreen from '../screens/upload-screen';

const Stack = createStackNavigator<AuthorizedNavigatorParamList>();

const AuthorizedNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Main" component={MainTabNavigator} />
    <Stack.Screen name="Upload" component={UploadScreen} />
  </Stack.Navigator>
);

export default AuthorizedNavigator;
