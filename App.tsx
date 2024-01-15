import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';
import {globalStyles} from './src/styles/globalStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles['flex-1']}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
