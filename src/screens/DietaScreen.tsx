import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DietaScreen() {
  return (
    <View style={styles.container}>
      <Text>Página de Dieta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
