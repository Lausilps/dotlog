import * as React from 'react';
/** Botão pixel CoreDot.
 * @startingPoint section="Componentes" subtitle="Botão pixel primário/secundário/ghost" viewport="700x200"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' amarelo sólido | 'secondary' moldura creme | 'ghost' só texto */
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
