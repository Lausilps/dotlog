import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DotLogWordmark } from '@/components/ui/dotlog-wordmark';
import { Sparkles } from '@/components/ui/sparkles';
import { ThemedButton } from '@/components/ui/themed-button';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedTextInput } from '@/components/ui/themed-text-input';
import { ThemedView } from '@/components/ui/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';

export default function LoginScreen() {
  const theme = useTheme();
  const { signIn, signInWithGoogle } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);
    setIsSubmitting(true);
    const result = await signIn(username, password);
    setIsSubmitting(false);
    if (result.error) setError(result.error);
  }

  async function handleGoogleSignIn() {
    setError(null);
    setIsGoogleSubmitting(true);
    const result = await signInWithGoogle();
    setIsGoogleSubmitting(false);
    if (result.error) setError(result.error);
  }

  return (
    <ThemedView style={styles.container}>
      <Sparkles />
      <SafeAreaView style={styles.safeArea}>
        <DotLogWordmark size={34} />

        <ThemedView type="backgroundElement" style={[styles.card, { borderColor: theme.border }]}>
          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Usuário
            </ThemedText>
            <ThemedTextInput
              placeholder="Digite seu usuário"
              leadingIcon="user"
              value={username}
              onChangeText={setUsername}
            />
          </ThemedView>

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Senha
            </ThemedText>
            <ThemedTextInput
              placeholder="Digite sua senha"
              leadingIcon="lock"
              secureToggle
              value={password}
              onChangeText={setPassword}
            />
          </ThemedView>

          {error && (
            <ThemedText themeColor="error" type="small">
              {error}
            </ThemedText>
          )}

          <ThemedButton title="Entrar" onPress={handleSubmit} loading={isSubmitting} />

          <Link href="/recuperar-senha" style={styles.centerLink}>
            <ThemedText type="link" themeColor="accent">
              Esqueci minha senha
            </ThemedText>
          </Link>
        </ThemedView>

        <ThemedButton
          title="Entrar com Google"
          variant="secondary"
          onPress={handleGoogleSignIn}
          loading={isGoogleSubmitting}
        />

        <Link href="/cadastro">
          <ThemedText type="small" themeColor="textSecondary">
            Não tem conta? <ThemedText type="smallBold">Cadastre-se</ThemedText>
          </ThemedText>
        </Link>

        <ThemedText type="small" themeColor="textSecondary">
          Core<ThemedText type="small" themeColor="accent">•</ThemedText>Dot
        </ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.five,
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    width: '100%',
  },
  card: {
    alignSelf: 'stretch',
    borderWidth: 1,
    padding: Spacing.four,
    gap: Spacing.three,
  },
  field: {
    gap: Spacing.two,
  },
  centerLink: {
    alignSelf: 'center',
  },
});
