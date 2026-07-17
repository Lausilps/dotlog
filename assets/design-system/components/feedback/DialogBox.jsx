import React from 'react';
export function DialogBox({avatar,arrow=true,cursor=false,prompt=true,children,style}){
  return <div style={{display:'flex',alignItems:'flex-start',gap:14,...style}}>
    {avatar&&<img src={avatar} alt="" className="cd-sprite" style={{width:90,objectFit:'contain',flex:'none'}}/>}
    <div className="cd-dialog" style={{marginTop:avatar?12:0,flex:1}}>
      {arrow&&avatar&&<span aria-hidden="true" className="cd-dialog-arrow"></span>}
      {prompt&&<>&gt; </>}{children}
      {cursor&&<span className="cd-cursor" style={{marginLeft:4}}></span>}
    </div>
  </div>;
}
