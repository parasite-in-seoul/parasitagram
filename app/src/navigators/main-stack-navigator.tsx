import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStackParamList } from '../types/navigation';

import HomeScreen from '../screens/home-screen';
import DetailScreen from '../screens/detail-screen';

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigator: FC = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Detail" component={DetailScreen} />
  </Stack.Navigator>
);

export default MainStackNavigator;
