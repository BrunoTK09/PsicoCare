// app/(tabs)/perfil.tsx
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Perfil() {
  const router = useRouter();

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    Alert.alert('Deslogado', 'Você saiu do aplicativo.');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  logoutButton: { backgroundColor: '#ff3b30', padding: 16, borderRadius: 8 },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
