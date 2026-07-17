import * as React from 'react';
/** O Dot — mascote múmia pixel. Flutua suavemente por padrão. */
export interface MascoteProps {
  /** Caminho para o PNG (ex.: assets/mascote-dot.png, relativo à página) */
  src: string;
  /** Lado em px (padrão 120) */
  size?: number;
  /** Animação de flutuar (padrão true) */
  float?: boolean;
  alt?: string;
  style?: React.CSSProperties;
}
export declare function Mascote(props: MascoteProps): JSX.Element;
