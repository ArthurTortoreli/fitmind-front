import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type OnboardingProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;
const { width } = Dimensions.get('window');

const onboardingData = [
  { key: '1', title: 'Quer enxergar suas conquistas?', description: 'Comece a registrar sua rotina', image: require('../../assets/logo.png') },
  { key: '2', title: 'Entenda sua alimentação e treino', description: 'Veja como influenciam sua vida', image: require('../../assets/logo.png') },
  { key: '3', title: 'Presença e foco', description: 'Cultive bons hábitos alimentares e físicos', image: require('../../assets/logo.png') },
];

const OnboardingScreen: React.FC<OnboardingProps> = ({ navigation }) => {
  const renderItem = ({ item }: any) => (
    <View style={[styles.slide, { width }]}> 
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={onboardingData} renderItem={renderItem} horizontal pagingEnabled showsHorizontalScrollIndicator={false} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterWelcome')}>
        <Text style={styles.buttonText}>REGISTRE-SE GRATUITAMENTE</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#164863', alignItems: 'center', justifyContent: 'center' },
  slide: { alignItems: 'center', paddingHorizontal: 20 },
  image: { width: width * 0.7, height: width * 0.7, resizeMode: 'contain', marginVertical: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', textAlign: 'center' },
  description: { fontSize: 16, color: '#ffffff', textAlign: 'center', marginTop: 10 },
  button: { backgroundColor: '#55D6BE', paddingVertical: 15, paddingHorizontal: 30, borderRadius: 30, marginTop: 20 },
  buttonText: { color: '#164863', fontWeight: 'bold' },
  loginText: { color: '#ffffff', marginTop: 15 },
});

export default OnboardingScreen;