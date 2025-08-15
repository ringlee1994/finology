import React from 'react';
import { LogBox, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
LogBox.ignoreAllLogs();

import store from './src/store';
import theme from './src/theme';
import AppNav from './src/navigations/AppNav';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <AppNav />
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  )
}

export default App;