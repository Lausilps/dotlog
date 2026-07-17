import * as React from 'react';
/** Decoração de fundo da marca: sinais "+" em VT323 e quadradinhos amarelos, opacidade baixa. Pai precisa de position:relative. */
export interface SparklesProps {
  /** Quantidade (padrão 6 — seja parcimonioso) */
  count?: number;
  /** Cor CSS (padrão amarelo) */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Sparkles(props: SparklesProps): JSX.Element;
