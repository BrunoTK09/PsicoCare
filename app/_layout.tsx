import { Slot, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, DarkTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // Verifica se há token salvo
  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuth(!!token);
    };
    checkAuth();
  }, []);

  // Redirecionamento automático com base na auth
  useEffect(() => {
    if (isAuth === null) return;

    const inLoginGroup = segments[0] !== '(tabs)';
    if (!isAuth && !inLoginGroup) {
      router.replace('/login');
    } else if (isAuth && inLoginGroup) {
      router.replace('/(tabs)');
    }
  }, [isAuth, segments]);

  if (!fontsLoaded || isAuth === null) return null;

  return (
    <ThemeProvider value={DarkTheme}>
      <Slot />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
