import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: { position: 'absolute' },
          android: {},
        }),
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Início' }} />
      <Tabs.Screen name="agendamentos" options={{ title: 'Agendamentos' }} />
      <Tabs.Screen name="avaliacoes" options={{ title: 'Avaliações' }} />
      <Tabs.Screen name="emergencias" options={{ title: 'Emergências' }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
