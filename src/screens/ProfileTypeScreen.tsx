import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useForm } from '../context/FormContext';

type ProfileTypeProps = NativeStackScreenProps<RootStackParamList, 'ProfileType'>;

const ProfileTypeScreen: React.FC<ProfileTypeProps> = ({ navigation }) => {
  const { setProfileType } = useForm();
  const [type, setType] = useState<'aluno' | 'profissional' | null>(null);

  const handleNext = () => {
    setProfileType(type!);
    
    if (type === 'profissional') {
      navigation.navigate('ProfessionalName');
    } else if (type == 'aluno') {
      navigation.navigate('StudentDetails');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>{'< Voltar'}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Antes de tudo, qual será seu tipo de perfil?</Text>
      <TouchableOpacity
        style={[styles.option, type === 'aluno' && styles.selected]}
        onPress={() => setType('aluno')}
      >
        <Text style={styles.optionText}>Perfil de Aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.option, type === 'profissional' && styles.selected]}
        onPress={() => setType('profissional')}
      >
        <Text style={styles.optionText}>Perfil de Profissional</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.nextButton, !type && styles.nextDisabled]}
        onPress={handleNext}
        disabled={!type}
      >
        <Text style={styles.nextText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#164863' },
  backButton: { marginBottom: 10 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  title: { color: '#FFFFFF', fontSize: 18, marginVertical: 20 },
  option: { backgroundColor: '#2A4A5E', padding: 15, borderRadius: 8, marginVertical: 8 },
  selected: { borderWidth: 2, borderColor: '#55D6BE' },
  optionText: { color: '#FFFFFF', fontSize: 16 },
  nextButton: { backgroundColor: '#55D6BE', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 30 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default ProfileTypeScreen;