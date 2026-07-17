import * as React from 'react';
/** Cartão CoreDot — reto (sem raio), borda 1px #2c2c2c, fundo #151515. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hover: borda amarela + sobe 3px (padrão true) */
  hover?: boolean;
  /** Filete superior amarelo 2px (cards de serviço) */
  accent?: boolean;
  /** Sombra pixel dura 8px 8px 0 amarelo translúcido (card de portfólio) */
  shadow?: boolean;
  children: React.ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
