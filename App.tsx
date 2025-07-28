import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { FormProvider } from './src/context/FormContext';

const App: React.FC = () => (
  <FormProvider>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </FormProvider>
);

export default App;