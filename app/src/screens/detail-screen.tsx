import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '../types/navigation';

type DetailScreenRouteProp = RouteProp<MainStackParamList, 'Detail'>;

type Props = {
  route: DetailScreenRouteProp;
};

const DetailScreen = ({
  route: {
    params: { userId },
  },
}: Props) => {
  return (
    <View style={styles.detailScreenContainer}>
      <Text>Detail Screen</Text>
      <Text>{`User number is : ${userId}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailScreen;
