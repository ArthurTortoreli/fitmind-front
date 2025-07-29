import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { useForm } from '../../context/FormContext';
import { registerProfessional } from '../../services/api';

type PropsVolume = NativeStackScreenProps<RootStackParamList, 'ProfessionalVolume'>;

const ProfessionalVolumeScreen: React.FC<PropsVolume> = ({ navigation }) => {
  const { data } = useForm();
  const { setVolume } = useForm();
  const [volume, setLocalVolume] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleNext = async () => {
    setVolume(volume!);
    setLoading(true);
    try {
      await registerProfessional({ ...data, volume: volume! });
      navigation.navigate('Confirmation');
    } catch {
      // handle error
    } finally {
      setLoading(false);
    }
  };
  const progressPercent = 80;
  const options = [
    'Entre 0 e 10 por mês',
    'Entre 10 e 30 por mês',
    'Entre 30 e 50 por mês',
    'Mais de 50 por mês',
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Quantas pessoas você atende mensalmente?</Text>
      {options.map((opt) => (
        <TouchableOpacity
          key={opt}
          style={[styles.option, volume === opt && styles.selected]}
          onPress={() => setLocalVolume(opt)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, !volume && styles.nextDisabled]}
          onPress={handleNext}
          disabled={!volume}
        >
           {loading ? <ActivityIndicator /> : <Text>Próximo</Text>}
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

export default ProfessionalVolumeScreen;
