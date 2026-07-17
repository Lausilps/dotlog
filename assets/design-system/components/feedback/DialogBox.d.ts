import * as React from 'react';
/** Balão de fala do Dot — borda amarela 1px, fundo amarelo translúcido, fonte VT323.
 * @startingPoint section="Componentes" subtitle="Balão de fala do Dot" viewport="700x180"
 */
export interface DialogBoxProps {
  /** URL do sprite do Dot à esquerda (ex.: assets/landing/dot-laptop.png) */
  avatar?: string;
  /** Setinha apontando para o avatar (padrão true, só com avatar) */
  arrow?: boolean;
  /** Prefixo "&gt; " de terminal (padrão true) */
  prompt?: boolean;
  /** Cursor de bloco piscando no fim */
  cursor?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function DialogBox(props: DialogBoxProps): JSX.Element;
