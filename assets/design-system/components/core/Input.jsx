import React from 'react';
export function Input({label,style,...rest}){
  const field=<input className="cd-input" {...rest}/>;
  if(!label) return <div style={style}>{field}</div>;
  return <label style={{display:'flex',flexDirection:'column',gap:8,...style}}>
    <span style={{fontSize:12,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{label}</span>
    {field}
  </label>;
}
