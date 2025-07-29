import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
//import LoginScreen from '../screens/LoginScreen';
import RegisterWelcomeScreen from '../screens/RegisterWelcomeScreen';
import ProfileTypeScreen from '../screens/ProfileTypeScreen';
import ProfessionalNameScreen from '../screens/professional/ProfessionalNameScreen';
import ProfessionalContactScreen from '../screens/professional/ProfessionalContactScreen';
import ProfessionalRoleScreen from '../screens/professional/ProfessionalRoleScreen';
import ProfessionalServiceScreen from '../screens/professional/ProfessionalServiceScreen';
import ProfessionalVolumeScreen from '../screens/professional/ProfessionalVolumeScreen';
import StudentDetailsScreen from '../screens/student/StudentDetailsScreen';
import StudentContactScreen from '../screens/student/StudentContactScreen';
import StudentGoalsScreen from '../screens/student/StudentGoalsScreen';
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
  StudentDetails: undefined;
  StudentContact: undefined;
  StudentGoals: undefined;
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

    <Stack.Screen name="StudentDetails" component={StudentDetailsScreen} />
    <Stack.Screen name="StudentContact" component={StudentContactScreen} />
    <Stack.Screen name="StudentGoals" component={StudentGoalsScreen} />
    <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
  </Stack.Navigator>
);

export default AppNavigator;