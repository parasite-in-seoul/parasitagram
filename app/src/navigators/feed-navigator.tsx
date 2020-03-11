import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from '../screens/feed-screen';
import UserScreen from '../screens/user-screen';
import PostsScreen from '../screens/posts-screen';
import DirectScreen from '../screens/direct-screen';
import CommentsScreen from '../screens/comments-screen';

const Stack = createStackNavigator();

const FeedNavigator: FC = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen name="Feeds" component={FeedScreen} />
    <Stack.Screen name="User" component={UserScreen} />
    <Stack.Screen name="Posts" component={PostsScreen} />
    <Stack.Screen name="Comments" component={CommentsScreen} />
    <Stack.Screen name="Direct" component={DirectScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
