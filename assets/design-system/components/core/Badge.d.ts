import * as React from 'react';
/** Etiqueta caps pequena para tags e estados. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'amarelo' | 'creme' | 'verde' | 'vermelho' | 'cinza';
  children: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
