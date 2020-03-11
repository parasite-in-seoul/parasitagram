import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CommentsScreen: FC = () => {
  return (
    <View style={styles.commentsScreenContainer}>
      <Text>This is CommentsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentsScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CommentsScreen;
