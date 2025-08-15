import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { styles } from '../shared';

const LoadingIndicator = () => {
  return (
    <SafeAreaView style={[styles.center, styles.backgroundObject.white]}>
        <ActivityIndicator size={60} animating={true} color={styles.color.purple} />
    </SafeAreaView>
  );
};

export default LoadingIndicator;
