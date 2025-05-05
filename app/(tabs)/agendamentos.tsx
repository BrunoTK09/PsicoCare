import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function Agendamentos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seus Agendamentos</Text>

      {/* Exemplo de agendamento */}
      <View style={styles.card}>
        <Text style={styles.date}>Segunda, 06 de Maio - 14:00</Text>
        <Text style={styles.desc}>Sessão com Dra. Juliana Mendes</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agendar nova sessão</Text>
      </TouchableOpacity>
    </ScrollView>
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
  card: {
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    marginBottom: 12,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    marginTop: 4,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
