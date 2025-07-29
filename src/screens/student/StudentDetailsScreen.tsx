import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from '../../context/FormContext';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'StudentDetails'>;

const StudentDetailsScreen: React.FC<Props> = ({ navigation }) => {
  const { setStudentDetails } = useForm();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const progressPercent = 0;

  const allValid = Boolean(name && age && height && weight);

  const handleNext = () => {
    setStudentDetails(name, age, height, weight);
    navigation.navigate('StudentContact');
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Para continuarmos, como você gostaria de ser chamado?</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome preferido"
        placeholderTextColor="#B0B0B0"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.title}>Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Idade"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <Text style={styles.title}>Altura (em cm)</Text>
      <TextInput
        style={styles.input}
        placeholder="Altura"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Text style={styles.title}>Peso Atual (em Kg)</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso"
        placeholderTextColor="#B0B0B0"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
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
  input: { borderWidth: 1, borderColor: '#B0B0B0', borderRadius: 8, color: '#FFFFFF', padding: 12, marginVertical: 8 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  nextButton: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default StudentDetailsScreen;
