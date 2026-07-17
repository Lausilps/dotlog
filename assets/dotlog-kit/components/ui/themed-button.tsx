import { ActivityIndicator, Pressable, StyleSheet, View, type PressableProps } from 'react-native';

import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';

export type ThemedButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'secondary';
  loading?: boolean;
};

export function ThemedButton({ title, variant = 'primary', loading, disabled, style, ...rest }: ThemedButtonProps) {
  const theme = useTheme();
  const isPrimary = variant === 'primary';
  const isDisabled = disabled || loading;

  const button = (
    <Pressable
      style={(state) => [
        styles.base,
        isPrimary
          ? { backgroundColor: theme.accent }
          : { backgroundColor: 'transparent', borderWidth: 2, borderColor: theme.accent },
        isDisabled && styles.disabled,
        typeof style === 'function' ? style(state) : style,
      ]}
      disabled={isDisabled}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? '#000000' : theme.accent} />
      ) : (
        <ThemedText type="label" style={{ color: isPrimary ? '#000000' : theme.accent }}>
          {title}
        </ThemedText>
      )}
    </Pressable>
  );

  if (!isPrimary) return button;

  return (
    <View style={styles.shadowWrapper}>
      {!isDisabled && <View style={[styles.shadowLayer, { backgroundColor: theme.accentShadow }]} />}
      {button}
    </View>
  );
}

const styles = StyleSheet.create({
  shadowWrapper: {
    paddingRight: 4,
    paddingBottom: 4,
  },
  shadowLayer: {
    ...StyleSheet.absoluteFill,
    transform: [{ translateX: 4 }, { translateY: 4 }],
  },
  base: {
    paddingVertical: Spacing.three,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
});
