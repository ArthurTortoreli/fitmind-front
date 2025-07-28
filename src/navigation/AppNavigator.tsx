import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
//import LoginScreen from '../screens/LoginScreen';
import RegisterWelcomeScreen from '../screens/RegisterWelcomeScreen';
import ProfileTypeScreen from '../screens/ProfileTypeScreen';
import ProfessionalNameScreen from '../screens/ProfessionalNameScreen';
import ProfessionalContactScreen from '../screens/ProfessionalContactScreen';
import ProfessionalRoleScreen from '../screens/ProfessionalRoleScreen';
import ProfessionalServiceScreen from '../screens/ProfessionalServiceScreen';
import ProfessionalVolumeScreen from '../screens/ProfessionalVolumeScreen';
import ConfirmationScreen from '../screens/ConfirmationScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  RegisterWelcome: undefined;
  ProfileType: undefined;
  ProfessionalName: undefined;
  ProfessionalContact: undefined;
  ProfessionalRole: undefined;
  ProfessionalService: undefined;
  ProfessionalVolume: undefined;
  Confirmation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="RegisterWelcome" component={RegisterWelcomeScreen} />
    <Stack.Screen name="ProfileType" component={ProfileTypeScreen} />
    <Stack.Screen name="ProfessionalName" component={ProfessionalNameScreen} />
    <Stack.Screen name="ProfessionalContact" component={ProfessionalContactScreen} />
    <Stack.Screen name="ProfessionalRole" component={ProfessionalRoleScreen} />
    <Stack.Screen name="ProfessionalService" component={ProfessionalServiceScreen} />
    <Stack.Screen name="ProfessionalVolume" component={ProfessionalVolumeScreen} />
    <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
  </Stack.Navigator>
);

export default AppNavigator;