import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../../../shared';
import { TEXT_STRING } from '../../../constants';

const EmptyList = () => {
  return (
    <View style={styles.center}>
      <Text>{TEXT_STRING.NO_USERS}</Text>
    </View>
  );
};

export default EmptyList;
