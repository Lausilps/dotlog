import { forwardRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View, type TextInputProps } from 'react-native';

import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { PixelIcon, type PixelIconName } from './pixel-icon';

export type ThemedTextInputProps = TextInputProps & {
  error?: boolean;
  leadingIcon?: PixelIconName;
  secureToggle?: boolean;
};

export const ThemedTextInput = forwardRef<TextInput, ThemedTextInputProps>(function ThemedTextInput(
  { style, error, leadingIcon, secureToggle, secureTextEntry, onFocus, onBlur, ...rest },
  ref
) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const borderColor = error ? theme.error : isFocused ? theme.accent : theme.border;
  const iconColor = isFocused ? theme.accent : theme.textSecondary;

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundElement, borderColor }]}>
      {leadingIcon && (
        <View style={styles.leadingIcon}>
          <PixelIcon name={leadingIcon} size={18} color={iconColor} />
        </View>
      )}
      <TextInput
        ref={ref}
        style={[styles.input, { color: theme.text }, style]}
        placeholderTextColor={theme.textSecondary}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={secureToggle ? isHidden : secureTextEntry}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...rest}
      />
      {secureToggle && (
        <Pressable
          onPress={() => setIsHidden((prev) => !prev)}
          hitSlop={8}
          style={styles.trailingIcon}
        >
          <PixelIcon name={isHidden ? 'eye-off' : 'eye'} size={18} color={theme.textSecondary} />
        </Pressable>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: Spacing.three,
  },
  leadingIcon: {
    marginRight: Spacing.two,
  },
  trailingIcon: {
    marginLeft: Spacing.two,
  },
  input: {
    flex: 1,
    fontFamily: Fonts.terminal,
    fontSize: 19,
    paddingVertical: Spacing.two,
  },
});
