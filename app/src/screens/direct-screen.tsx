import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DirectScreen: FC = () => {
  return (
    <View style={styles.directScreenContainer}>
      <Text>This is DirectScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  directScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DirectScreen;
