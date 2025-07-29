import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useForm } from '../../context/FormContext';
import { registerStudent } from '../../services/api';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'StudentGoals'>;

const goalsOptions = [
  'Perder peso',
  'Manter o peso',
  'Ganhar peso',
  'Ganhar massa muscular',
  'Modificar minha dieta',
  'Planeje refeições',
  'Controlar estresse',
  'Ter um estilo de vida ativo',
  'Equilibrar vida pessoal e profissional',
  'Me preparar para um evento esportivo',
];

const StudentGoalsScreen: React.FC<Props> = ({ navigation }) => {
  const { data, setGoals } = useForm();
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const progressPercent = 66;

  const toggleGoal = (goal: string) => {
    setSelected(prev =>
      prev.includes(goal) ? prev.filter(g => g !== goal) : prev.length < 3 ? [...prev, goal] : prev
    );
  };

  const handleNext = async () => {
    setGoals(selected);
    setLoading(true);
    try {
      await registerStudent({ ...data, goals: selected });
      navigation.navigate('Confirmation');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercent}%` }]} />
        <Text style={styles.progressText}>{progressPercent}%</Text>
      </View>
      <Text style={styles.title}>Bem-vindo, {data.name}! 👋 Vamos dar o primeiro passo falando sobre suas metas.</Text>
      <Text style={styles.subtitle}>Selecione até três metas que são mais importantes para você.</Text>
      <ScrollView contentContainerStyle={styles.list}>
        {goalsOptions.map(goal => (
          <TouchableOpacity
            key={goal}
            style={[styles.option, selected.includes(goal) && styles.selected]}
            onPress={() => toggleGoal(goal)}
          >
            <Text style={styles.optionText}>{goal}</Text>
            <View style={styles.checkbox}>{selected.includes(goal) && <View style={styles.checked} />}</View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, (selected.length === 0 || loading) && styles.nextDisabled]}
          onPress={handleNext}
          disabled={selected.length === 0 || loading}
        >
          {loading ? <ActivityIndicator color="#164863" /> : <Text style={styles.nextText}>Próximo</Text>}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#164863', padding: 20 },
  progressContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  progressBar: { flex: 1, height: 6, backgroundColor: '#55D6BE', borderRadius: 3 },
  progressText: { marginLeft: 10, color: '#FFFFFF' },
  title: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  subtitle: { color: '#B0B0B0', fontSize: 14, marginBottom: 15 },
  list: { paddingBottom: 20 },
  option: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2A4A5E', padding: 15, borderRadius: 8, marginVertical: 5 },
  selected: { borderWidth: 2, borderColor: '#55D6BE' },
  optionText: { color: '#FFFFFF', fontSize: 16, flex: 1 },
  checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: '#FFFFFF', borderRadius: 4, alignItems: 'center', justifyContent: 'center' },
  checked: { width: 12, height: 12, backgroundColor: '#55D6BE', borderRadius: 2 },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 },
  backText: { color: '#FFFFFF', fontSize: 14 },
  nextButton: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  nextDisabled: { opacity: 0.5 },
  nextText: { color: '#164863', fontWeight: 'bold' },
});

export default StudentGoalsScreen;
