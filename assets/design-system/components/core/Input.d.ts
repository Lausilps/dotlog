import * as React from 'react';
/** Campo de texto CoreDot com rótulo caps opcional. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Rótulo em caixa-alta acima do campo */
  label?: string;
  placeholder?: string;
}
export declare function Input(props: InputProps): JSX.Element;
