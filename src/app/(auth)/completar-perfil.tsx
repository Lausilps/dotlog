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
import { formatPhoneBR, isValidPhone, isValidUsername } from '@/utils/validation';

export default function CompletarPerfilScreen() {
  const theme = useTheme();
  const { session, completeProfile, signOut } = useAuth();
  const googleName =
    (session?.user.user_metadata?.full_name as string | undefined) ??
    (session?.user.user_metadata?.name as string | undefined) ??
    '';
  const [fullName, setFullName] = useState(googleName);
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    setError(null);

    if (fullName.trim().length < 2) {
      setError('Digite seu nome completo.');
      return;
    }
    if (!isValidUsername(username)) {
      setError('Usuário deve ter 3-20 letras, números ou "_".');
      return;
    }
    if (!isValidPhone(phone)) {
      setError('Digite um telefone válido com DDD.');
      return;
    }

    setIsSubmitting(true);
    const result = await completeProfile(fullName.trim(), username, phone);
    setIsSubmitting(false);

    if (result.error) setError(result.error);
  }

  return (
    <ThemedView style={styles.container}>
      <Sparkles />
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Quase lá
        </ThemedText>
        <ThemedText style={styles.centerText}>Falta só completar seu perfil.</ThemedText>

        <ThemedView type="backgroundElement" style={[styles.card, { borderColor: theme.border }]}>
          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Nome completo
            </ThemedText>
            <ThemedTextInput
              placeholder="Digite seu nome"
              leadingIcon="user"
              value={fullName}
              onChangeText={setFullName}
            />
          </ThemedView>

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Usuário
            </ThemedText>
            <ThemedTextInput
              placeholder="Escolha um usuário"
              leadingIcon="user"
              value={username}
              onChangeText={setUsername}
            />
          </ThemedView>

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Telefone
            </ThemedText>
            <ThemedTextInput
              placeholder="(11) 91234-5678"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={(text) => setPhone(formatPhoneBR(text))}
            />
          </ThemedView>

          {error && (
            <ThemedText themeColor="error" type="small">
              {error}
            </ThemedText>
          )}

          <ThemedButton title="Concluir" onPress={handleSubmit} loading={isSubmitting} />
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
