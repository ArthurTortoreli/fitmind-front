import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from '../../context/FormContext';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'StudentContact'>;

const StudentContactScreen: React.FC<Props> = ({ navigation }) => {
  const { data, setContact } = useForm();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [cpf, setCpf] = useState('');
  const progressPercent = 33;

  const allValid = email.trim().length > 0 && password.length > 0 && password === confirm && cpf.trim().length > 0;

  const handleNext = async () => {
    setContact(email, password, cpf);
    navigation.navigate('StudentGoals');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Qual é o seu email?</Text>
      <TextInput
        style={styles.input}
        placeholder="exemplo@email.com"
        placeholderTextColor="#B0B0B0"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.title}>Bora criar sua senha?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite novamente sua senha"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />
      <Text style={styles.title}>Agora só falta seu CPF!</Text>
      <Text style={styles.subtitle}>Usamos para garantir sua identidade e proteger seu perfil.</Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, (!allValid) && styles.nextDisabled]}
          onPress={handleNext}
          disabled={!allValid}
        >
          Próximo
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#164863' },
  progressContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  progressBar: { flex: 1, height: 6, backgroundColor: '#55D6BE', borderRadius: 3 },
  progressText: { marginLeft: 10, color: '#FFFFFF' },
  title: { color: '#FFFFFF', fontSize: 18, marginTop: 15 },
  subtitle: { color: '#B0B0B0', fontSize: 14, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#B0B0B0', borderRadius: 8, padding: 12, color: '#FFFFFF', marginVertical: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  nextButton: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default StudentContactScreen;
