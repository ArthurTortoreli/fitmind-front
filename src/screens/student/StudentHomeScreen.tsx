import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

// Mock data for alimentação e treinos
const mockAlimentation = [
  { name: 'Café da manhã: Omelete + Frutas', complete: false },
  { name: 'Almoço: Salada + Frango Grelhado', complete: true },
  { name: 'Lanche da tarde: Iogurte + Granola', complete: false },
];

const mockWorkouts = [
  { name: 'Supino Reto com Barra', details: '4 séries x 10 repetições', complete: true },
  { name: 'Supino Inclinado com Halteres', details: '3 séries x 12 repetições', complete: true },
  { name: 'Crucifixo no Banco Reto', details: '3 séries x 15 repetições', complete: false },
  { name: 'Flexão de Braços Tradicional', details: '3 séries até a falha', complete: false },
];

type Props = {};

const StudentHomeScreen: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  const [alimentation, setAlimentation] = useState<typeof mockAlimentation>([]);
  const [workouts, setWorkouts] = useState<typeof mockWorkouts>([]);
  const [activeTab, setActiveTab] = useState<'Alimentação' | 'Treinos'>('Alimentação');

  useEffect(() => {
    setTimeout(() => {
      setAlimentation(mockAlimentation);
      setWorkouts(mockWorkouts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#55D6BE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home Metas Aluno</Text>
        <View style={styles.bell}>
          <Text style={styles.bellText}>🔔</Text>
          <View style={styles.notificationDot} />
        </View>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Hora de cumprir suas metas!</Text>
        <Text style={styles.bannerText}>Seu objetivo não vai se conquistar sozinho. Treino e dieta te esperam!</Text>
        <Text style={styles.bannerFooter}>Bora pra cima! 💪</Text>
      </View>

      <View style={styles.tabs}>
        {['Alimentação', 'Treinos'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab as any)}>
            <Text style={[styles.tabText, activeTab === tab && styles.tabActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.list}>
        {(activeTab === 'Alimentação' ? alimentation : workouts).map((item, idx) => (
          <View key={idx} style={styles.item}>
            <View>
              <Text style={styles.itemTitle}>{item.name}</Text>
              {activeTab === 'Treinos' && <Text style={styles.itemDetails}>{item.details}</Text>}
            </View>
            <Text style={styles.check}>{item.complete ? '✔️' : ''}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footerNav}>
        <TouchableOpacity>🎯</TouchableOpacity>
        <TouchableOpacity>🔍</TouchableOpacity>
        <TouchableOpacity>🤖</TouchableOpacity>
        <TouchableOpacity>👤</TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#164863' },
  container: { flex: 1, backgroundColor: '#164863' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#55D6BE' },
  headerTitle: { color: '#164863', fontSize: 20, fontWeight: 'bold' },
  bell: { position: 'relative' },
  bellText: { fontSize: 24 },
  notificationDot: { position: 'absolute', top: 0, right: 0, width: 8, height: 8, backgroundColor: 'green', borderRadius: 4 },
  banner: { backgroundColor: '#55D6BE', margin: 20, borderRadius: 12, padding: 20 },
  bannerTitle: { color: '#164863', fontSize: 18, fontWeight: 'bold' },
  bannerText: { color: '#164863', fontSize: 14, marginVertical: 10 },
  bannerFooter: { color: '#164863', fontSize: 16, fontWeight: 'bold' },
  tabs: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20 },
  tabText: { fontSize: 16, color: '#2A4A5E' },
  tabActive: { color: '#55D6BE', fontWeight: 'bold' },
  list: { paddingHorizontal: 20, marginTop: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2A4A5E', padding: 15, borderRadius: 8, marginVertical: 5 },
  itemTitle: { color: '#FFFFFF', fontSize: 16 },
  itemDetails: { color: '#B0B0B0', fontSize: 14 },
  check: { fontSize: 20, color: '#55D6BE' },
  footerNav: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: '#2A4A5E' },
});

export default StudentHomeScreen;
