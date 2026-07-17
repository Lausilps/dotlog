import * as React from 'react';
/** Checkbox pixel — quadrado creme que enche de amarelo quando marcado. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
