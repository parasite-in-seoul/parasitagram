import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedNavigatorParamList } from '../types/navigation';

type FeedScreenNavigationProp = StackNavigationProp<
  FeedNavigatorParamList,
  'Posts'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

const PostsScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.postsScreenContainer}>
      <Text>This is PostsScreen</Text>
      <Button
        title="Go to UserScreen"
        onPress={() => navigation.push('User')}
      />
      <Button
        title="Go to CommentsScreen"
        onPress={() => navigation.push('Comments')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PostsScreen;
