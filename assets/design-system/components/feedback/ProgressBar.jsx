import React from 'react';
export function ProgressBar({value=0,segments=10,label,showValue=true,style}){
  const on=Math.round((value/100)*segments);
  return <div style={style}>
    {label&&<div style={{fontSize:12,letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:10}}>{label}</div>}
    <div className="cd-progress">
      <div className="cd-progress-track">
        {Array.from({length:segments},(_,i)=><div key={i} className={'cd-progress-seg'+(i<on?' cd-progress-seg--on':'')}></div>)}
      </div>
      {showValue&&<div className="cd-progress-label">{Math.round(value)}%</div>}
    </div>
  </div>;
}
