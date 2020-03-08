import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabNavigatorParamList } from '../types/navigation';

import FeedNavigator from './feed-navigator';
import UploadScreen from '../screens/upload-screen';
import UserScreen from '../screens/user-screen';

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

const MainTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{ headerMode: 'float' }}
    />
    <Tab.Screen name="Upload" component={UploadScreen} />
    <Tab.Screen name="MyProfile" component={UserScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
