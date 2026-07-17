import * as React from 'react';
/** Barra de progresso segmentada estilo HP de jogo. */
export interface ProgressBarProps {
  /** 0–100 */
  value: number;
  /** Nº de blocos (padrão 10) */
  segments?: number;
  /** Rótulo caps acima */
  label?: string;
  /** Mostra "NN%" à direita */
  showValue?: boolean;
  style?: React.CSSProperties;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
