import React, { useEffect } from 'react';
import Navigation from './src/components/Navigation';
import { ContextProveedor } from './src/ContextPrueba';

import OneSignal from 'react-native-onesignal';

const App = () => {
  return (
    <ContextProveedor>
      <Navigation />
    </ContextProveedor>
  );
};

export default App;
