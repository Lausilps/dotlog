import * as React from 'react';
/** Janela estilo terminal com três dots coloridos — moldura recorrente da marca. */
export interface WindowFrameProps {
  /** Título discreto na barra */
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function WindowFrame(props: WindowFrameProps): JSX.Element;
