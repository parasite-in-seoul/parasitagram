import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedScreen = () => {
  return (
    <View style={styles.feedScreenContainer}>
      <Text>This is FeedScreen</Text>
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
