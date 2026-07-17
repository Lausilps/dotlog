const MESSAGES: Record<string, string> = {
  'Invalid login credentials': 'E-mail ou senha incorretos.',
  'Email not confirmed': 'Confirme seu e-mail antes de entrar.',
  'User already registered': 'Já existe uma conta com esse e-mail.',
  'Password should be at least 6 characters': 'A senha deve ter no mínimo 6 caracteres.',
  'Unable to validate email address: invalid format': 'E-mail inválido.',
  'For security purposes, you can only request this after': 'Aguarde um pouco antes de tentar de novo.',
  'duplicate key value violates unique constraint': 'Esse nome de usuário já está em uso.',
};

export function getAuthErrorMessage(error: { message: string } | Error): string {
  const match = Object.keys(MESSAGES).find((key) => error.message.includes(key));
  return match ? MESSAGES[match] : 'Algo deu errado. Tenta de novo.';
}
