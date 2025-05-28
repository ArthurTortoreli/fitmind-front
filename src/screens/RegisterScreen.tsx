import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      setError('Erro ao criar conta');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" style={{borderWidth: 1, marginBottom: 10, padding: 8}} />
      <TextInput placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry style={{borderWidth: 1, marginBottom: 10, padding: 8}} />
      {!!error && <Text style={{color: 'red', marginBottom: 10}}>{error}</Text>}
      <Button title="Registrar" onPress={register} />
      <Button title="Voltar para login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
