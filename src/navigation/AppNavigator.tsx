import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
//import LoginScreen from '../screens/LoginScreen';
import RegisterWelcomeScreen from '../screens/RegisterWelcomeScreen';
import ProfileTypeScreen from '../screens/ProfileTypeScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  RegisterWelcome: undefined;
  ProfileType: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="RegisterWelcome" component={RegisterWelcomeScreen} />
    <Stack.Screen name="ProfileType" component={ProfileTypeScreen} />
  </Stack.Navigator>
);

export default AppNavigator;