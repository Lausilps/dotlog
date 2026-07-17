import Svg, { Path } from 'react-native-svg';

/**
 * Paths de pixelarticons (MIT, github.com/halfmage/pixelarticons), grade 24x24.
 */
const PATHS = {
  user: 'M9 2h6v2H9zm0 8h6v2H9zm6-6h2v6h-2zM7 4h2v6H7zM4 18h2v4H4zm14 0h2v4h-2zM8 14h8v2H8zm-2 2h2v2H6zm10 0h2v2h-2z',
  lock: 'M5 8h14v2H5zm0 12h14v2H5zM3 10h2v10H3zm16 0h2v10h-2zM7 4h2v4H7zm2-2h6v2H9zm6 2h2v4h-2z',
  eye: 'M16 20H8v-2h8v2Zm-8-2H4v-2h4v2Zm12 0h-4v-2h4v2ZM4 16H2v-2h2v2Zm10-6h-2v2h2v-2h2v4h-2v2h-4v-2H8v-4h2V8h4v2Zm8 6h-2v-2h2v2ZM2 14H0v-4h2v4Zm22 0h-2v-4h2v4ZM4 10H2V8h2v2Zm18 0h-2V8h2v2ZM8 8H4V6h4v2Zm12 0h-4V6h4v2Zm-4-2H8V4h8v2Z',
  'eye-off': [
    'M0 10h2v4H0zm24 0h-2v4h2zm-8 0h-2v2h2zm-6 0H8v4h2zM2 8h2v2H2zm0 8h2v-2H2zm20-8h-2v2h2zm0 8h-2v-2h2zM4 6h4v2H4zm0 12h4v-2H4zM20 6h-4v2h4zM10 4h6v2h-6zM8 20h8v-2H8zm4-12h2v2h-2zm-2 6h4v2h-4zM8 8h2v2H8zm2 2h2v4h-2zm2 2h2v2h-2z',
    'M6 6h2v2H6zM4 4h2v2H4zM2 2h2v2H2zm12 12h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2z',
  ],
} as const;

export type PixelIconName = keyof typeof PATHS;

export type PixelIconProps = {
  name: PixelIconName;
  size?: number;
  color?: string;
};

export function PixelIcon({ name, size = 20, color = '#FFFDF2' }: PixelIconProps) {
  const paths = PATHS[name];
  const pathList = Array.isArray(paths) ? paths : [paths];

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {pathList.map((d) => (
        <Path key={d} d={d} fill={color} />
      ))}
    </Svg>
  );
}
