import * as React from 'react';
/** Aviso curto flutuante com ícone pixel opcional. */
export interface ToastProps {
  /** URL de ícone pixel (ex.: assets/icon-spark.png) */
  icon?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
