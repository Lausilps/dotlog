/**
 * Tokens do design system CoreDot (assets/design-system/tokens/*.css).
 * A marca não tem modo claro — este é o único tema do app.
 */

import '@/global.css';

export const Colors = {
  background: '#0D0D0D',
  backgroundElement: '#151515',
  backgroundSelected: 'rgba(255, 212, 0, 0.12)',
  text: '#FFFDF2',
  textSecondary: '#8C8C8C',
  accent: '#FFD400',
  accentSoft: '#FFE873',
  accentShadow: '#3a3200',
  error: '#ff5f56',
  border: '#2c2c2c',
} as const;

export type ThemeColor = keyof typeof Colors;

export const Fonts = {
  pixel: 'PressStart2P_400Regular',
  terminal: 'VT323_400Regular',
  body: 'SpaceGrotesk_400Regular',
  bodyMedium: 'SpaceGrotesk_500Medium',
  bodyBold: 'SpaceGrotesk_700Bold',
} as const;

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const MaxContentWidth = 800;
