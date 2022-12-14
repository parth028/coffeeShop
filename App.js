import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Onboarding from './src/screens/Onboarding';
import Home from './src/screens/Home';
import AppNavigation from './src/navigation/AppNavigation';
const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <AppNavigation />
    </>
  );
};

export default App;
