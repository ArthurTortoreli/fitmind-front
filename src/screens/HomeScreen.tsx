import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const uid = 'uid-teste-123'; // Simulado por enquanto

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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {erro ? erro : `Bem vindo, ${nome}!`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20 },
});
