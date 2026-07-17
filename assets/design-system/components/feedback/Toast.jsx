import React from 'react';
export function Toast({icon,children,style}){
  return <div className="cd-toast" style={style}>
    {icon&&<img src={icon} alt="" className="cd-sprite" style={{width:28,height:28,objectFit:'contain'}}/>}
    <span>{children}</span>
  </div>;
}
