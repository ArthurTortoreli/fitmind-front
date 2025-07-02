import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type RegisterProps = NativeStackScreenProps<RootStackParamList, 'RegisterWelcome'>;

const RegisterWelcomeScreen: React.FC<RegisterProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Seja bem-vindo! Vamos configurar o FitMind para te ajudar a atingir seus objetivos.</Text>
    <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('ProfileType')}>
      <Text style={styles.continueText}>Continuar</Text>
    </TouchableOpacity>
    <Text style={styles.orText}>OU</Text>
    <TouchableOpacity style={styles.socialButton} onPress={() => { /* mock */ }}>
      
      <Text style={styles.socialText}>Continuar com o Google</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.socialButton} onPress={() => { /* mock */ }}>
      
      <Text style={styles.socialText}>Continuar com a Apple</Text>
    </TouchableOpacity>
    <Text style={styles.footerText}>Para entender melhor como usamos seus dados, confira nossa Política de Privacidade.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#164863' },
  title: { color: '#FFFFFF', fontSize: 18, textAlign: 'center', marginVertical: 40 },
  continueButton: { backgroundColor: '#55D6BE', padding: 15, borderRadius: 8, alignItems: 'center' },
  continueText: { color: '#164863', fontWeight: 'bold' },
  orText: { color: '#FFFFFF', textAlign: 'center', marginVertical: 20 },
  socialButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 12, borderRadius: 8, marginVertical: 8 },
  icon: { width: 20, height: 20, marginRight: 10 },
  socialText: { color: '#164863', fontSize: 14 },
  footerText: { color: '#B0B0B0', fontSize: 12, textAlign: 'center', marginTop: 30 },
});

export default RegisterWelcomeScreen;