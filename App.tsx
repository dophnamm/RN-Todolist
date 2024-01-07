import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/pages/Home';
import {globalStyles} from './src/styles/globalStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={globalStyles['flex-1']}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Home />
    </SafeAreaView>
  );
}

export default App;
