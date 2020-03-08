import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedNavigatorParamList } from '../types/navigation';

type FeedScreenNavigationProp = StackNavigationProp<
  FeedNavigatorParamList,
  'Feeds'
>;

type Props = {
  navigation: FeedScreenNavigationProp;
};

const FeedScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.feedScreenContainer}>
      <Text>This is FeedScreen</Text>
      <Button
        title="Go to UserScreen"
        onPress={() => navigation.push('User')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feedScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;
