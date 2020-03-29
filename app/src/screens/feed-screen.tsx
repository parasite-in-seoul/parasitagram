import React from 'react';
import { ScrollView, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedNavigatorParamList } from '../types/navigation';

import Post from '../components/post';

type FeedScreenNavigationProp = StackNavigationProp<
  FeedNavigatorParamList,
  'Feeds'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

const FeedScreen = ({ navigation }: Props) => {
  return (
    <ScrollView>
      <Post />

      <Button
        title="Go to UserScreen"
        onPress={() => navigation.push('User')}
      />
    </ScrollView>
  );
};

export default FeedScreen;
