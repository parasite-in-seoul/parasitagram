import React, { FC } from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MainTabNavigatorParamList } from '../types/navigation';

import FeedNavigator from './feed-navigator';
import UploadScreen from '../screens/upload-screen';
import UserScreen from '../screens/user-screen';

type Options = {
  route: RouteProp<MainTabNavigatorParamList, keyof MainTabNavigatorParamList>;
};

const tabScreenOptions = ({ route }: Options): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName = '';

    switch (route.name) {
      case 'Feed':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'Upload':
        iconName = focused ? 'plus-box' : 'plus-box-outline';
        break;
      case 'MyProfile':
        iconName = focused ? 'account-circle' : 'account-circle-outline';
        break;
      default:
        break;
    }

    // You can return any component that you like here!
    return <MCIcons name={iconName} size={size} color={color} />;
  },
});

const Tab = createBottomTabNavigator<MainTabNavigatorParamList>();

const MainTabNavigator: FC = () => (
  <Tab.Navigator screenOptions={tabScreenOptions}>
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
