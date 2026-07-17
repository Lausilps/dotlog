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
import { isValidPassword, MIN_PASSWORD_LENGTH } from '@/utils/validation';

export default function ResetSenhaScreen() {
  const theme = useTheme();
  const { updatePassword, signOut } = useAuth();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);

    if (!isValidPassword(password)) {
      setError(`A senha deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres.`);
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setIsSubmitting(true);
    const result = await updatePassword(password);
    setIsSubmitting(false);

    if (result.error) setError(result.error);
  }

  return (
    <ThemedView style={styles.container}>
      <Sparkles />
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Nova senha
        </ThemedText>

        <ThemedView type="backgroundElement" style={[styles.card, { borderColor: theme.border }]}>
          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Nova senha
            </ThemedText>
            <ThemedTextInput
              placeholder="Digite a nova senha"
              leadingIcon="lock"
              secureToggle
              value={password}
              onChangeText={setPassword}
            />
          </ThemedView>

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Confirmar nova senha
            </ThemedText>
            <ThemedTextInput
              placeholder="Repita a nova senha"
              leadingIcon="lock"
              secureToggle
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </ThemedView>

          {error && (
            <ThemedText themeColor="error" type="small">
              {error}
            </ThemedText>
          )}

          <ThemedButton title="Salvar senha" onPress={handleSubmit} loading={isSubmitting} />
        </ThemedView>

        <ThemedButton title="Sair" variant="secondary" onPress={() => signOut()} />
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
