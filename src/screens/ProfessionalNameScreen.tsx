import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useForm } from '../context/FormContext';

type Props = NativeStackScreenProps<RootStackParamList, 'ProfessionalName'>;

const ProfessionalNameScreen: React.FC<Props> = ({ navigation }) => {
  const progressPercent = 0;
  const { setName } = useForm();
  const [name, setLocalName] = useState('');

  const handleNext = () => {
    setName(name);
    navigation.navigate('ProfessionalContact');
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Para continuarmos, como você gostaria de ser chamado?</Text>
      <Text style={styles.subtitle}>Queremos conhecer você.</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome preferido"
        placeholderTextColor="#B0B0B0"
        value={name}
        onChangeText={setLocalName}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, !name && styles.nextDisabled]}
          onPress={handleNext}
          disabled={!name}
        >
          <Text style={styles.nextText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#164863',
    padding: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: '#2A4A5E',
    borderRadius: 3,
  },
  progressText: {
    marginLeft: 10,
    color: '#FFFFFF',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    color: '#B0B0B0',
    fontSize: 14,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#B0B0B0',
    borderRadius: 8,
    color: '#FFFFFF',
    padding: 12,
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#55D6BE',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  nextDisabled: {
    opacity: 0.5,
  },
  nextText: {
    color: '#164863',
    fontWeight: 'bold',
  },
});

export default ProfessionalNameScreen;
