import { useEffect, useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import { Colors } from '@/constants/theme';

type Seed = {
  left: number;
  top: number;
  plus: boolean;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  drift: number;
};

function buildSeeds(count: number): Seed[] {
  return Array.from({ length: count }, (_, i) => ({
    left: ((i * 37 + 11) % 92) + 3,
    top: ((i * 53 + 9) % 86) + 5,
    plus: i % 2 === 0,
    size: i % 3 === 0 ? 20 : 13,
    opacity: 0.3 + ((i * 13) % 25) / 100,
    delay: (i * 340) % 3000,
    duration: 6000 + ((i * 730) % 6000),
    drift: 4 + (i % 4),
  }));
}

function Sparkle({ seed, color }: { seed: Seed; color: string }) {
  const reduceMotion = useReducedMotion();
  const progress = useSharedValue(0);

  useEffect(() => {
    if (reduceMotion) return;
    progress.value = withDelay(
      seed.delay,
      withRepeat(
        withSequence(
          withTiming(1, { duration: seed.duration, easing: Easing.inOut(Easing.sin) }),
          withTiming(0, { duration: seed.duration, easing: Easing.inOut(Easing.sin) })
        ),
        -1,
        false
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  const style = useAnimatedStyle(() => {
    if (reduceMotion) return { opacity: seed.opacity };

    return {
      opacity: seed.opacity * (0.4 + progress.value * 0.6),
      transform: [
        { translateX: (progress.value - 0.5) * seed.drift },
        { translateY: (0.5 - progress.value) * seed.drift },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.sparkle,
        { left: `${seed.left}%`, top: `${seed.top}%` },
        style,
      ]}
    >
      {seed.plus ? (
        <View style={styles.plusWrap}>
          <View style={[styles.plusBarH, { width: seed.size, backgroundColor: color }]} />
          <View style={[styles.plusBarV, { height: seed.size, backgroundColor: color }]} />
        </View>
      ) : (
        <View style={{ width: seed.size * 0.35, height: seed.size * 0.35, backgroundColor: color }} />
      )}
    </Animated.View>
  );
}

export function Sparkles({ count = 10 }: { count?: number }) {
  const seeds = useMemo(() => buildSeeds(count), [count]);

  return (
    <View style={styles.container} pointerEvents="none">
      {seeds.map((seed, i) => (
        <Sparkle key={i} seed={seed} color={i % 4 === 0 ? Colors.accent : Colors.textSecondary} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    overflow: 'hidden',
  },
  sparkle: {
    position: 'absolute',
  },
  plusWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBarH: {
    position: 'absolute',
    height: 2,
  },
  plusBarV: {
    position: 'absolute',
    width: 2,
  },
});
