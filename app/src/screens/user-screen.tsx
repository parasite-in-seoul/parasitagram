import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FeedNavigatorParamList } from '../types/navigation';

type UserScreenNavigationProp = StackNavigationProp<
  FeedNavigatorParamList,
  'User'
>;

type Props = {
  navigation: UserScreenNavigationProp;
};

const UserScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.userScreenContainer}>
      <Text>This is UserScreen</Text>
      <Button
        title="Go to PostsScreen"
        onPress={() => navigation.push('Posts')}
      />
      <Button
        title="Go to DirectScreen"
        onPress={() => navigation.push('Direct')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserScreen;
