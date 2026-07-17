import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Sparkles } from '@/components/ui/sparkles';
import { ThemedButton } from '@/components/ui/themed-button';
import { ThemedText } from '@/components/ui/themed-text';
import { ThemedTextInput } from '@/components/ui/themed-text-input';
import { ThemedView } from '@/components/ui/themed-view';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useAuth } from '@/context/auth-context';
import { useTheme } from '@/hooks/use-theme';
import { isValidEmail } from '@/utils/validation';

export default function RecuperarSenhaScreen() {
  const theme = useTheme();
  const { sendPasswordReset } = useAuth();
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);

    if (!isValidEmail(email)) {
      setError('Digite um e-mail válido.');
      return;
    }

    setIsSubmitting(true);
    const result = await sendPasswordReset(email);
    setIsSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }
    setIsSent(true);
  }

  return (
    <ThemedView style={styles.container}>
      <Sparkles />
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Recuperar senha
        </ThemedText>

        {isSent ? (
          <ThemedText style={styles.centerText}>
            Verifique seu e-mail para redefinir sua senha.
          </ThemedText>
        ) : (
          <ThemedView type="backgroundElement" style={[styles.card, { borderColor: theme.border }]}>
            <ThemedView style={styles.field}>
              <ThemedText type="label" themeColor="textSecondary">
                E-mail
              </ThemedText>
              <ThemedTextInput
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </ThemedView>

            {error && (
              <ThemedText themeColor="error" type="small">
                {error}
              </ThemedText>
            )}

            <ThemedButton title="Enviar" onPress={handleSubmit} loading={isSubmitting} />
          </ThemedView>
        )}

        <Link href="/login">
          <ThemedText type="link" themeColor="accent">
            Voltar para o login
          </ThemedText>
        </Link>
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
  title: {
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
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
});
