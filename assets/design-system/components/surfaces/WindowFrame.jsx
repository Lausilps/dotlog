import React from 'react';
export function WindowFrame({title,children,style}){
  return <div className="cd-window" style={style}>
    <div className="cd-window-bar">
      <span className="cd-window-dot" style={{background:'var(--vermelho)'}}></span>
      <span className="cd-window-dot" style={{background:'var(--amarelo)'}}></span>
      <span className="cd-window-dot" style={{background:'var(--verde)'}}></span>
      {title&&<span className="cd-window-title">{title}</span>}
    </div>
    <div className="cd-window-body">{children}</div>
  </div>;
}
