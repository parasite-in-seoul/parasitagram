import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabNavigatorParamList } from '../types/navigation';

import FeedScreen from '../screens/feed-screen';
import UploadScreen from '../screens/upload-screen';
import ProfileScreen from '../screens/profile-screen';

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

const MainTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedScreen} />
    <Tab.Screen name="Upload" component={UploadScreen} />
    <Tab.Screen name="MyProfile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
