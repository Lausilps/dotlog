import React from 'react';
export function Card({hover=true,accent=false,shadow=false,children,style,...rest}){
  const cls='cd-card'+(hover?' cd-card--hover':'')+(accent?' cd-card--accent':'')+(shadow?' cd-card--shadow':'');
  return <div className={cls} style={style} {...rest}>{children}</div>;
}
