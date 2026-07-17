import { PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_700Bold,
} from '@expo-google-fonts/space-grotesk';
import { VT323_400Regular } from '@expo-google-fonts/vt323';
import { useFonts } from 'expo-font';
import { DarkTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { ThemedView } from '@/components/ui/themed-view';
import { AuthProvider, useAuth } from '@/context/auth-context';
import { configureGoogleSignIn } from '@/services/google-signin';

SplashScreen.preventAutoHideAsync();
configureGoogleSignIn();

function RootNavigator() {
  const { session, isLoading, isPasswordRecovery, hasProfile } = useAuth();
  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    VT323_400Regular,
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_700Bold,
  });

  if (isLoading || !fontsLoaded) return <ThemedView style={{ flex: 1 }} />;

  return (
    <>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Protected guard={!session && !isPasswordRecovery}>
          <Stack.Screen name="(auth)/login" />
          <Stack.Screen name="(auth)/cadastro" />
          <Stack.Screen name="(auth)/recuperar-senha" />
        </Stack.Protected>
        <Stack.Protected guard={isPasswordRecovery}>
          <Stack.Screen name="(auth)/reset-senha" />
        </Stack.Protected>
        <Stack.Protected guard={!!session && !isPasswordRecovery && hasProfile === false}>
          <Stack.Screen name="(auth)/completar-perfil" />
        </Stack.Protected>
        <Stack.Protected guard={!!session && !isPasswordRecovery && hasProfile === true}>
          <Stack.Screen name="(app)/index" />
        </Stack.Protected>
      </Stack>
    </>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
}
