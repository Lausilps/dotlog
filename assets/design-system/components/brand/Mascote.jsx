import React from 'react';
export function Mascote({src,size=120,float=true,alt='Dot, o mascote da CoreDot',style}){
  return <img src={src} alt={alt} className="cd-sprite" style={{width:size,height:size,objectFit:'contain',animation:float?'cd-float 3s var(--ease-soft) infinite':'none',...style}}/>;
}
