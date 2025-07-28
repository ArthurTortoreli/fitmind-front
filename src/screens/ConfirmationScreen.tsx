import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Confirmation'>;

const ConfirmationScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, { width: '100%' }]} />
      <Text style={styles.progressText}>100%</Text>
    </View>
    <Text style={styles.title}>Cadastro Concluído!</Text>
    <Text style={styles.subtitle}>Seja bem-vindo ao FitMind. Agora você pode começar a acompanhar seus treinos e dietas.</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
      <Text style={styles.buttonText}>Continuar</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#164863', padding: 20, alignItems: 'center', justifyContent: 'center' },
  progressContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 30 },
  progressBar: { flex: 1, height: 6, backgroundColor: '#55D6BE', borderRadius: 3 },
  progressText: { marginLeft: 10, color: '#FFFFFF', fontWeight: 'bold' },
  icon: { width: 120, height: 120, marginBottom: 20 },
  title: { color: '#55D6BE', fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { color: '#FFFFFF', fontSize: 16, textAlign: 'center', marginBottom: 30 },
  button: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 30 },
  buttonText: { color: '#164863', fontSize: 16, fontWeight: 'bold' },
});

export default ConfirmationScreen;