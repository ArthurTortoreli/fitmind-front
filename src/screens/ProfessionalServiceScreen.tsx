import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useForm } from '../context/FormContext';

type PropsService = NativeStackScreenProps<RootStackParamList, 'ProfessionalService'>;

const ProfessionalServiceScreen: React.FC<PropsService> = ({ navigation }) => {
    const { setService } = useForm();
  const [service, setLocalService] = useState<string | null>(null);

  const handleNext = () => {
    setService(service!);
    navigation.navigate('ProfessionalVolume');
  };
  const progressPercent = 60;
  const options = [
    'Somente no Plano de Saúde',
    'Somente no Particular',
    'Mais no Plano do que no Particular',
    'Mais no Particular do que no Plano',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Como você costuma atender seus pacientes?</Text>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[styles.option, service === opt && styles.selected]}
          onPress={() => setLocalService(opt)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, !service && styles.nextDisabled]}
          onPress={handleNext}
          disabled={!service}
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
  title: { color: '#FFFFFF', fontSize: 18, marginBottom: 20 },
  option: { backgroundColor: '#2A4A5E', padding: 15, borderRadius: 8, marginVertical: 8 },
  selected: { borderWidth: 2, borderColor: '#55D6BE' },
  optionText: { color: '#FFFFFF', fontSize: 16 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  nextButton: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default ProfessionalServiceScreen;
