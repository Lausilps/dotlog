import { GoogleSignin } from '@react-native-google-signin/google-signin';
import type { Session } from '@supabase/supabase-js';
import { getQueryParams } from 'expo-auth-session/build/QueryParams';
import * as Linking from 'expo-linking';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Platform } from 'react-native';

import { supabase } from '@/services/supabase';
import { getAuthErrorMessage } from '@/utils/auth-errors';

type AuthResult = { error: string | null };

type AuthContextValue = {
  session: Session | null;
  isLoading: boolean;
  isPasswordRecovery: boolean;
  hasProfile: boolean | null;
  signUp: (
    fullName: string,
    username: string,
    phone: string,
    email: string,
    password: string
  ) => Promise<AuthResult & { needsEmailConfirmation: boolean }>;
  signIn: (username: string, password: string) => Promise<AuthResult>;
  signInWithGoogle: () => Promise<AuthResult>;
  signOut: () => Promise<void>;
  sendPasswordReset: (email: string) => Promise<AuthResult>;
  updatePassword: (newPassword: string) => Promise<AuthResult>;
  completeProfile: (fullName: string, username: string, phone: string) => Promise<AuthResult>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function handleIncomingUrl(url: string, onRecovery: () => void) {
  if (!url.includes('reset-senha')) return;

  const { params, errorCode } = getQueryParams(url);
  if (!errorCode && params.access_token && params.refresh_token) {
    await supabase.auth.setSession({
      access_token: params.access_token,
      refresh_token: params.refresh_token,
    });
    onRecovery();
  }
}

async function checkHasProfile(userId: string): Promise<boolean> {
  const { data } = await supabase.from('profiles').select('id').eq('id', userId).maybeSingle();
  return !!data;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);
  const [hasProfile, setHasProfile] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true;
    const markRecovery = () => isMounted && setIsPasswordRecovery(true);

    async function syncSession(newSession: Session | null) {
      if (!isMounted) return;
      setSession(newSession);
      if (newSession) {
        const exists = await checkHasProfile(newSession.user.id);
        if (isMounted) setHasProfile(exists);
      } else {
        setHasProfile(null);
      }
    }

    async function bootstrap() {
      const [{ data }, initialUrl] = await Promise.all([
        supabase.auth.getSession(),
        Platform.OS === 'web' ? Promise.resolve(null) : Linking.getInitialURL(),
      ]);

      if (initialUrl) {
        await handleIncomingUrl(initialUrl, markRecovery);
      }

      await syncSession(data.session);
      if (isMounted) setIsLoading(false);
    }

    bootstrap();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
      if (event === 'PASSWORD_RECOVERY') markRecovery();
      syncSession(newSession);
    });

    const linkingSubscription = Linking.addEventListener('url', ({ url }) => {
      handleIncomingUrl(url, markRecovery);
    });

    return () => {
      isMounted = false;
      authListener.subscription.unsubscribe();
      linkingSubscription.remove();
    };
  }, []);

  const value: AuthContextValue = {
    session,
    isLoading,
    isPasswordRecovery,
    hasProfile,
    async signUp(fullName, username, phone, email, password) {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) return { error: getAuthErrorMessage(error), needsEmailConfirmation: false };
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({ id: data.user.id, username, full_name: fullName, phone });
        if (profileError) return { error: getAuthErrorMessage(profileError), needsEmailConfirmation: false };
        setHasProfile(true);
      }
      return { error: null, needsEmailConfirmation: !data.session };
    },
    async signIn(username, password) {
      const { data: email, error: lookupError } = await supabase.rpc('get_email_for_username', {
        lookup_username: username,
      });
      if (lookupError || !email) return { error: 'Usuário não encontrado.' };

      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error ? getAuthErrorMessage(error) : null };
    },
    async signInWithGoogle() {
      if (Platform.OS === 'web') {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: window.location.origin },
        });
        return { error: error ? getAuthErrorMessage(error) : null };
      }

      try {
        await GoogleSignin.hasPlayServices();
        const response = await GoogleSignin.signIn();
        const idToken = response.data?.idToken;
        if (!idToken) return { error: 'Não foi possível entrar com o Google.' };

        const { error } = await supabase.auth.signInWithIdToken({ provider: 'google', token: idToken });
        return { error: error ? getAuthErrorMessage(error) : null };
      } catch {
        return { error: 'Não foi possível entrar com o Google.' };
      }
    },
    async signOut() {
      setIsPasswordRecovery(false);
      await supabase.auth.signOut();
    },
    async sendPasswordReset(email) {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: Linking.createURL('/reset-senha'),
      });
      return { error: error ? getAuthErrorMessage(error) : null };
    },
    async updatePassword(newPassword) {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (!error) setIsPasswordRecovery(false);
      return { error: error ? getAuthErrorMessage(error) : null };
    },
    async completeProfile(fullName, username, phone) {
      if (!session) return { error: 'Sessão inválida.' };

      const { error } = await supabase
        .from('profiles')
        .insert({ id: session.user.id, username, full_name: fullName, phone });
      if (error) return { error: getAuthErrorMessage(error) };
      setHasProfile(true);
      return { error: null };
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  return context;
}
