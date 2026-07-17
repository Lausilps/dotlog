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
import {
  formatPhoneBR,
  isValidEmail,
  isValidPassword,
  isValidPhone,
  isValidUsername,
  MIN_PASSWORD_LENGTH,
} from '@/utils/validation';

export default function CadastroScreen() {
  const theme = useTheme();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [needsEmailConfirmation, setNeedsEmailConfirmation] = useState(false);
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
    if (!isValidEmail(email)) {
      setError('Digite um e-mail válido.');
      return;
    }
    if (!isValidPassword(password)) {
      setError(`A senha deve ter no mínimo ${MIN_PASSWORD_LENGTH} caracteres.`);
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    setIsSubmitting(true);
    const result = await signUp(fullName.trim(), username, phone, email, password);
    setIsSubmitting(false);

    if (result.error) {
      setError(result.error);
      return;
    }
    if (result.needsEmailConfirmation) {
      setNeedsEmailConfirmation(true);
    }
  }

  if (needsEmailConfirmation) {
    return (
      <ThemedView style={styles.container}>
        <Sparkles />
        <SafeAreaView style={styles.safeArea}>
          <ThemedText type="title" style={styles.title}>
            Quase lá
          </ThemedText>
          <ThemedText style={styles.centerText}>
            Verifique seu e-mail para confirmar o cadastro antes de entrar.
          </ThemedText>
          <Link href="/login">
            <ThemedText type="link" themeColor="accent">
              Voltar para o login
            </ThemedText>
          </Link>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <Sparkles />
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Criar conta
        </ThemedText>

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

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Senha
            </ThemedText>
            <ThemedTextInput
              placeholder="Crie uma senha"
              leadingIcon="lock"
              secureToggle
              value={password}
              onChangeText={setPassword}
            />
          </ThemedView>

          <ThemedView style={styles.field}>
            <ThemedText type="label" themeColor="textSecondary">
              Confirmar senha
            </ThemedText>
            <ThemedTextInput
              placeholder="Repita a senha"
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

          <ThemedButton title="Criar conta" onPress={handleSubmit} loading={isSubmitting} />
        </ThemedView>

        <Link href="/login">
          <ThemedText type="small" themeColor="textSecondary">
            Já tem conta? <ThemedText type="smallBold">Entrar</ThemedText>
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
