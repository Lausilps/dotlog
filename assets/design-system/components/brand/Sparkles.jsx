import React from 'react';
export function Sparkles({count=6,color='var(--amarelo)',style}){
  const seeds=Array.from({length:count},(_,i)=>({
    left:(i*37+11)%92+3,top:(i*53+9)%86+5,plus:i%2===0,size:i%3===0?22:15,op:.3+((i*13)%25)/100
  }));
  return <div aria-hidden="true" style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'hidden',...style}}>
    {seeds.map((s,i)=>s.plus
      ?<span key={i} style={{position:'absolute',left:s.left+'%',top:s.top+'%',fontFamily:'var(--font-terminal)',fontSize:s.size,color,opacity:s.op}}>+</span>
      :<span key={i} style={{position:'absolute',left:s.left+'%',top:s.top+'%',width:7,height:7,background:color,opacity:s.op}}></span>)}
  </div>;
}
