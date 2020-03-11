import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UploadScreen: FC = () => {
  return (
    <View style={styles.uploadScreenContainer}>
      <Text>This is UploadScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UploadScreen;
