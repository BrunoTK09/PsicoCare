import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Dashboard() {
  const router = useRouter();

  const verify = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      router.replace('/login');
    }
  }
  
  useFocusEffect(
    useCallback(() => {
      verify();
    }, [])
  );
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao PsicoCare!</Text>
      <Text style={styles.subtitle}>
        Aqui você pode visualizar seus agendamentos, avaliações e emergências.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
