import { ThemedText } from './themed-text';

export function DotLogWordmark({ size = 28, muted = false }: { size?: number; muted?: boolean }) {
  const lineHeight = size * 1.4;

  return (
    <ThemedText
      type="title"
      themeColor={muted ? 'textSecondary' : 'text'}
      style={{ fontSize: size, lineHeight }}
    >
      Dot
      <ThemedText type="title" themeColor="accent" style={{ fontSize: size, lineHeight }}>
        •
      </ThemedText>
      Log
    </ThemedText>
  );
}
