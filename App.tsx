import React from 'react';
import {StatusBar} from 'react-native';

import Home from './src/pages/Home';

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Home />
    </>
  );
}

export default App;
