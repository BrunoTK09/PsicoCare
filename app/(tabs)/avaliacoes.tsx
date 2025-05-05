import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Avaliacoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avaliações Psicológicas</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Escala de Ansiedade</Text>
        <Text style={styles.cardDesc}>Responder avaliação</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Autoavaliação de Humor</Text>
        <Text style={styles.cardDesc}>Ver respostas anteriores</Text>
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
    marginBottom: 20,
  },
  card: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    marginTop: 4,
    color: '#555',
  },
});
