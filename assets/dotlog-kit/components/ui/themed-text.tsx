import { StyleSheet, Text, type TextProps } from 'react-native';

import { Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'subtitle' | 'small' | 'smallBold' | 'label' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'subtitle' && styles.subtitle,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'label' && styles.label,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: Fonts.body,
    fontSize: 17,
    lineHeight: 26,
  },
  title: {
    fontFamily: Fonts.pixel,
    fontSize: 26,
    lineHeight: 36,
  },
  subtitle: {
    fontFamily: Fonts.pixel,
    fontSize: 16,
    lineHeight: 24,
  },
  small: {
    fontFamily: Fonts.body,
    fontSize: 15,
    lineHeight: 22,
  },
  smallBold: {
    fontFamily: Fonts.bodyBold,
    fontSize: 15,
    lineHeight: 22,
  },
  label: {
    fontFamily: Fonts.pixel,
    fontSize: 10,
    lineHeight: 16,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  link: {
    fontFamily: Fonts.terminal,
    fontSize: 19,
    lineHeight: 24,
  },
  linkPrimary: {
    fontFamily: Fonts.terminal,
    fontSize: 19,
    lineHeight: 24,
  },
  code: {
    fontFamily: Fonts.terminal,
    fontSize: 17,
    lineHeight: 22,
  },
});
