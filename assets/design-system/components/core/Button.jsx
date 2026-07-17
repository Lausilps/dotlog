import React from 'react';
export function Button({variant='primary',size='md',disabled=false,children,style,...rest}){
  return <button className={`cd-btn cd-btn--${variant} cd-btn--${size}`} disabled={disabled} style={style} {...rest}>{children}</button>;
}
