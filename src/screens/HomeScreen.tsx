import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const uid = 'uid-teste-123';

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://<IP>:3001/user/${uid}`);
        setNome(response.data.nome);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        setErro('Erro ao buscar dados');
      }
    };

    fetchUserData();
  }, []);

  const progressoMock = [
    { id: '1', titulo: 'Treino de peitoral', feito: 5, total: 12, tempo: '15 minutos' },
    { id: '2', titulo: 'Treino de pernas', feito: 3, total: 20, tempo: '23 minutos' },
  ];

  const categorias = ['Tudo', 'Aquecimento', 'Yoga', 'Bíceps'];

  const treinosSugeridos = [
    { id: '1', titulo: 'Aquecimento completo', exercicios: 20, tempo: '22 minutos' },
    { id: '2', titulo: 'Exercício de força', exercicios: 12, tempo: '14 minutos' },
    { id: '3', titulo: 'Prancha lateral', exercicios: 15, tempo: '18 minutos' },
    { id: '4', titulo: 'Treino abdominal', exercicios: 14, tempo: '16 minutos' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header com logo e notificações */}
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={28} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.welcome}>
        {erro ? erro : `Bem-vindo, ${nome}!`}
      </Text>

      {/* Cards de progresso */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Progresso</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {progressoMock.map((item) => (
            <View key={item.id} style={styles.progressoCard}>
              <Text style={styles.cardProgressoTexto}>
                {item.feito}/{item.total}
              </Text>
              <Text style={styles.cardTitulo}>{item.titulo}</Text>
              <Text style={styles.cardSubtexto}>Restam {item.tempo}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Categorias */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Categorias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categorias.map((cat) => (
            <TouchableOpacity key={cat} style={styles.categoriaBtn}>
              <Text style={styles.categoriaTexto}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Treinos sugeridos */}
      <View style={styles.section}>
        {treinosSugeridos.map((treino) => (
          <TouchableOpacity key={treino.id} style={styles.treinoCard}>
            <View style={styles.treinoInfo}>
              <Text style={styles.cardTitulo}>{treino.titulo}</Text>
              <Text style={styles.cardSubtexto}>
                {treino.exercicios} exercícios · {treino.tempo}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 50, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logo: { width: 120, height: 40 },
  welcome: { fontSize: 20, fontWeight: '600', marginVertical: 20 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  progressoCard: {
    backgroundColor: '#f1f5f9',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
    width: 160,
  },
  cardProgressoTexto: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  cardTitulo: { fontSize: 14, fontWeight: '600' },
  cardSubtexto: { fontSize: 12, color: '#666' },
  categoriaBtn: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 10,
  },
  categoriaTexto: { fontSize: 14, color: '#1e40af' },
  treinoCard: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  treinoInfo: {},
});
