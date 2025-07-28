import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useForm } from '../context/FormContext';

type PropsContact = NativeStackScreenProps<RootStackParamList, 'ProfessionalContact'>;

const ProfessionalContactScreen: React.FC<PropsContact> = ({ navigation }) => {
  const { setContact } = useForm();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [cpf, setCpf] = useState<string>('');
  const progressPercent = 20;

  const handleNext = () => {
    setContact(email, password, cpf);
    navigation.navigate('ProfessionalRole');
  };

  const allValid =
    email.trim().length > 0 &&
    password.length > 0 &&
    password === confirm &&
    cpf.trim().length > 0;

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
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.title}>Bora criar sua senha?</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite novamente sua Senha"
        placeholderTextColor="#B0B0B0"
        secureTextEntry
        value={confirm}
        onChangeText={setConfirm}
      />

      <Text style={styles.title}>Agora só falta seu CPF!</Text>
      <Text style={styles.subtitle}>
        Usamos para garantir sua identidade e proteger seu perfil.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="000.000.000-00"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={cpf}
        onChangeText={setCpf}
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, !allValid && styles.nextDisabled]}
          onPress={handleNext}
          disabled={!allValid}
        >
          <Text style={styles.nextText}>Próximo</Text>
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
  input: { borderWidth: 1, borderColor: '#B0B0B0', borderRadius: 8, color: '#FFFFFF', padding: 12, marginVertical: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  nextButton: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default ProfessionalContactScreen;