import React from 'react';
export function Badge({color='amarelo',children,style,...rest}){
  return <span className={`cd-badge cd-badge--${color}`} style={style} {...rest}>{children}</span>;
}
