import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useAuth } from '../context/AuthContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    // Simula autenticação com Firebase e recebe o usuário
    const user = await login(email, password);
    setLoading(false);
    // Passa o usuário simulado para a Home do aluno
    navigation.replace('StudentHome', { user });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar no FitMind</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#B0B0B0"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[styles.button, (!email || !password || loading) && styles.disabled]}
        onPress={handleLogin}
        disabled={!email || !password || loading}
      >
        {loading ? <ActivityIndicator color="#164863" /> : <Text style={styles.buttonText}>Entrar</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#164863', padding: 20, justifyContent: 'center' },
  title: { color: '#55D6BE', fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#B0B0B0', borderRadius: 8, padding: 12, color: '#FFFFFF', marginVertical: 10 },
  button: { backgroundColor: '#55D6BE', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 20 },
  disabled: { opacity: 0.5 },
  buttonText: { color: '#164863', fontWeight: 'bold' },
  backText: { color: '#FFFFFF', textAlign: 'center', marginTop: 15 },
});

export default LoginScreen;
