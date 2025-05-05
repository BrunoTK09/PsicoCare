import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function Emergencias() {
  const ligar = () => {
    Linking.openURL('tel:188'); // CVV - apoio emocional
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergência Psicológica</Text>
      <Text style={styles.description}>
        Se você está passando por uma crise ou precisa de ajuda imediata, entre em contato com um profissional ou ligue para o CVV (Centro de Valorização da Vida).
      </Text>

      <TouchableOpacity onPress={ligar} style={styles.button}>
        <Text style={styles.buttonText}>Ligar para 188</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    marginBottom: 24,
    color: '#333',
  },
  button: {
    backgroundColor: '#FF3B30',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
