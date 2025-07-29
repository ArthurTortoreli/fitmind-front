import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext';
import { FormProvider } from './src/context/FormContext';
import AppNavigator from './src/navigation/AppNavigator';

const App: React.FC = () => (
  <AuthProvider>
    <FormProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </FormProvider>
  </AuthProvider>
);

export default App;
