import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainTabNavigatorParamList } from '../types/navigation';

import FeedScreen from '../screens/feed-screen';
import ProfileScreen from '../screens/profile-screen';

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

const MainTabNavigator: FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={FeedScreen} />
    <Tab.Screen name="MyProfile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainTabNavigator;
